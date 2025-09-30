---
title: 'Shifting Long-Context LLMs Research from Input to Output'
authors:
- Yuhao Wu
- Yushi Bai
- Zhiqing Hu
- Shangqing Tu
- Ming Shan Hee
- Juanzi Li
- Roy Ka-Wei Lee
date: '2025-01-01'
publication_types:
- manuscript
publication: 'Submitted to ARR 2025'
abstract: 'Concept Bottleneck Models (CBMs) offer inherent interpretability by initially translating images into human-comprehensible concepts, followed by a linear combination of these concepts for classification. However, the annotation of concepts for visual recognition tasks requires extensive expert knowledge and labor, constraining the broad adoption of CBMs. Recent approaches have leveraged the knowledge of large language models to construct concept bottlenecks, with multimodal models like CLIP subsequently mapping image features into the concept feature space for classification. Despite this, the concepts produced by language models can be verbose and may introduce non-visual attributes, which hurts accuracy and interpretability. In this study, we investigate to avoid these issues by constructing CBMs directly from multimodal models. To this end, we adopt common words as base concept vocabulary and leverage auxiliary unlabeled images to construct a Vision-to-Concept (V2C) tokenizer that can explicitly quantize images into their most relevant visual concepts, thus creating a vision-oriented concept bottleneck tightly coupled with the multimodal model. This leads to our V2C-CBM which is training efficient and interpretable with high accuracy. Our V2C-CBM has matched or outperformed LLM-supervised CBMs on various visual classification benchmarks, validating the efficacy of our approach.'
links:
  - name: arXiv
    url: https://arxiv.org/abs/2501.04975
  - name: PDF
    url: https://arxiv.org/pdf/2501.04975.pdf
  - name: Google Scholar
    url: https://scholar.google.com/scholar?q=Shifting%20Long-Context%20LLMs%20Research%20from%20Input%20to%20Output
---


