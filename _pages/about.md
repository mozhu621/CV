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

I am a third-year PhD candidate at the **Singapore University of Technology and Design (SUTD)** (in collaboration with MIT & Zhejiang University), advised by Prof. [Roy Ka-Wei Lee](https://www.roylee.sg/). My research focuses on **long-form generation** and **long-context capabilities of LLMs**, spanning data generation, chain-of-thought and planning, RL-based training and alignment, and rigorous end-to-end evaluation for long text, code, and reasoning.

I am currently a research intern at **ByteDance Seed**, working on large-scale pretraining data synthesis and Skill-Augmented Pretraining. Previously, I interned at **Kimi (Moonshot AI)** contributing to [Kimi-K2](https://arxiv.org/abs/2507.07461) long-context capabilities, and at **Zhipu AI** contributing to the [GLM-4.x](https://arxiv.org/abs/2507.11983) series via long-form generation with RL.

My published papers have received <a href='https://scholar.google.com/citations?user=XIyHTG0AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> citations.

📧 **Contact:** [mozhu621@gmail.com](mailto:mozhu621@gmail.com) &nbsp;|&nbsp; (+65) 83777500 &nbsp;|&nbsp; (+86) 17320504505 (WeChat)

<div style="padding: 12px 16px; background: #fff5f5; border-left: 4px solid #e74c3c; border-radius: 4px; margin: 16px 0;">
🔍 <strong>I am actively seeking internship and international exchange opportunities.</strong> Feel free to reach out!
</div>


# 🔥 News

- *2025.12*: &nbsp;🚀 Started as Algorithm Research Intern at **ByteDance Seed**, working on LLM pretraining data synthesis and Skill-Augmented Pretraining.
- *2025.06*: &nbsp;🚀 Started as Algorithm Research Intern at **Kimi (Moonshot AI)**, contributing to long-context capabilities of Kimi-K2.
- *2025.01*: &nbsp;🏆 **LongWriter-Zero** accepted to **ICLR 2026 as Oral** presentation (top ~1.8%). Pure RL for ultra-long text generation!
- *2025.01*: &nbsp;🎉 **LongGenBench** accepted to **ICLR 2025** (main track). A benchmark for evaluating long-form generation in LLMs.
- *2024.09*: &nbsp;🚀 Joined **Zhipu AI** as Algorithm Research Intern, contributing to the GLM-4.1/4.5 series.


# 💼 Experience

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Dec. 2025 – Present</div><img src='images/favicon-32x32.png' alt="ByteDance" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**ByteDance Seed — Algorithm Research Intern** · Beijing, China

- Participated in LLM Pretrain-Level data synthesis research; designed high-quality pretraining data pipelines and explored effects of large-scale synthetic data on model capabilities.
- Researched **Skill-Augmented Pretraining**: built structured Skill Libraries and explored skill-data integration to boost model knowledge and capability representation.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Jun. 2025 – Dec. 2025</div><img src='images/favicon-32x32.png' alt="Kimi" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Kimi (Moonshot AI) — Algorithm Research Intern** · Beijing, China

- Deeply involved in iterating **Kimi-K2-0905** for long-context capabilities, including long-text/code synthetic data construction, Long Code Generation data pipelines.
- Follow-up works include **Kimi-Linear** and **Kimi-K2-Thinking**.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Sep. 2024 – Jun. 2025</div><img src='images/favicon-32x32.png' alt="Zhipu AI" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Zhipu AI — Algorithm Research Intern** · Beijing, China

- Deeply contributed to the **GLM-Zero series** serving GLM-4.1/4.5 full-model line; work covered long-chain CoT data, Reward Model design, RLHF alignment, and end-to-end benchmark evaluation.
- Proposed **SuperWriter**: agent-guided hierarchical SFT data generation + hierarchical DPO for long-form writing.
- Proposed **LongWriter-Zero**: pure RL strategy for ultra-long text generation (ICLR 2026 Oral).

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Jul. 2021 – Oct. 2021</div><img src='images/favicon-32x32.png' alt="Trip.com" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Trip.com (Ctrip) — NLP Algorithm Intern** · Shanghai, China

- Applied NLP/ML algorithms to improve short-text matching accuracy by 9%.
- Designed knowledge reasoning and intelligent dialogue systems for customer service.
- First-author granted patent: **CN Patent 202111234433X**.

</div>
</div>


# 🎓 Education

- *2023 – Present*, **Ph.D.** in Natural Language Processing, Singapore University of Technology and Design (SUTD), advised by Prof. [Roy Ka-Wei Lee](https://www.roylee.sg/). *(In collaboration with MIT & Zhejiang University)*
- *Sep. 2024 – Jul. 2025*, **Visiting Ph.D. Student**, Tsinghua University (THU), Beijing, China.
- *2018 – 2022*, **B.Sc.** in Mathematics, Huazhong Agricultural University (211), Wuhan, China.


# 📝 Selected Publications

*(\* denotes equal contribution)*

**Tech Reports**

- **Co-author** · *Kimi Linear: An Expressive, Efficient Attention Architecture* · Moonshot AI, 2025
- **Co-author** · *GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models* · Zhipu AI, 2025
- **Co-author** · *Kimi K2.5: Visual Agentic Intelligence* · Moonshot AI, 2025
- **Co-author** · *Seed2.0 Model Card: Towards Intelligence Frontier for Real-World Complexity* · ByteDance Seed, 2025

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026 Oral</div><img src='images/500x300.png' alt="LongWriter-Zero" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**LongWriter-Zero: Mastering Ultra-Long Text Generation via Reinforcement Learning**](https://arxiv.org/abs/2502.07593)

**Yuhao Wu\***, Yushi Bai\*, Jiajie Zhang, Xin Lv, Roy Ka-Wei Lee, Juanzi Li

[[Paper]](https://arxiv.org/abs/2502.07593) &nbsp; [[Code]](https://github.com/THUDM/LongWriter-Zero)

A pure RL training strategy enabling LLMs to master ultra-long (10,000+ word) text generation **without any SFT warm-up**, achieving SOTA long-form generation quality.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='images/500x300.png' alt="LongGenBench" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs**](https://arxiv.org/abs/2410.04199)

**Yuhao Wu**, Yushi Bai, Zhiqing Hu, Ming Shan Hee, Juanzi Li, Roy Ka-Wei Lee

[[Paper]](https://arxiv.org/abs/2410.04199) &nbsp; [[Code]](https://github.com/mozhu621/LongGenBench)

A comprehensive benchmark for evaluating long-form generation in long-context LLMs, revealing key limitations in existing models' output quality.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026 Under Review</div><img src='images/500x300.png' alt="SuperWriter" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**SuperWriter: Reflection-Driven Long-Form Writing with LLMs**](https://arxiv.org/abs/2502.09606)

**Yuhao Wu\***, Yushi Bai\*, Zhiqing Hu, Juanzi Li, Roy Ka-Wei Lee

[[Paper]](https://arxiv.org/abs/2502.09606)

Hierarchical SFT + DPO framework: agents self-guide the generation of structured long-form writing data with reflection, enabling high-quality ultra-long outputs.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026 Under Review</div><img src='images/500x300.png' alt="Shifting" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Shifting Long-Context LLMs Research from Input to Output**](https://arxiv.org/abs/2501.14524)

**Yuhao Wu**, Yushi Bai, Zhiqing Hu, Shangqing Tu, Ming Shan Hee, Juanzi Li, Roy Ka-Wei Lee

[[Paper]](https://arxiv.org/abs/2501.14524)

A position paper advocating a paradigm shift in long-context LLM research — from focusing on long-input understanding to long-output generation.

</div>
</div>

- **Yuhao Wu**, Maojia Song, Yihuai Lan, Lei Wang, Zhiqiang Hu, Yao Xiao, Heng Zhou, Weihua Zheng, Dylan Raharja, Soujanya Poria, Roy Ka-Wei Lee. *From Perception to Action: An Interactive Benchmark for Vision Reasoning*. arXiv 2026.

- Shangqing Tu, Yucheng Wang, Daniel Zhang-Li, Yushi Bai, Jifan Yu, **Yuhao Wu**, Lei Hou, Huiqin Liu, Zhiyuan Liu, Bin Xu, Juanzi Li. *LongWriter-V: Enabling Ultra-Long and High-Fidelity Generation in Vision-Language Models*. **ACM MM 2025**.

- Ziyu Ge\*, **Yuhao Wu\***, Daniel Chin, Roy Ka-Wei Lee, Rui Cao. *Resolving Conflicting Evidence in Automated Fact-Checking: A Study on Retrieval-Augmented LLMs*. **IJCAI 2025**.

- **Yuhao Wu**, K. Sharma, C. Seah, S. Zhang. [*SentiStream: A Co-Training Framework for Adaptive Online Sentiment Analysis in Evolving Data Streams*](https://aclanthology.org/2023.emnlp-main.1010/). **EMNLP 2023**.

- **Yuhao Wu\***, T. Shi\*, K. Sharma, C. W. Seah, S. Zhang. *Online Continual Knowledge Learning for Language Models*. arXiv 2023.
