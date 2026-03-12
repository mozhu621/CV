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

<!-- Avatar Switcher Script -->
<script>
(function() {
  var avatars = [
    { src: '../images/avatar.jpg', label: 'Professional' },
    { src: '../images/HAHAHA.jpg', label: 'Casual' },
    { src: '../images/katong.jpg', label: 'Cartoon' }
  ];
  var currentIndex = 0;

  function updateAvatar(idx) {
    currentIndex = idx;
    var img = document.getElementById('avatar-switcher-img');
    var label = document.getElementById('avatar-switcher-label');
    var dots = document.querySelectorAll('.avatar-dot');
    if (img) {
      img.style.opacity = '0';
      setTimeout(function() {
        img.src = avatars[idx].src;
        img.style.opacity = '1';
      }, 150);
    }
    if (label) label.textContent = avatars[idx].label;
    dots.forEach(function(dot, i) {
      dot.style.background = (i === idx) ? '#0066cc' : '#ccc';
    });
  }

  window.avatarNext = function() { updateAvatar((currentIndex + 1) % avatars.length); };
  window.avatarPrev = function() { updateAvatar((currentIndex - 1 + avatars.length) % avatars.length); };
  window.avatarGoto = function(i) { updateAvatar(i); };

  document.addEventListener('DOMContentLoaded', function() { updateAvatar(0); });
})();
</script>

