---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a third-year PhD candidate at the **Singapore University of Technology and Design (SUTD)** (in collaboration with MIT & Zhejiang University), advised by Prof. [Roy Ka-Wei Lee](https://www.roylee.sg/). My research focuses on **long-form generation** and **long-context capabilities of LLMs**, spanning data generation, chain-of-thought and planning, RL-based training and alignment, and end-to-end evaluation for long text, code, and reasoning.

I am currently a research intern at **ByteDance Seed**, working on large-scale pretraining data synthesis and Skill-Augmented Pretraining. Previously, I interned at **Kimi (Moonshot AI)** on Kimi-K2 long-context capabilities, and at **Zhipu AI** on the GLM-4.x series via long-form generation with RL.

My papers have received <a href='https://scholar.google.com/citations?user=XIyHTG0AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> citations.

<div style="padding: 12px 16px; background: #fff8f0; border-left: 4px solid #e67e22; border-radius: 4px; margin: 16px 0;">
🔍 <strong>I am actively seeking internship and international exchange opportunities.</strong> Feel free to reach out at <a href="mailto:mozhu621@gmail.com">mozhu621@gmail.com</a>
</div>


# 🔥 News

- *2026.01*: &nbsp;🏆 **LongWriter-Zero** accepted to **ICLR 2026 as Oral** (top ~1.8%) — pure RL for ultra-long text generation without SFT!
- *2025.12*: &nbsp;🚀 Started as Algorithm Research Intern at **ByteDance Seed**, working on LLM pretraining data synthesis and Skill-Augmented Pretraining.
- *2025.06*: &nbsp;🚀 Started as Algorithm Research Intern at **Kimi (Moonshot AI)**, contributing to Kimi-K2 long-context capabilities.
- *2025.01*: &nbsp;🎉 **LongGenBench** accepted to **ICLR 2025** main track.
- *2024.09*: &nbsp;🚀 Joined **Zhipu AI** as Algorithm Research Intern, contributing to the GLM-4.1/4.5 series.


# 💼 Experience

**ByteDance Seed — Algorithm Research Intern** &emsp; *Dec. 2025 – Present · Beijing, China*
- Participated in LLM Pretrain-Level data synthesis research; designed high-quality pretraining data pipelines and explored the impact of large-scale synthetic data on model capabilities.
- Researched **Skill-Augmented Pretraining**: built structured Skill Libraries and explored skill-data integration to boost model knowledge and capability expression.

**Kimi (Moonshot AI) — Algorithm Research Intern** &emsp; *Jun. 2025 – Dec. 2025 · Beijing, China*
- Deeply involved in iterating **Kimi-K2-0905** for long-context capabilities, including long-text/code synthetic data construction and Long Code Generation data pipelines.
- Follow-up works include **Kimi-Linear** and **Kimi-K2-Thinking**.

**Zhipu AI — Algorithm Research Intern** &emsp; *Sep. 2024 – Jun. 2025 · Beijing, China*
- Deeply contributed to the **GLM-Zero series** serving GLM-4.1/4.5; work covered long-chain CoT data construction, Reward Model design, RLHF alignment, and end-to-end benchmark evaluation.
- Proposed **SuperWriter**: agent-guided hierarchical SFT data generation + hierarchical DPO for long-form writing.
- Proposed **LongWriter-Zero**: pure RL strategy for ultra-long text generation (**ICLR 2026 Oral**).

**Trip.com (Ctrip) — NLP Algorithm Intern** &emsp; *Jul. 2021 – Oct. 2021 · Shanghai, China*
- Applied NLP/ML algorithms to improve short-text matching accuracy by 9%. Designed intelligent dialogue systems for customer service. First-author granted patent: CN 202111234433X.


# 🎓 Education

- *2023 – Present* &emsp; **Ph.D.** in Natural Language Processing · Singapore University of Technology and Design (SUTD) · Advisor: Prof. [Roy Ka-Wei Lee](https://www.roylee.sg/)
- *Sep. 2024 – Jul. 2025* &emsp; **Visiting Ph.D. Student** · Tsinghua University (THU) · Beijing, China
- *2018 – 2022* &emsp; **B.Sc.** in Mathematics · Huazhong Agricultural University (211) · Wuhan, China


# 📝 Selected Publications

<small>\* denotes equal contribution &nbsp;|&nbsp; For complete list see <a href="https://scholar.google.com/citations?user=XIyHTG0AAAAJ" target="_blank">Google Scholar</a></small>

## Technology Reports

- **Co-author** — *Kimi Linear: An Expressive, Efficient Attention Architecture*. Moonshot AI, 2025.
- **Co-author** — *GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models*. Zhipu AI, 2025.
- **Co-author** — *Kimi K2.5: Visual Agentic Intelligence*. Moonshot AI, 2025.
- **Co-author** — *Seed2.0 Model Card: Towards Intelligence Frontier for Real-World Complexity*. ByteDance Seed, 2025.

## Papers

- <span style="color:#c0392b;font-weight:600;">[ICLR 2026 Oral]</span> **Yuhao Wu\***, Yushi Bai\*, Jiajie Zhang, Xin Lv, Roy Ka-Wei Lee, Juanzi Li. [LongWriter-Zero: Mastering Ultra-Long Text Generation via Reinforcement Learning](https://arxiv.org/abs/2502.07593). \[[Code](https://github.com/THUDM/LongWriter-Zero)\]

- <span style="color:#2980b9;font-weight:600;">[ICLR 2025]</span> **Yuhao Wu**, Yushi Bai, Zhiqing Hu, Ming Shan Hee, Juanzi Li, Roy Ka-Wei Lee. [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://arxiv.org/abs/2410.04199). \[[Code](https://github.com/mozhu621/LongGenBench)\]

- <span style="color:#27ae60;font-weight:600;">[ACL 2026 Under Review]</span> **Yuhao Wu\***, Yushi Bai\*, Zhiqing Hu, Juanzi Li, Roy Ka-Wei Lee. [SuperWriter: Reflection-Driven Long-Form Writing with LLMs](https://arxiv.org/abs/2502.09606).

- <span style="color:#27ae60;font-weight:600;">[ACL 2026 Under Review]</span> **Yuhao Wu**, Yushi Bai, Zhiqing Hu, Shangqing Tu, Ming Shan Hee, Juanzi Li, Roy Ka-Wei Lee. [Shifting Long-Context LLMs Research from Input to Output](https://arxiv.org/abs/2501.14524).

- **Yuhao Wu**, Maojia Song, Yihuai Lan, Lei Wang, Zhiqiang Hu, Yao Xiao, Heng Zhou, Weihua Zheng, Dylan Raharja, Soujanya Poria, Roy Ka-Wei Lee. *From Perception to Action: An Interactive Benchmark for Vision Reasoning*. arXiv 2026.

- Shangqing Tu, Yucheng Wang, Daniel Zhang-Li, Yushi Bai, Jifan Yu, **Yuhao Wu**, Lei Hou, Huiqin Liu, Zhiyuan Liu, Bin Xu, Juanzi Li. *LongWriter-V: Enabling Ultra-Long and High-Fidelity Generation in Vision-Language Models*. **ACM MM 2025**.

- Ziyu Ge\*, **Yuhao Wu\*** , Daniel Chin, Roy Ka-Wei Lee, Rui Cao. *Resolving Conflicting Evidence in Automated Fact-Checking: A Study on Retrieval-Augmented LLMs*. **IJCAI 2025**.

- **Yuhao Wu**, K. Sharma, C. Seah, S. Zhang. [SentiStream: A Co-Training Framework for Adaptive Online Sentiment Analysis in Evolving Data Streams](https://aclanthology.org/2023.emnlp-main.1010/). **EMNLP 2023**.

- **Yuhao Wu\***, T. Shi\*, K. Sharma, C. W. Seah, S. Zhang. *Online Continual Knowledge Learning for Language Models*. arXiv 2023.
