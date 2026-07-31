---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

<section class="home-hero">
  <p class="home-eyebrow">Yuhao Wu · NLP Researcher</p>
  <h1>Language models that can write longer, reason better, and learn from better data.</h1>
  <p class="home-lede">I work on long-form generation, long-context intelligence, and the data systems behind model improvement.</p>
  <div class="home-actions">
    <a class="home-button home-button--primary" href="{{ site.baseurl }}/files/Yuhao_Wu_CV.pdf">Read my CV</a>
    <a class="home-button" href="https://scholar.google.com/citations?user=XIyHTG0AAAAJ">Google Scholar</a>
    <a class="home-button" href="mailto:mozhu621@gmail.com">Email me</a>
  </div>
</section>

<div class="home-intro-grid">
  <div>
    <p>I am a third-year PhD candidate at the <strong>Singapore University of Technology and Design (SUTD)</strong>, advised by Prof. <a href="https://isakzhang.github.io/">Wenxuan Zhang</a> and Prof. <a href="https://www.roylee.sg/">Roy Ka-Wei Lee</a>. My work spans data generation, chain-of-thought and planning, RL-based training and alignment, and end-to-end evaluation for long text, code, and reasoning.</p>
    <p>Before starting my PhD, I studied mathematics. That background still shapes how I think about model behavior: I care less about a single score, and more about whether a capability is stable, explainable, and transferable.</p>
    <p class="citation-line">The full publication record is on <a href="https://scholar.google.com/citations?user=XIyHTG0AAAAJ" target="_blank" rel="noopener">Google Scholar</a>; BibTeX for the selected work below is also available as <a href="{{ site.baseurl }}/files/yuhao-wu-publications.bib" download>one file</a>.</p>
  </div>
  <aside class="current-note">
    <span>Currently</span>
    <strong>Research Intern, ByteDance Seed</strong>
    <p>Large-scale pretraining data synthesis and Skill-Augmented Pretraining.</p>
    <small>Previously: Kimi (Moonshot AI) and Zhipu AI.</small>
  </aside>
</div>

<div class="research-grid" aria-label="Research areas">
  <div>
    <span>01</span>
    <strong>Data &amp; self-improvement</strong>
    <p>Synthetic data, training trajectories, and the feedback loops that decide what a model should learn next.</p>
  </div>
  <div>
    <span>02</span>
    <strong>Long-form generation</strong>
    <p>Planning, reflection, and reinforcement learning for coherent outputs over genuinely long horizons.</p>
  </div>
  <div>
    <span>03</span>
    <strong>Long-context evaluation</strong>
    <p>Benchmarks and analysis that look beyond retrieval to reasoning, consistency, and useful action.</p>
  </div>
</div>

<div class="availability-note">
  <span>Open to conversations</span>
  <p>I am actively seeking full-time research positions. Feel free to reach out at <a href="mailto:mozhu621@gmail.com">mozhu621@gmail.com</a>.</p>
</div>


<span class='anchor' id='news'></span>

# News

- *2026.04*: &nbsp;**SuperWriter** accepted to **ACL 2026 Findings** — reflection-driven long-form writing with LLMs.
- *2026.04*: &nbsp;Received the **Tencent Student Travel Grant** for ICLR 2026 (10 recipients worldwide).
- *2026.01*: &nbsp;**LongWriter-Zero** accepted to **ICLR 2026 as Oral** (top ~1.8%) — pure RL for ultra-long text generation without SFT.
- *2025.12*: &nbsp;Started as Algorithm Research Intern at **ByteDance Seed**, working on LLM pretraining data synthesis and Skill-Augmented Pretraining.
- *2026*: &nbsp;**Seed2.0 Model Card** released — ByteDance Seed.
- *2026*: &nbsp;**Kimi K2.5: Visual Agentic Intelligence** released — Moonshot AI.
- *2025.06 – 2025.12*: &nbsp;Algorithm Research Intern at **Kimi (Moonshot AI)**, contributing to Kimi-K2.5 long-context capabilities.
- *2025.01*: &nbsp;**LongGenBench** accepted to **ICLR 2025** main track.
- *2024.09*: &nbsp;Joined **Zhipu AI** as Algorithm Research Intern, contributing to the GLM-4.1/4.5 series.


<span class='anchor' id='blog'></span>

# Writing

<p class="section-intro">Notes on data, model self-improvement, long-context systems, and research questions I am still trying to make precise.</p>

