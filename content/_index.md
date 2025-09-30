---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: About
      username: admin
  - block: markdown
    content:
      title: News
      subtitle:
      text: |-
        - [2025-06] Started as Algorithm Research Intern at Kimi (Moonshot AI).
        - [2025-01] LongGenBench accepted to ICLR 2025 (main track).
        - [2024-09] Joined Zhipu AI as Algorithm Research Intern, collaborating closely with [Yushi Bai](https://bys0318.github.io/).
  - block: markdown
    content:
      title: Avatar Switcher
      subtitle:
      text: |-
        <p>Switch between my profile photos. The default is the professional portrait. Use the buttons to toggle.</p>
        <div id="avatar-switcher" style="text-align:center;">
          <img id="avatar-display" src="/authors/admin/avatar.jpg" alt="Profile photo" style="max-width:220px;border-radius:50%;box-shadow:0 4px 12px rgba(0,0,0,0.15);">
          <div style="margin-top:10px;">
            <button type="button" style="margin-right:6px;" onclick="setAvatar('avatar')">Professional</button>
            <button type="button" style="margin-right:6px;" onclick="setAvatar('katong')">Katong</button>
            <button type="button" onclick="setAvatar('HAHAHA')">Fun</button>
          </div>
        </div>
        <script>
        function setAvatar(name){
          var map = {
            avatar: '/authors/admin/avatar.jpg',
            katong: '/authors/admin/katong.png',
            HAHAHA: '/authors/admin/HAHAHA.jpg'
          };
          var img = document.getElementById('avatar-display');
          if(img && map[name]){ img.src = map[name]; }
        }
        </script>
  - block: experience
    content:
      title: Experience
      date_format: Jan 2006
      items:
        - title: Algorithm Research Intern (Kimi | Moonshot AI)
          company: Beijing, China
          company_url: ''
          date_start: '2025-06'
          date_end: ''
          description: |2-
            Iterated Kimi-K2-0905 for long-context capabilities, including synthetic data for long text/code and evaluation for code reasoning and generation.
        - title: Algorithm Research Intern (Zhipu AI)
          company: Beijing, China
          company_url: ''
          date_start: '2024-09'
          date_end: '2025-06'
          description: |2-
            Contributed to GLM-4.1/4.5 projects; proposed O1/R1-think framework for long-form generation (hierarchical SFT + DPO & Prue RL).

  - block: collection
    content:
      title: Recent Publications
      text: |-
        For more, please visit the publications page.
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
      title: Contact
      subtitle:
      text: |-
       If you are interested in my work or would like to collaborate, feel free to email me.
      # Contact (add or remove contact options as necessary)
      email: mozhu621@gmail.com
    # design:
    #   columns: '2'
---