<!-- Avatar Photo Section (desktop: inline with bio, mobile: above bio) -->
<div style="display:flex; align-items:flex-start; gap:36px; flex-wrap:wrap; margin-bottom:32px;">
  <div style="flex:0 0 auto; text-align:center;">
    <div style="position:relative; width:220px; display:inline-block;">
      <img id="avatar-switcher-img" src="../images/avatar.jpg" alt="Yuhao Wu"
           style="width:220px; height:260px; border-radius:14px; object-fit:cover; box-shadow:0 6px 20px rgba(0,0,0,0.14); transition:opacity 0.2s ease;">
      <button onclick="avatarPrev()" aria-label="Previous photo"
        style="position:absolute; left:-18px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.95); border:2px solid #e0e0e0; border-radius:8px; width:38px; height:46px; cursor:pointer; font-size:22px; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 10px rgba(0,0,0,0.15); transition:all 0.2s ease; color:#555; z-index:10;"
        onmouseover="this.style.background='#0066cc';this.style.color='white';"
        onmouseout="this.style.background='rgba(255,255,255,0.95)';this.style.color='#555';">‹</button>
      <button onclick="avatarNext()" aria-label="Next photo"
        style="position:absolute; right:-18px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.95); border:2px solid #e0e0e0; border-radius:8px; width:38px; height:46px; cursor:pointer; font-size:22px; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 10px rgba(0,0,0,0.15); transition:all 0.2s ease; color:#555; z-index:10;"
        onmouseover="this.style.background='#0066cc';this.style.color='white';"
        onmouseout="this.style.background='rgba(255,255,255,0.95)';this.style.color='#555';">›</button>
    </div>
    <div style="margin-top:10px;">
      <span id="avatar-switcher-label" style="font-size:13px; color:#999; letter-spacing:0.5px;">Professional</span>
    </div>
    <div style="margin-top:8px; display:flex; justify-content:center; gap:8px;">
      <span class="avatar-dot" onclick="avatarGoto(0)" style="display:inline-block; width:30px; height:5px; border-radius:3px; background:#0066cc; cursor:pointer; transition:background 0.2s;"></span>
      <span class="avatar-dot" onclick="avatarGoto(1)" style="display:inline-block; width:30px; height:5px; border-radius:3px; background:#ccc; cursor:pointer; transition:background 0.2s;"></span>
      <span class="avatar-dot" onclick="avatarGoto(2)" style="display:inline-block; width:30px; height:5px; border-radius:3px; background:#ccc; cursor:pointer; transition:background 0.2s;"></span>
    </div>
    <div style="margin-top:16px; display:flex; flex-direction:column; gap:8px; align-items:center;">
      <a href="https://scholar.google.com/citations?user=XIyHTG0AAAAJ" target="_blank"
         style="display:flex; align-items:center; gap:6px; color:#0066cc; text-decoration:none; font-size:14px;"
         onmouseover="this.style.color='#004499'" onmouseout="this.style.color='#0066cc'">
        <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>
        Google Scholar
      </a>
      <a href="mailto:mozhu621@gmail.com"
         style="display:flex; align-items:center; gap:6px; color:#0066cc; text-decoration:none; font-size:14px;"
         onmouseover="this.style.color='#004499'" onmouseout="this.style.color='#0066cc'">
        <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        mozhu621@gmail.com
      </a>
      <a href="https://github.com/mozhu621" target="_blank"
         style="display:flex; align-items:center; gap:6px; color:#0066cc; text-decoration:none; font-size:14px;"
         onmouseover="this.style.color='#004499'" onmouseout="this.style.color='#0066cc'">
        <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>
    </div>
  </div>

  <div style="flex:1; min-width:260px;">
    <p style="font-size:1.05em; line-height:1.85; color:#333; margin:0 0 20px 0;">
      I am a third-year PhD candidate at the <strong>Singapore University of Technology and Design (SUTD)</strong>, advised by Prof. <a href="https://www.roylee.sg/" target="_blank">Roy Ka-Wei Lee</a>. My research focuses on <strong>long-form generation</strong> and <strong>long-context capabilities of LLMs</strong>, spanning data generation, chain-of-thought and planning, RL-based training and alignment, and rigorous end-to-end evaluation for long text, code, and reasoning.
    </p>
    <p style="font-size:1.05em; line-height:1.85; color:#333; margin:0 0 20px 0;">
      I am currently a research intern at <strong>ByteDance Seed</strong>, working on large-scale pretraining data synthesis and Skill-Augmented Pretraining. Previously, I interned at <strong>Kimi (Moonshot AI)</strong> on Kimi-K2 long-context capabilities, and at <strong>Zhipu AI</strong> on GLM-4.x series models including long-form generation via RL.
    </p>
    <div style="padding:14px 18px; background:#fff5f5; border-left:4px solid #dc3545; border-radius:6px;">
      <p style="margin:0 0 8px; font-size:1em; color:#dc3545; font-weight:600;">
        🔍 Actively seeking internship &amp; international exchange opportunities.
      </p>
      <p style="margin:0; font-size:0.95em; color:#666; line-height:1.6;">
        If you have opportunities or wish to collaborate, please reach out:
        <a href="mailto:mozhu621@gmail.com" style="color:#0066cc; font-weight:500;">mozhu621@gmail.com</a>
        &nbsp;|&nbsp;(+65) 83777500 &nbsp;|&nbsp; (+86) 17320504505 (WeChat)
      </p>
    </div>
  </div>
</div>


# 🔥 News

- *2025-12*: &nbsp;🚀 Started as Algorithm Research Intern at **ByteDance Seed**, working on LLM pretraining data synthesis and Skill-Augmented Pretraining.
- *2025-06*: &nbsp;🎉 Started as Algorithm Research Intern at **Kimi (Moonshot AI)**, contributing to Kimi-K2-0905 long-context capabilities.
- *2025-01*: &nbsp;🏆 **LongWriter-Zero** accepted to **ICLR 2026 as Oral** (top ~1.8%). Mastering ultra-long text generation via pure RL.
- *2025-01*: &nbsp;🎉 **LongGenBench** accepted to **ICLR 2025** (main track). A benchmark for long-form generation in long-context LLMs.
- *2024-09*: &nbsp;🚀 Started as Algorithm Research Intern at **Zhipu AI**, contributing to the GLM-4.1/4.5 series.


# 💼 Experience

