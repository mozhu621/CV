---
title: 'LongWriter-Zero: Mastering Ultra-Long Text Generation via Reinforcement Learning'
authors:
- Yuhao Wu*
- Yushi Bai*
- Jiajie Zhang
- Xin Lv
- Roy Ka-Wei Lee
- Juanzi Li
date: '2025-01-01'
publication_types:
- manuscript
publication: 'Submitted to ICLR 2026'
abstract: 'We study the concentration of the Neural Tangent Kernel (NTK) $K_\theta : \mathbb{R}^{m_0} \times \mathbb{R}^{m_0} \to \mathbb{R}^{m_l \times m_l}$ of $l$-layer Multilayer Perceptrons (MLPs) $N : \mathbb{R}^{m_0} \times \Theta \to \mathbb{R}^{m_l}$ equipped with activation functions $\phi(s) = a s + b \vert s \vert$ for some $a,b \in \mathbb{R}$ with the parameter $\theta \in \Theta$ being initialized at the Edge Of Chaos (EOC). Without relying on the gradient independence assumption that has only been shown to hold asymptotically in the infinitely wide limit, we prove that an approximate version of gradient independence holds at finite width. Showing that the NTK entries $K_\theta(x_{i_1},x_{i_2})$ for $i_1,i_2 \in [1:n]$ over a dataset $\{x_1,\cdots,x_n\} \subset \mathbb{R}^{m_0}$ concentrate simultaneously via maximal inequalities, we prove that the NTK matrix $K(\theta) = [\frac{1}{n} K_\theta(x_{i_1},x_{i_2}) : i_1,i_2 \in [1:n]] \in \mathbb{R}^{nm_l \times nm_l}$ concentrates around its infinitely wide limit $\overset{\scriptscriptstyle\infty}{K} \in \mathbb{R}^{nm_l \times nm_l}$ without the need for linear overparameterization. Our results imply that in order to accurately approximate the limit, hidden layer widths have to grow quadratically as $m_k = k^2 m$ for some $m \in \mathbb{N}+1$ for sufficient concentration. For such MLPs, we obtain the concentration bound $\mathbb{P}( \Vert K(\theta) - \overset{\scriptscriptstyle\infty}{K} \Vert \leq O((\Delta_\phi^{-2} + m_l^{\frac{1}{2}} l) \kappa_\phi^2 m^{-\frac{1}{2}})) \geq 1-O(m^{-1})$ modulo logarithmic terms, where we denoted $\Delta_\phi = \frac{b^2}{a^2+b^2}$ and $\kappa_\phi = \frac{\vert a \vert + \vert b \vert}{\sqrt{a^2 + b^2}}$. This reveals in particular that the absolute value ($\Delta_\phi=1$, $\kappa_\phi=1$) beats the ReLU ($\Delta_\phi=\frac{1}{2}$, $\kappa_\phi=\sqrt{2}$) in terms of the concentration of the NTK.'
links:
  - name: arXiv
    url: https://arxiv.org/abs/2501.14724
  - name: PDF
    url: https://arxiv.org/pdf/2501.14724.pdf
  - name: Google Scholar
    url: https://scholar.google.com/scholar?q=LongWriter-Zero%3A%20Mastering%20Ultra-Long%20Text%20Generation%20via%20Reinforcement%20Learning
---


