---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: markdown
    content:
      text: |-
        <style>
        /* Bold Yuhao Wu in all publication lists */
        .pub-authors, .article-metadata .authors {
          font-size: inherit;
        }
        
        /* Target author links and text containing "Yuhao Wu" */
        .pub-authors span:first-child,
        .article-metadata .authors > span:first-child,
        .citation-author:first-child {
          font-weight: 700 !important;
        }
        
        /* More specific targeting for Yuhao Wu */
        .pub-authors span {
          font-weight: normal;
        }
        
        .pub-authors span:first-of-type {
          font-weight: 700 !important;
        }
        
        /* Adjusted spacing */
        #about, section {
          padding-top: 25px !important;
          padding-bottom: 25px !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        
        .page-body {
          padding-top: 10px !important;
        }
        
        .home-section {
          padding-top: 25px !important;
          padding-bottom: 25px !important;
        }
        
        /* Minimal spacing between content blocks */
        .wg-blank {
          padding: 10px !important;
        }
        
        section:first-of-type {
          padding-top: 10px !important;
        }
        </style>
  - block: markdown
    id: about
    content:
      title: '<span style="font-size:1.3em; font-weight:700;">About</span>'
      text: |-
        <script src="/js/avatar-switcher.js"></script>
        <div style="display:flex; align-items:flex-start; gap:40px; flex-wrap:wrap;">
          <div style="flex:0 0 auto; position:relative;">
            <div style="position:relative; width:280px; height:330px;">
              <img id="avatar-display" src="authors/admin/avatar.jpg" alt="Profile photo" style="width:100%; height:100%; border-radius:12px; box-shadow:0 8px 24px rgba(0,0,0,0.15); object-fit:cover; transition:opacity 0.3s ease;">
              <button type="button" onclick="avatarState.prevAvatar()" onmouseover="this.style.background='#0066cc';this.style.color='white';this.style.transform='translateY(-50%) scale(1.1)';" onmouseout="this.style.background='rgba(255,255,255,0.95)';this.style.color='#333';this.style.transform='translateY(-50%) scale(1)';" style="position:absolute; left:-20px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.95); border:2px solid #e0e0e0; border-radius:8px; width:42px; height:52px; cursor:pointer; font-size:26px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.2); transition:all 0.3s ease; font-weight:bold; color:#333; z-index:10;">‹</button>
              <button type="button" onclick="avatarState.nextAvatar()" onmouseover="this.style.background='#0066cc';this.style.color='white';this.style.transform='translateY(-50%) scale(1.1)';" onmouseout="this.style.background='rgba(255,255,255,0.95)';this.style.color='#333';this.style.transform='translateY(-50%) scale(1)';" style="position:absolute; right:-20px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.95); border:2px solid #e0e0e0; border-radius:8px; width:42px; height:52px; cursor:pointer; font-size:26px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.2); transition:all 0.3s ease; font-weight:bold; color:#333; z-index:10;">›</button>
            </div>
            <div style="text-align:center; margin-top:18px;">
              <span id="avatar-label" style="font-size:15px; color:#888;">Professional</span>
              <div style="margin-top:12px; display:flex; justify-content:center; gap:10px;">
                <span onclick="avatarState.updateAvatar(0)" style="display:inline-block; width:36px; height:7px; border-radius:3px; background:#0066cc; cursor:pointer; transition:all 0.3s ease;" id="dot-0"></span>
                <span onclick="avatarState.updateAvatar(1)" style="display:inline-block; width:36px; height:7px; border-radius:3px; background:#ccc; cursor:pointer; transition:all 0.3s ease;" id="dot-1"></span>
                <span onclick="avatarState.updateAvatar(2)" style="display:inline-block; width:36px; height:7px; border-radius:3px; background:#ccc; cursor:pointer; transition:all 0.3s ease;" id="dot-2"></span>
              </div>
              <div style="margin-top:20px; display:flex; flex-direction:column; gap:10px; align-items:center;">
                <a href="https://scholar.google.com/citations?user=XIyHTG0AAAAJ" target="_blank" rel="noopener" style="display:flex; align-items:center; gap:8px; color:#0066cc; text-decoration:none; font-size:16px; transition:color 0.3s ease;" onmouseover="this.style.color='#004499'" onmouseout="this.style.color='#0066cc'">
                  <svg style="width:20px; height:20px;" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/>
                  </svg>
                  <span>Google Scholar</span>
                </a>
                <a href="mailto:mozhu621@gmail.com" style="display:flex; align-items:center; gap:8px; color:#0066cc; text-decoration:none; font-size:16px; transition:color 0.3s ease;" onmouseover="this.style.color='#004499'" onmouseout="this.style.color='#0066cc'">
                  <svg style="width:20px; height:20px;" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>mozhu621@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div style="flex:1; min-width:300px;">
            <p style="margin:0 0 24px 0; font-size:21px; line-height:1.8; color:#333;">I am a third-year PhD candidate at the Singapore University of Technology and Design (SUTD), advised by Prof. <a href="https://info.roylee.sg/" target="_blank" rel="noopener">Roy Ka-Wei Lee</a>. My research focuses on long-form generation and long-context capabilities of LLMs, spanning data generation, chain-of-thought and planning, RL-based training and alignment, and rigorous end-to-end evaluation for long text, code, and reasoning.</p>
            <div style="margin:0; padding:16px 20px; background:#fff5f5; border-left:4px solid #dc3545; border-radius:6px;">
              <p style="margin:0 0 10px 0; font-size:18px; color:#dc3545; line-height:1.7;">
                <strong>🔍 I am actively seeking internship and international exchange opportunities.</strong>
              </p>
              <p style="margin:0; font-size:17px; color:#666; line-height:1.6;">
                If you have any opportunities or would like to collaborate, please feel free to reach out: 
                <a href="mailto:mozhu621@gmail.com" style="color:#0066cc; text-decoration:none; font-weight:500;">mozhu621@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
  - block: markdown
    id: news
    content:
      title: '<span style="font-size:1.3em; font-weight:700;">News</span>'
      subtitle:
      text: |-
        <div style="font-size:19px; line-height:2.1;">
          <p style="margin:10px 0;">📢 <strong>[2025-06]</strong> Started as Algorithm Research Intern at <strong>Kimi (Moonshot AI)</strong>.</p>
          <p style="margin:10px 0;">🎉 <strong>[2025-01]</strong> <strong>LongGenBench</strong> accepted to <strong>ICLR 2025</strong> (main track).</p>
          <p style="margin:10px 0;">🚀 <strong>[2024-09]</strong> Joined <strong>Zhipu AI</strong> as Algorithm Research Intern, collaborating closely with <a href="https://bys0318.github.io/" target="_blank" rel="noopener" style="color:#0066cc; text-decoration:none;">Yushi Bai</a>.</p>
        </div>
  - block: markdown
    content:
      text: |-
        <style>
        #experience .card-title {
          font-size: 22px !important;
        }
        #experience .organization {
          font-size: 20px !important;
        }
        #experience .card-text {
          font-size: 19px !important;
        }
        #experience .experience-meta {
          font-size: 18px !important;
        }
        </style>
  - block: experience
    id: experience
    content:
      title: '<span style="font-size:1.3em; font-weight:700;">Experience</span>'
      date_format: Jan 2006
      items:
        - title: Algorithm Research Intern (Kimi | Moonshot AI)
          company: Beijing, China
          company_url: ''
          date_start: '2025-06-01'
          date_end: ''
          description: |2-
            Iterated Kimi-K2-0905 for long-context capabilities, including synthetic data for long text/code and evaluation for code reasoning and generation.
        - title: Algorithm Research Intern (Zhipu AI)
          company: Beijing, China
          company_url: ''
          date_start: '2024-09-01'
          date_end: '2025-06-01'
          description: |2-
            Contributed to GLM-4.1/4.5 projects; proposed O1/R1-think framework for long-form generation (hierarchical SFT + DPO & Pure RL).
        - title: NLP Algorithm Intern (Trip.com)
          company: Shanghai, China
          company_url: ''
          date_start: '2021-07-01'
          date_end: '2021-10-01'
          description: |2-
            Applied NLP and machine learning algorithms to improve short-text matching performance by 9%. Designed intelligent dialogue systems for customer service. Authored a granted patent (CN Patent Number: 202111234433X) as first author.

  - block: markdown
    id: education
    content:
      title: '<span style="font-size:1.3em; font-weight:700;">Education</span>'
      text: |-
        <div style="font-size:22px; line-height:1.9;">
          <div style="margin-bottom:24px;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;">
              <h3 style="margin:0; font-size:23px; font-weight:600;">Singapore University of Technology and Design (SUTD)</h3>
              <span style="color:#666; font-size:21px;">2023 — Present</span>
            </div>
            <p style="margin:4px 0; color:#555; font-size:21px;"><em>Ph.D. Student</em> in Natural Language Processing</p>
            <p style="margin:8px 0 0 0; color:#666; font-size:20px;">Advisor: Prof. <a href="https://info.roylee.sg/" target="_blank" style="color:#0066cc; text-decoration:none;">Roy Ka-Wei Lee</a></p>
          </div>
          
          <div style="margin-bottom:24px;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;">
              <h3 style="margin:0; font-size:23px; font-weight:600;">Tsinghua University (THU)</h3>
              <span style="color:#666; font-size:21px;">Sep. 2024 — Jul. 2025</span>
            </div>
            <p style="margin:4px 0; color:#555; font-size:21px;"><em>Visiting Ph.D. Student</em> at Knowledge Engineering Group (KEG)</p>
            <p style="margin:8px 0 0 0; color:#666; font-size:20px;">Beijing, China</p>
          </div>
          
          <div style="margin-bottom:24px;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;">
              <h3 style="margin:0; font-size:23px; font-weight:600;">Huazhong Agricultural University</h3>
              <span style="color:#666; font-size:21px;">2018 — 2022</span>
            </div>
            <p style="margin:4px 0; color:#555; font-size:21px;"><em>Bachelor's Degree</em> in Mathematics</p>
            <p style="margin:8px 0 0 0; color:#666; font-size:20px;">Wuhan, Hubei, China</p>
          </div>
        </div>

  - block: collection
    id: publications
    content:
      title: '<span style="font-size:1.1em; font-weight:700;">Recent Publications</span>'
      text: |-
        <p style="font-size:18px; color:#666; line-height:1.7;">For more publications, please visit the <a href="./publication/" style="color:#0066cc; text-decoration:none; font-weight:500;">publications page</a>.</p>
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation

  - block: contact
    id: contact
    content:
      title: '<span style="font-size:1.3em; font-weight:700;">Contact</span>'
      subtitle:
      text: |-
       <p style="font-size:19px; line-height:1.9;">If you are interested in my work or would like to collaborate, feel free to email me.</p>
      # Contact (add or remove contact options as necessary)
      email: mozhu621@gmail.com
    # design:
    #   columns: '2'
---