<article class="blog-feature-card">
  <div class="blog-card-meta">
    <span>Research note</span>
    <time datetime="2026-07-31">31 Jul 2026</time>
  </div>
  <h2><a href="{{ site.baseurl }}/blog/data-driven-rsi/">Data 可能是 RSI 最先能想清楚的一块</a></h2>
  <p>如果模型还要继续 scaling，下一批真正有用的数据从哪里来？这篇文章从模糊评估、Synthetic Data Ladder 和 Harness–Evolve 三个问题出发，试着把 Data-driven RSI 讲得更具体一点。</p>
  <div class="blog-card-footer">
    <span>Eval</span><span>Synthetic data</span><span>Harness–Evolve</span>
    <a href="{{ site.baseurl }}/blog/data-driven-rsi/">Read note <span aria-hidden="true">→</span></a>
  </div>
</article>

<p class="all-writing-link"><a href="{{ site.baseurl }}/blog/">All writing →</a></p>


<span class='anchor' id='experience'></span>

# Experience

**ByteDance Seed &mdash; Algorithm Research Intern** <span style="float:right;color:#888;font-weight:normal;">Dec. 2025 – Present &nbsp;·&nbsp; Beijing</span>
- Participated in LLM Pretrain-Level data synthesis research; designed high-quality pretraining data pipelines and explored the impact of large-scale synthetic data on model capabilities.
- Researched **Skill-Augmented Pretraining**: built structured Skill Libraries and explored skill-data integration to boost model knowledge and capability expression.

**Kimi (Moonshot AI) &mdash; Algorithm Research Intern** <span style="float:right;color:#888;font-weight:normal;">Jun. – Dec. 2025 &nbsp;·&nbsp; Beijing</span>
- Deeply involved in iterating **Kimi-K2.5** for long-context capabilities, covering long-text/code synthetic data construction and Long Code Generation data pipelines.
- Follow-up works include **Kimi-Linear** and **Kimi-K2-Thinking**.

**Zhipu AI &mdash; Algorithm Research Intern** <span style="float:right;color:#888;font-weight:normal;">Sep. 2024 – Jun. 2025 &nbsp;·&nbsp; Beijing</span>
- Deeply contributed to the **GLM-Zero series** serving GLM-4.1/4.5; work covered long-chain CoT data construction, Reward Model design, RLHF alignment, and end-to-end benchmark evaluation.
- Proposed **SuperWriter**: agent-guided hierarchical SFT + hierarchical DPO for long-form writing.
- Proposed **LongWriter-Zero**: pure RL strategy for ultra-long text generation (**ICLR 2026 Oral**).

<span class='anchor' id='education'></span>

# Education

- *Sep. 2023 – Present* &emsp; **Ph.D.** in Natural Language Processing, Singapore University of Technology and Design (SUTD). Advisors: Prof. [Wenxuan Zhang](https://isakzhang.github.io/) and Prof. [Roy Ka-Wei Lee](https://www.roylee.sg/).
- *Sep. 2024 – Jul. 2025* &emsp; **Visiting Ph.D. Student**, Tsinghua University (THU), Beijing.
- *Sep. 2018 – Jun. 2022* &emsp; **B.Sc.** in Mathematics, Huazhong Agricultural University (HZAU), Wuhan.


<span class='anchor' id='publications'></span>

<section class="publication-section">
  <header class="publication-header">
    <div>
      <p class="publication-eyebrow">Research output</p>
      <h1>Selected Publications</h1>
      <p>A concise selection of papers and technical reports. <sup>*</sup> denotes equal contribution; <sup>†</sup> denotes a supervised student.</p>
    </div>
    <div class="publication-header-actions">
      <a href="https://scholar.google.com/citations?user=XIyHTG0AAAAJ" target="_blank" rel="noopener">Google Scholar <span aria-hidden="true">↗</span></a>
      <a href="{{ site.baseurl }}/files/yuhao-wu-publications.bib" download>Download BibTeX <span aria-hidden="true">↓</span></a>
    </div>
  </header>

  <div class="publication-group-heading">
    <h2>Papers</h2>
    <span>{{ site.data.publications.papers | size }} selected works</span>
  </div>
  <div class="publication-list">
    {% for publication in site.data.publications.papers %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>

  <div class="publication-group-heading publication-group-heading--reports">
    <h2>Technology Reports</h2>
    <span>{{ site.data.publications.reports | size }} model and architecture reports</span>
  </div>
  <div class="publication-list publication-list--reports">
    {% for publication in site.data.publications.reports %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
</section>
