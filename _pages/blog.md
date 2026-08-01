---
permalink: /blog/
title: "Writing"
description: "Research notes by Yuhao Wu on data, model self-improvement, long-form generation, and long-context systems."
author_profile: false
page_class: writing-page
---

<header class="writing-header">
  <p class="home-eyebrow">Notes &amp; unfinished thoughts</p>
  <h1>Writing</h1>
  <p>I use this space to work through research questions before they become papers, systems, or failed experiments.</p>
  <a href="{{ site.baseurl }}/">← Back to homepage</a>
</header>

<div class="writing-list">
{% for post in site.posts %}
{% unless post.listed == false %}
  <article class="writing-list-item">
    <div class="writing-list-date">{{ post.date | date: "%d %b %Y" }}</div>
    <div>
      <p class="writing-list-kicker">{{ post.category | default: "Research note" }}</p>
      <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.description }}</p>
      <div class="writing-list-links">
        <a class="writing-list-link" href="{{ site.baseurl }}{{ post.url }}">中文版 →</a>
        {% if post.translation_url %}<a class="writing-list-link" href="{{ post.translation_url | relative_url }}">English →</a>{% endif %}
      </div>
    </div>
  </article>
{% endunless %}
{% endfor %}
</div>