<div style="margin-bottom:0;">

<div style="display:flex; align-items:flex-start; gap:16px; padding:20px 0; border-bottom:1px solid #f0f0f0;">
  <div style="flex:0 0 auto; width:56px; height:56px; background:#f5f5f5; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:24px;">🌱</div>
  <div style="flex:1;">
    <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:4px;">
      <strong style="font-size:1.05em;">ByteDance Seed — Algorithm Research Intern</strong>
      <span style="color:#888; font-size:0.9em;">Dec. 2025 — Present</span>
    </div>
    <p style="margin:6px 0 0; color:#555; font-size:0.95em; line-height:1.7;">
      Participating in LLM Pretrain-Level data synthesis research, designing high-quality pretraining data pipelines, and exploring the impact of large-scale synthetic data on model capabilities. Researching Skill-Augmented Pretraining — building structured Skill Libraries and exploring how skill integration with pretraining data boosts model knowledge and capability representation.
    </p>
  </div>
</div>

<div style="display:flex; align-items:flex-start; gap:16px; padding:20px 0; border-bottom:1px solid #f0f0f0;">
  <div style="flex:0 0 auto; width:56px; height:56px; background:#f5f5f5; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:24px;">🌙</div>
  <div style="flex:1;">
    <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:4px;">
      <strong style="font-size:1.05em;">Kimi (Moonshot AI) — Algorithm Research Intern</strong>
      <span style="color:#888; font-size:0.9em;">Jun. 2025 — Dec. 2025</span>
    </div>
    <p style="margin:6px 0 0; color:#555; font-size:0.95em; line-height:1.7;">
      Deeply involved in iterating Kimi-K2-0905 for long-context capabilities, including long-text and long-code synthetic data construction, Long Code Generation data pipelines, and follow-up works including Kimi-Linear and Kimi-K2-Thinking.
    </p>
  </div>
</div>

<div style="display:flex; align-items:flex-start; gap:16px; padding:20px 0; border-bottom:1px solid #f0f0f0;">
  <div style="flex:0 0 auto; width:56px; height:56px; background:#f5f5f5; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:24px;">🤖</div>
  <div style="flex:1;">
    <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:4px;">
      <strong style="font-size:1.05em;">Zhipu AI — Algorithm Research Intern</strong>
      <span style="color:#888; font-size:0.9em;">Sep. 2024 — Jun. 2025</span>
    </div>
    <p style="margin:6px 0 0; color:#555; font-size:0.95em; line-height:1.7;">
      Deeply contributed to the GLM-Zero series serving GLM-4.1/4.5 full-model line. Work covered long-chain CoT data construction, Reward Model design, RLHF alignment, and end-to-end benchmark evaluation. Proposed agent-guided hierarchical SFT data generation combined with hierarchical DPO (<strong>SuperWriter</strong>) and a pure RL strategy for ultra-long text generation (<strong>LongWriter-Zero</strong>).
    </p>
  </div>
</div>

<div style="display:flex; align-items:flex-start; gap:16px; padding:20px 0;">
  <div style="flex:0 0 auto; width:56px; height:56px; background:#f5f5f5; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:24px;">✈️</div>
  <div style="flex:1;">
    <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:4px;">
      <strong style="font-size:1.05em;">Trip.com (Ctrip) — NLP Algorithm Intern</strong>
      <span style="color:#888; font-size:0.9em;">Jul. 2021 — Oct. 2021</span>
    </div>
    <p style="margin:6px 0 0; color:#555; font-size:0.95em; line-height:1.7;">
      Applied NLP and machine learning algorithms to mine and analyze business-scenario text data. Improved short-text matching accuracy by 9%. Designed knowledge reasoning and intelligent dialogue response systems for customer service. First-author patent granted: CN Patent Number 202111234433X.
    </p>
  </div>
</div>

</div>


# 🎓 Education

<div>

