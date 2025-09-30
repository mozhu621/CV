#!/usr/bin/env python3
import re
import sys
import pathlib
import xml.etree.ElementTree as ET
from typing import Optional

import urllib.request


PUBLICATION_DIR = pathlib.Path("/Users/moonshot/CV/content/publication")


ARXIV_ID_RE = re.compile(r"arxiv\.org/(?:abs|pdf)/([0-9]{4}\.[0-9]{5})(?:v\d+)?")


def fetch_arxiv_abstract(arxiv_id: str) -> str:
    url = f"http://export.arxiv.org/api/query?id_list={arxiv_id}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 arxiv-abs-updater"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        data = resp.read()
    # Parse Atom XML
    root = ET.fromstring(data)
    ns = {"ns": "http://www.w3.org/2005/Atom"}
    entry = root.find("ns:entry", ns)
    if entry is None:
        raise RuntimeError(f"No entry returned for arXiv ID {arxiv_id}")
    summary_el = entry.find("ns:summary", ns)
    if summary_el is None or not summary_el.text:
        raise RuntimeError(f"No summary found for arXiv ID {arxiv_id}")
    # Normalize whitespace to single spaces
    summary = re.sub(r"\s+", " ", summary_el.text.strip())
    return summary


def yaml_single_quote(s: str) -> str:
    # Escape single quotes for YAML single-quoted style by doubling them
    return "'" + s.replace("'", "''") + "'"


def update_abstract_in_text(text: str, new_abstract: str) -> str:
    lines = text.splitlines()
    abstract_line_idx = None
    for i, line in enumerate(lines):
        if line.startswith("abstract:"):
            abstract_line_idx = i
            break
    if abstract_line_idx is None:
        # Insert after publication line if abstract missing
        insert_idx = None
        for i, line in enumerate(lines):
            if line.startswith("publication:"):
                insert_idx = i + 1
                break
        quoted = yaml_single_quote(new_abstract)
        if insert_idx is None:
            # Fallback: insert before the end of front matter (second '---')
            dash_indices = [i for i, l in enumerate(lines) if l.strip() == "---"]
            if len(dash_indices) >= 2:
                insert_idx = dash_indices[1]
            else:
                insert_idx = len(lines)
        return "\n".join(lines[:insert_idx] + [f"abstract: {quoted}"] + lines[insert_idx:])
    quoted = yaml_single_quote(new_abstract)
    # Replace the abstract line with single-line quoted abstract
    lines[abstract_line_idx] = f"abstract: {quoted}"
    return "\n".join(lines) + ("\n" if text.endswith("\n") else "")


def extract_arxiv_id(text: str) -> Optional[str]:
    m = ARXIV_ID_RE.search(text)
    if m:
        return m.group(1)
    return None


def main():
    updated = []
    skipped = []
    failed = []
    for idx_md in sorted(PUBLICATION_DIR.glob("*/index.md")):
        content = idx_md.read_text(encoding="utf-8")
        arxiv_id = extract_arxiv_id(content)
        if not arxiv_id:
            skipped.append((idx_md, "no arXiv id"))
            continue
        try:
            abstract = fetch_arxiv_abstract(arxiv_id)
        except Exception as e:
            failed.append((idx_md, str(e)))
            continue
        new_text = update_abstract_in_text(content, abstract)
        if new_text != content:
            idx_md.write_text(new_text, encoding="utf-8")
            updated.append(idx_md)
        else:
            skipped.append((idx_md, "abstract unchanged"))

    print("Updated:")
    for p in updated:
        print(" -", p)
    print("Skipped:")
    for p, reason in skipped:
        print(f" - {p} ({reason})")
    if failed:
        print("Failed:")
        for p, err in failed:
            print(f" - {p}: {err}")
        sys.exit(2)


if __name__ == "__main__":
    main()