<div style="display:flex; align-items:flex-start; gap:16px; padding:18px 0; border-bottom:1px solid #f0f0f0;">
  <div style="flex:0 0 auto; width:56px; height:56px; background:#e8f0fe; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:22px;">🎓</div>
  <div style="flex:1;">
    <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:4px;">
      <strong style="font-size:1.05em;">Singapore University of Technology and Design (SUTD)</strong>
      <span style="color:#888; font-size:0.9em;">2023 — Present</span>
    </div>
    <p style="margin:4px 0 0; color:#555; font-size:0.95em;"><em>Ph.D. in Natural Language Processing</em></p>
    <p style="margin:2px 0 0; color:#777; font-size:0.9em;">Advisor: Prof. <a href="https://www.roylee.sg/" target="_blank">Roy Ka-Wei Lee</a> &nbsp;|&nbsp; Singapore (In collaboration with MIT &amp; Zhejiang University)</p>
  </div>
</div>

<div style="display:flex; align-items:flex-start; gap:16px; padding:18px 0; border-bottom:1px solid #f0f0f0;">
  <div style="flex:0 0 auto; width:56px; height:56px; background:#e8f0fe; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:22px;">🏛️</div>
  <div style="flex:1;">
    <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:4px;">
      <strong style="font-size:1.05em;">Tsinghua University (THU)</strong>
      <span style="color:#888; font-size:0.9em;">Sep. 2024 — Jul. 2025</span>
    </div>
    <p style="margin:4px 0 0; color:#555; font-size:0.95em;"><em>Visiting Ph.D. Student</em> in Natural Language Processing</p>
    <p style="margin:2px 0 0; color:#777; font-size:0.9em;">Beijing, China</p>
  </div>
</div>

<div style="display:flex; align-items:flex-start; gap:16px; padding:18px 0;">
  <div style="flex:0 0 auto; width:56px; height:56px; background:#e8f0fe; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:22px;">📐</div>
  <div style="flex:1;">
    <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:4px;">
      <strong style="font-size:1.05em;">Huazhong Agricultural University (211)</strong>
      <span style="color:#888; font-size:0.9em;">2018 — 2022</span>
    </div>
    <p style="margin:4px 0 0; color:#555; font-size:0.95em;"><em>Bachelor of Science</em> in Mathematics</p>
    <p style="margin:2px 0 0; color:#777; font-size:0.9em;">Wuhan, Hubei, China</p>
  </div>
</div>

</div>


# 📝 Selected Publications

<div style="margin-bottom:8px; color:#666; font-size:0.9em;">* denotes equal contribution. For full list, see <a href="https://scholar.google.com/citations?user=XIyHTG0AAAAJ" target="_blank">Google Scholar</a>.</div>

---

**Tech Reports**

- **Co-author** · Kimi Linear: An Expressive, Efficient Attention Architecture · *Moonshot AI, 2025*
- **Co-author** · GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models · *Zhipu AI, 2025*
- **Co-author** · Kimi K2.5: Visual Agentic Intelligence · *Moonshot AI, 2025*
- **Co-author** · Seed2.0 Model Card: Towards Intelligence Frontier for Real-World Complexity · *ByteDance Seed, 2025*

---

**Papers**

<div class="paper-box">
  <div class="paper-box-image">
    <div><div class="badge">ICLR 2026 Oral</div><img src='../images/longwriter-zero.png' alt="LongWriter-Zero" width="100%" onerror="this.style.display='none'"></div>
  </div>
  <div class="paper-box-text" markdown="1">

[**LongWriter-Zero: Mastering Ultra-Long Text Generation via Reinforcement Learning**](https://arxiv.org/abs/2502.07593)

**Yuhao Wu\***, Yushi Bai\*, Jiajie Zhang, Xin Lv, Roy Ka-Wei Lee, Juanzi Li

*ICLR 2026 Oral* · [[Paper]](https://arxiv.org/abs/2502.07593) [[Code]](https://github.com/THUDM/LongWriter-Zero)

Pure RL training strategy that enables LLMs to master ultra-long (10,000+ word) text generation without any SFT warm-up, achieving state-of-the-art long-form generation quality.

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div><div class="badge">ICLR 2025</div><img src='../images/longgenbench.png' alt="LongGenBench" width="100%" onerror="this.style.display='none'"></div>
  </div>
  <div class="paper-box-text" markdown="1">

[**LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs**](https://arxiv.org/abs/2410.04199)

**Yuhao Wu**, Yushi Bai, Zhiqing Hu, Ming Shan Hee, Juanzi Li, Roy Ka-Wei Lee

*ICLR 2025* · [[Paper]](https://arxiv.org/abs/2410.04199) [[Code]](https://github.com/mozhu621/LongGenBench)

A comprehensive benchmark for evaluating long-form generation capabilities in long-context LLMs, revealing key limitations in existing models' output quality.

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div><div class="badge">ACL 2026 (Submit)</div><img src='../images/superwriter.png' alt="SuperWriter" width="100%" onerror="this.style.display='none'"></div>
  </div>
  <div class="paper-box-text" markdown="1">

[**SuperWriter: Reflection-Driven Long-Form Writing with LLMs**](https://arxiv.org/abs/2502.09606)

**Yuhao Wu\***, Yushi Bai\*, Zhiqing Hu, Juanzi Li, Roy Ka-Wei Lee

*Submitted to ACL 2026* · [[Paper]](https://arxiv.org/abs/2502.09606)

A hierarchical SFT + DPO framework where agents self-guide the generation of structured long-form writing data with reflection, enabling high-quality ultra-long outputs.

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div><div class="badge">ACL 2026 (Submit)</div><img src='../images/shifting.png' alt="Shifting" width="100%" onerror="this.style.display='none'"></div>
  </div>
  <div class="paper-box-text" markdown="1">

[**Shifting Long-Context LLMs Research from Input to Output**](https://arxiv.org/abs/2501.14524)

**Yuhao Wu**, Yushi Bai, Zhiqing Hu, Shangqing Tu, Ming Shan Hee, Juanzi Li, Roy Ka-Wei Lee

*Submitted to ACL 2026* · [[Paper]](https://arxiv.org/abs/2501.14524)

A position paper advocating for a paradigm shift in long-context LLM research — from focusing on long-input understanding to long-output generation.

  </div>
</div>

- **Yuhao Wu**, Maojia Song, Yihuai Lan, Lei Wang, Zhiqiang Hu, Yao Xiao, Heng Zhou, Weihua Zheng, Dylan Raharja, Soujanya Poria, Roy Ka-Wei Lee. From Perception to Action: An Interactive Benchmark for Vision Reasoning. *arXiv 2026*.

- Shangqing Tu, Yucheng Wang, Daniel Zhang-Li, Yushi Bai, Jifan Yu, **Yuhao Wu**, Lei Hou, Huiqin Liu, Zhiyuan Liu, Bin Xu, Juanzi Li. LongWriter-V: Enabling Ultra-Long and High-Fidelity Generation in Vision-Language Models. **ACM MM 2025**.

- Ziyu Ge\*, **Yuhao Wu\***, Daniel Chin, Roy Ka-Wei Lee, Rui Cao. Resolving Conflicting Evidence in Automated Fact-Checking: A Study on Retrieval-Augmented LLMs. **IJCAI 2025**.

- **Yuhao Wu**, K. Sharma, C. Seah, S. Zhang. [SentiStream: A Co-Training Framework for Adaptive Online Sentiment Analysis in Evolving Data Streams](https://aclanthology.org/2023.emnlp-main.1010/). **EMNLP 2023**.

- **Yuhao Wu\***, T. Shi\*, K. Sharma, C. W. Seah, S. Zhang. Online Continual Knowledge Learning for Language Models. *arXiv 2023*.
