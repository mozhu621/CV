---
layout: default
title: "Data-driven RSI：Eval、Synthetic Data Ladder 与轨迹产线"
description: "一个关于数据驱动自我改进的工作框架：如何用开放目标的评估发现失败，用 Synthetic Data Ladder 判断数据是否值得扩量，再用 Harness–Evolve 生产可训练的轨迹。"
permalink: /blog/data-driven-rsi/
category: "Research note"
author_profile: false
page_class: blog-post
lang: zh-CN
translation_url: /blog/data-driven-rsi/en/
---

<header class="post-header">
  <div class="post-utility">
    <a class="post-back" href="{{ site.baseurl }}/blog/">← Writing</a>
    <nav class="post-language" aria-label="语言切换"><span>中文</span><a href="{{ '/blog/data-driven-rsi/en/' | relative_url }}">English</a></nav>
  </div>
  <p class="post-kicker">Research note · 31 Jul 2026 · Updated 2 Aug 2026</p>
  <h1>Data-driven RSI：Eval、<br>Synthetic Data Ladder 与轨迹产线</h1>
  <p class="post-dek">如果 RSI 真会发生，它最早可能不是模型直接改写自己的权重，而是一条更具体的闭环：模型发现失败，围绕失败生产训练经验，再把学到的能力带回下一轮。本文试着把这条闭环拆成三个可以实验的问题。</p>
  <div class="post-tags"><span>Eval</span><span>Synthetic data</span><span>Harness–Evolve</span></div>
</header>

<nav class="post-toc" aria-label="文章目录">
  <strong>这篇会聊</strong>
  <ol>
    <li><a href="#start-with-data">先从 Data 开始</a></li>
    <li><a href="#synthetic-data">为什么一定会走到 synthetic data</a></li>
    <li><a href="#eval">Eval 得能给出下一步</a></li>
    <li><a href="#ladder">从 architecture ladder 到 synthetic-data ladder</a></li>
    <li><a href="#trajectory">轨迹需要一条靠谱的产线</a></li>
    <li><a href="#related-work">它与现有工作的关系</a></li>
  </ol>
</nav>

<span class="anchor" id="start-with-data"></span>

# 先从 Data 开始

如果 RSI 真的开始发生，最初的形态未必特别 dramatic。模型未必先学会改自己的 architecture，更可能先学会一件朴素的事：把下一批训练数据做得更好。

算法当然重要，但这块很难提前说清。一个新想法为什么有效，放大以后还灵不灵，常常是先做出来，后面才慢慢知道。真要预测下一次关键的算法变化会出现在哪里，我没有太多把握。

Data 要具体得多。模型先做一批没见过的任务，暴露出自己会在哪里失败；这些失败被整理出来，变成新的练习和轨迹，再训练回模型。新模型出来以后，换一批题，再来一次。

这里的重点不是多喂一些 token，而是让模型的失败改变下一批数据。如果这个 loop 能稳定转起来，模型就已经在参与决定自己下一轮学什么了。它离完整意义上的 RSI 可能还很远，但已经构成了一个足够实际的起点。

沿着这条思路往下走，会遇到三个问题：

- “数学更强”“coding 更强”这种模糊目标，怎么评估到足以指导下一步？
- 一批 synthetic data 看起来不错，怎么知道目标模型能不能学到，又该做多少？
- 过去靠人摸索出来的合成经验，怎么变成一条可以反复跑的轨迹产线？

这篇就只谈这三件事。

## 先给几个工作定义

这里的 **RSI** 不是指模型在一次推理中直接重写自己的参数。本文采用一个更弱、也更容易实验的定义：当前模型参与发现能力缺口、生产下一轮训练经验；训练得到的后继模型在未参与生产的新任务上取得可复现的提升。

**开放目标评估**（open-ended evaluation）也不等于“主观评估”。目标可以是宽的，例如数学研究能力，但每轮留下的证据必须具体：任务、轨迹、失败原因、验证结果和下一步的数据处方都要能复查。

**Harness–Evolve** 是本文给数据生产方式取的工作名称，不是一个已有的标准算法。Harness 定义模型工作的环境；Evolve 在这个环境里产生、修改和筛选多条候选轨迹；最后再通过 SFT 把选出的过程训练进目标模型。这个边界很重要：Evolve 本身不更新权重。

<span class="anchor" id="synthetic-data"></span>

# 为什么一定会走到 synthetic data

只要把 Data-driven 往前推一步，synthetic data 就躲不开。

这在 post-training 里已经很明显了。SFT 样本、偏好对、批评与重写、verifier 筛过的 rollout、tool-use trajectory，很多都不是从网上直接捡来的。它们是模型、规则、工具和人一起做出来的。现在不少能力提升，靠的就是这些被设计过的经验。

PT 也开始有类似的味道。自然数据当然还是地基，但清洗、去重、筛选做得越来越好以后，下一份增量数据会更多来自重写、转换、难度控制、推理补全、代码执行筛选，或者把已有材料重新变成一个值得学的任务。PT 和 post-training 的数据边界会越来越模糊。

这并不意味着自然数据不重要。恰恰相反，它给了模型知识、语言和世界的底子。但自然数据不会专门照着某一个模型的失败长出来。模型刚好不会哪一步，互联网通常不会立刻送来一万条难度合适、反馈清楚的练习。

这里所说的数据墙，不是“互联网上没有新东西了”，而是对下一版模型真正有用、没有被反复吃过、质量又够高的数据，增长开始跟不上模型和算力的胃口。对公开文本存量与训练需求的估算也指出，高质量人类文本可能成为继续扩大训练规模的约束之一（[Villalobos et al., 2024](https://arxiv.org/abs/2211.04325)）。这不是一个精确的撞墙日期，但足以说明：新增 token 不再天然等于新增能力。

> 真正稀缺的不是 token，而是下一步刚好有用的经验。

如果模型还要靠 scaling 往前走，就不能只等人类再写一个更大的互联网。它需要参与制造下一轮经验：把自己的失败变成任务，把工具和 verifier 的反馈变成过程，再把其中有用的轨迹训练回去。因此，synthetic data 会成为 RSI 的重要前置。

当然，synthetic data 也可能只是更快地复制旧东西。一个模型批量写出它本来就会写的答案，数量再大也未必有用；让它一边生产、一边自评，还可能把自己的偏好越放越大。所以后面三个问题——eval、Ladder 和轨迹产线——少一个都不行。

<span class="anchor" id="eval"></span>

# 1. Eval 得能给出下一步

假设目标是“让模型 coding 更强”。最容易的做法是挑一个 Benchmark，然后开始刷分。但刷一阵以后，题型、答案甚至评分偏好都会慢慢进入训练流程。分数还在涨，却越来越难判断：模型是真的会写更多代码了，还是更会做这套题了。

Benchmark 不是没用。它适合做快照，也适合比较一个局部变化。问题是它一旦成了长期训练目标，就不再是一个很独立的测量工具。“数学能力”和“coding 能力”又本来就不是一个分数能讲完的东西。更现实的问题是 contamination：相同的污染检测方法，对不同模型和 benchmark 的解释力也不一样（[Singh et al., 2024](https://arxiv.org/abs/2411.03923)）。所以这里反对的不是 benchmark，而是把一个已经进入优化回路的固定分数继续当成外部真值。

> 我想要的 eval，更像一个会挑错的测试负责人，而不是一张 leaderboard。

长期目标可以模糊，证据不能模糊。每一轮评估至少应该说清楚：模型在哪类新任务上失败；卡在知识、规划、工具使用还是检查；这个失败能不能复现；修完以后能不能迁移到另一批题。

更关键的是，结果得能改变下一轮工作。它需要指出接下来应该补哪类任务，用什么环境让模型练，什么数据先别做，以及下一次拿什么新题回来验证。如果 eval 最后只留下一个总分，它很难真的驱动自我迭代。

一轮 eval 的产物不应该只有 score，至少还要有一份 **failure record**：失败发生在哪个任务切片，最终错误是什么，轨迹里最早出现偏差的位置在哪里，可能对应哪一种机制，以及下一批数据准备干预什么。相同的“timeout”可能来自错误规划、工具调用失败或上下文管理失效；只按终局标签聚类，会把不同问题混在一起。Self-Harness 也采用了类似的 weakness mining：先从可验证轨迹中找出模型特定的失败模式，再提出受约束的 harness 修改（[Zhang et al., 2026](https://arxiv.org/abs/2606.09498)）。

对这类评估，我会看五层证据：

1. **Outcome**：任务最终是否完成，判断能否由执行器或明确 verifier 给出。
2. **Process**：失败最早从哪里开始，后面的错误是否只是连锁反应。
3. **Slice**：问题是否在一类新任务上重复出现，而不是单个 bad case。
4. **Prescription**：它能否导出下一批任务、反馈形式或 Harness 变化。
5. **Transfer**：干预以后，提升是否出现在没有参与数据生产的 held-out 任务上。

<figure class="rsi-diagram rsi-diagram--flow">
  <div><span>01</span><strong>先说想变强什么</strong></div>
  <div><span>02</span><strong>出一批没见过的题</strong></div>
  <div><span>03</span><strong>看失败发生在哪</strong></div>
  <div><span>04</span><strong>决定下一批数据</strong></div>
  <div><span>05</span><strong>换新题再试一次</strong></div>
  <figcaption>图 1. 编号表示一轮工作的先后，而不是五个独立分数。Eval 在这里不是终点；第 03 步看到的失败，会直接决定第 04 步生产什么数据。</figcaption>
</figure>

这件事大概只能 in-house 做。因为评估要跟着自己的模型、工具和数据一起变，题也不能永远固定。旧的失败修掉以后，系统应该继续往边界外出题，而不是继续庆祝一个已经会做的分数。

评估和数据生产之间还需要保持一点距离。如果同一个模型负责出题、解题、筛选和打分，这个闭环很快会变成自我确认。留一批没见过的任务，用执行器或独立 verifier，再加少量人工抽查，麻烦一点，但值得。

<span class="anchor" id="ladder"></span>

# 2. Ladder：先看趋势，再谈规模

假设一个 coding Harness 一周能跑出一百万条轨迹，要不要全做？这个问题不能拍脑袋决定。合成数据最麻烦的地方就在这里：样本可以写得很漂亮，答案也可以是对的，训练到目标模型上却没有任何变化。

Ladder 这个词借自 model architecture 的研究。一种新的 architecture 不会一上来就拿最大的算力做到底。通常会先跑几个从小到大的模型，看 loss 和下游能力怎么随参数、token 和 compute 变化；还会看它相对 baseline 的优势是在放大、保持，还是逐渐消失。小模型上的一个好点子，不一定能活到更大的 scale。Architecture ladder 想回答的是：**这个设计值不值得继续 scale。**

Data ladder 问的是另一件事。固定目标模型和训练方法，只改变某类数据的数量、比例或覆盖范围，然后观察每增加一段数据，独立 eval 还能得到多少收益。它关心的不是新 architecture 能不能放大，而是：**这批数据还提供多少新的学习信号，以及应该做到哪里停。**

到了 synthetic data，这条 ladder 又多了一层麻烦。自然数据通常先在那里，再决定取多少；synthetic data 则是生产出来的。生产模型、Harness、verifier、采样温度和筛选规则只要换一个，数据分布就会跟着换。量做大以后，通过率可能下降，重复会增加，长尾任务也可能被简单样本淹没。更重要的是，同一批轨迹对不同目标模型的作用并不一样：有的模型能吸收其中的规划习惯，有的模型只学到措辞，还有的模型几乎没有变化。

已有工作已经开始直接测 synthetic data 的 scaling curve。例如 SynthLLM 在数学预训练实验中观察到可拟合的增长曲线与明显的饱和区，而且不同大小的目标模型达到最优点所需的 token 数并不相同（[Qin et al., 2025](https://arxiv.org/abs/2503.19551)）。这正好说明“能生成多少”和“应该生成多少”是两件事。不过，单条 pipeline 上拟合出的曲线还不能自动外推到另一种生产模型、Harness 或目标模型。

所以三种 Ladder 看起来相似，真正押注的对象并不一样：

<figure class="ladder-figure">
  <div class="ladder-comparison">
    <div>
      <strong>Architecture ladder</strong>
      <p class="ladder-axis">放大对象：模型与 compute</p>
      <div class="ladder-scale" aria-label="从小模型逐级放大到大模型"><span>小模型</span><i></i><span>中模型</span><i></i><span>大模型</span></div>
      <p>看结构优势会扩大、保持，还是逐渐消失。</p>
      <small>问题是：这个 model design 值不值得继续做大？</small>
    </div>
    <div>
      <strong>Data ladder</strong>
      <p class="ladder-axis">放大对象：固定来源的数据量</p>
      <div class="ladder-scale" aria-label="从小批数据逐级增加到大批数据"><span>小批</span><i></i><span>中批</span><i></i><span>大批</span></div>
      <p>固定训练对象，观察增益、迁移和边际回报。</p>
      <small>问题是：这批数据还值不值得继续加？</small>
    </div>
    <div>
      <strong>Synthetic-data ladder</strong>
      <p class="ladder-axis">放大对象：产线 × 数据 × 目标模型</p>
      <div class="ladder-scale" aria-label="从验证数据开始，经过小规模训练，再决定是否扩量"><span>验证</span><i></i><span>小训</span><i></i><span class="ladder-scale__stop">扩量？</span></div>
      <p>每一级都要重新确认轨迹有没有被目标模型吸收。</p>
      <small>问题是：这条产线，针对这个模型，还值不值得继续跑？</small>
    </div>
  </div>
  <div class="diagram-legend" aria-label="图例">
    <strong>图例</strong>
    <span><i class="legend-key legend-key--node"></i>一个经过训练与 eval 的台阶</span>
    <span><i class="legend-key legend-key--line"></i>前一级有信号，才继续投入</span>
    <span><i class="legend-key legend-key--stop"></i>优势消失或收益饱和时停</span>
  </div>
  <figcaption>图 2. 三种 Ladder 的形式相似，但横轴并不相同。前两种主要放大一个变量；synthetic-data ladder 还把生产管线和目标模型带进了实验。</figcaption>
</figure>

因此，synthetic-data ladder 是一串越来越贵的小赌注。先花最少的钱确认任务和 verifier 没问题，再做一次小训练看有没有信号；有信号才扩量，然后看迁移和饱和。上一层没回答清楚，就不急着爬下一层。

<div class="ladder-stack">
  <div><span>01</span><section><strong>数据本身成立吗</strong><p>任务可解吗？答案和 verifier 靠谱吗？它真的碰到了目标能力吗？</p><small>这一层不过，就先别训练。</small></section></div>
  <div><span>02</span><section><strong>小模型能学到吗</strong><p>拿一小批数据做一次便宜的训练，目标行为有没有稳定变化？</p><small>看不到可重复的变化，就先别扩量。</small></section></div>
  <div><span>03</span><section><strong>多做还有用吗</strong><p>数据量扩大几倍以后，收益还在不在？新轨迹有没有带来新信息？</p><small>这里看趋势，不迷信某一个点的分数。</small></section></div>
  <div><span>04</span><section><strong>能迁移吗</strong><p>在没有参与数据生产的新任务上，它也变好了吗？原来的能力掉没掉？</p><small>只会做同一种题，不算真的学会。</small></section></div>
  <div><span>05</span><section><strong>什么时候停</strong><p>继续生成、筛选和训练的成本，是否已经超过新带来的能力增益？</p><small>找到饱和区，才知道该做多少。</small></section></div>
</div>

## 一个最小可用的实验设计

为了让 Ladder 真正可比较，每次只放开少数变量。最小版本可以固定目标模型起点、训练 token budget、优化器和 held-out eval，只改变被接受且去重后的 trajectory 数量，例如做四个逐级扩大的数据点，并保留一个不加这批数据的 control。每一级至少重复两次，以免把训练噪声当成趋势。

每个点同时记录三类量：生产侧的生成成本、通过率和去重率；训练侧的有效 token、训练稳定性与行为变化；评估侧的目标切片提升、跨切片迁移和回归。只有当相邻台阶的增益在重复实验中方向一致，才进入更贵的一层。

严格地说，在足够多的规模点、目标模型和生产管线上验证以前，它只是 **ladder experiment**，还不是一条可外推的 scaling law。Ladder 的价值首先是控制投资节奏与暴露饱和点，而不是提前承诺一条漂亮的幂律。

## 先看哪几个数

“总共生成了多少条”不是最重要的数。更有用的是：多少条通过验证，去重以后还剩多少，每增加一批不同的轨迹，独立 eval 上有没有新的提升。前两个数决定这条产线到底多贵，最后一个数决定它值不值得继续。

小批量训练看到信号以后，可以把被接受且不重复的轨迹逐级放大。每一级尽量固定模型起点、训练配置和评估集，也保留上一层作对照。如果量翻了几倍，独立任务却不再变好，或者通过率一路掉，那就已经接近这条 pipeline 的饱和点。

合理产量不是预算能买到的最大数量，而是饱和以前那一段。这听起来很朴素，但没有 Ladder，很容易先把昂贵的数据做完，再回来解释它为什么没用。

## Ladder 要跟着模型走

同一批 synthetic data 放到两个模型上，结果可能差很多。因为每条数据都带着生产模型和 Harness 的习惯：怎么拆题、爱用什么工具、什么时候回退、会犯什么错。目标模型能不能吸收这些习惯，并没有通用答案。

所以目标模型、生产模型或 Harness 只要换了一个，都应该先回到小台阶重跑。上一条曲线可以当参考，不能当保证。这也是 synthetic data 的 scaling law 比自然数据更难做的地方。

<span class="anchor" id="trajectory"></span>

# 3. 轨迹需要一条靠谱的产线

以前的数据其实一直是人设计的。人决定去哪里找，什么值得留下，怎么标注，哪些任务先学、哪些后学。即使原料来自互联网，进入模型以前也已经走过一条人为的数据管线。

现在不少 synthetic data pipeline，说到底还是 prompt + model + filter。这能很快得到大量问答，但仍然太薄。真正值得模型学习的，往往不是最后那句答案，而是它怎么搜、怎么试、看到报错以后怎么改、在哪一步发现自己走错了。

## 一个 prompt 不是产线

coding 里，人知道测试结果很重要；数学里，人会用证明检查、反例和难度递进；agent 任务里，人知道环境状态和工具返回不能丢。这些经验过去散在 prompt、脚本和研究者的脑子里。Harness 的作用，是把它们变成模型每次运行都会遇到的环境。

这里说的 Harness，不只是包在模型外面的工程壳。更完整的定义包括 prompt、工具、上下文管理、工作流、持久状态、权限与验证逻辑；它决定模型如何观察、行动、保存结果和检查自己（[Weng, 2026](https://lilianweng.github.io/posts/2026-07-04-harness/)）。换句话说，它直接决定最终能收集到哪一种轨迹。

<div class="production-checks">
  <div><strong>能追踪</strong><p>任务、生产模型、Harness、工具和 verifier 都有清楚的版本。</p></div>
  <div><strong>看得到过程</strong><p>留下必要的状态、行动、工具反馈、失败和修改。</p></div>
  <div><strong>能验证</strong><p>成功尽量来自执行结果或独立判断，也能解释为什么丢掉一条轨迹。</p></div>
  <div><strong>有差异</strong><p>控制不同 Harness 和模型的比例，去掉重复轨迹与同一种表达。</p></div>
  <div><strong>能回测</strong><p>每批数据都回到 Ladder 和独立 eval，看目标模型是不是真的学到了。</p></div>
</div>

## Harness–Evolve 之后，再 SFT

Harness–Evolve 可以这样理解：先让模型在一个有工具、有反馈的环境里多试几次。它可以走不同路径，可以失败，也可以根据结果回来改。然后从这些尝试里，挑出正确、有代表性、彼此又不太一样的完整过程。

最后 SFT 的不是一句漂亮答案，而是这些更好的 trajectory。目的也不是让模型背住某一道题，而是让它下一次遇到类似问题时，更容易走上靠谱的路径：该验证的时候验证，看到失败会修改，需要工具时知道怎么用。

这条思路与 STaR 有一条清楚的继承关系：STaR 生成 rationale、保留能得到正确答案的路径，再把它们训练回模型（[Zelikman et al., 2022](https://arxiv.org/abs/2203.14465)）。Harness–Evolve 想把候选空间从“文本推理过程”扩到带状态的 agent trajectory：工具返回、文件变化、执行错误、回退和重新规划都成为数据的一部分。与此同时，它也不同于 DGM 或 Self-Harness：后两者主要优化 agent/harness 本身；这里的直接产物是训练数据，最终更新发生在目标模型的 SFT 阶段（[Zhang et al., 2025](https://arxiv.org/abs/2505.22954); [Zhang et al., 2026](https://arxiv.org/abs/2606.09498)）。

<figure class="rsi-diagram rsi-diagram--trajectory">
  <div><strong>Harness</strong><p>工具、上下文、反馈、记忆、验证</p></div>
  <div><strong>Evolve</strong><p>多次尝试、变体、回退、修改、选择</p></div>
  <div><strong>Trajectory data</strong><p>留下完整、可靠而且有差异的过程</p></div>
  <div><strong>SFT</strong><p>把这些过程训练回目标模型</p></div>
  <figcaption>图 3. 四个方框是同一条数据产线的四个阶段。Evolve 改善的是候选轨迹，不是直接更新模型；真正把这些过程写回目标模型的是最后的 SFT。</figcaption>
</figure>

## 为什么需要很多种 Harness

一个 Harness 会长出一种固定的轨迹。强调测试驱动的 coding Harness，会留下“运行—报错—修改”的路径；强调批评与重写的 Harness，会留下更多自我检查；强调搜索的 Harness，则会留下分支比较。它们都可能有用，也都可能用久了变成套路。

我更倾向于让几种 Harness 同时生产，再用 Ladder 看目标模型到底吸收哪一种，哪几种混在一起更好。这样做比先认定一种“最好轨迹”更麻烦，但也更不容易把模型训练成单一 pattern。

## 数据合成还是需要先验

<dl class="prior-list">
  <div><dt>目标先验</dt><dd>知道“数学更强”大致由哪些能力组成，但不把它锁死在一套题上。</dd></div>
  <div><dt>任务先验</dt><dd>知道什么任务值得出、难度怎么往上走、哪种失败最有信息。</dd></div>
  <div><dt>验证先验</dt><dd>能执行就执行，能检查就检查，尽量别让生产数据的模型给自己打分。</dd></div>
  <div><dt>探索先验</dt><dd>允许模型试错和回退，也要拦住没有意义的长轨迹与固定套路。</dd></div>
  <div><dt>多样性先验</dt><dd>控制题型、工具、解法和生产模型的来源，不让一种 pattern 填满数据集。</dd></div>
</dl>

这些先验不是替模型把解法写死，而是告诉它哪里值得探索、什么反馈可信、哪些结果不应被当真。模型最后要学到的，也不应只是某一条数据配方。面对一个新 topic 或新的模糊目标，它应该能参考这些经验，自行设计任务和环境，再找出下一批有用的数据。

这里还有一个很现实的风险：生产模型会复制自己。如果行动、判断、筛选都交给同一个模型，Evolve 很容易只是把它原来的 pattern 变得更浓。执行工具、独立 verifier、不同来源的生产模型、真实数据锚点和少量人工抽查，都是为了让这条产线别变成一个回音室。

另一个风险是 **selection-induced shortcut**。如果 verifier 只认最终答案，最容易通过筛选的可能是碰巧答对的短路径，而不是可迁移的好过程；如果只偏好长轨迹，又会奖励无效的展开。因此筛选最好同时约束 outcome、过程完整性、轨迹新颖度和成本，并保留被拒绝轨迹及原因。它们不仅用于清洗，也会成为下一轮改 Harness 和出题的重要信号。

<span class="anchor" id="related-work"></span>

# 它与现有工作的关系

可以把相邻工作按“被优化的对象”分开：

- **Reasoning self-training** 优化模型内化的推理路径。STaR 是最直接的例子。
- **Synthetic-data scaling** 研究某条生成方法随数据量和模型规模的收益与饱和，SynthLLM 属于这一类。
- **Harness optimization** 修改 prompt、工具、上下文或工作流，让冻结模型在部署时做得更好。Self-Harness 把失败挖掘、修改与回归测试连成闭环。
- **Open-ended agent evolution** 保留多个候选 agent，在可执行反馈下继续分支和选择。DGM 与 AlphaEvolve 展示了 archive 和 evaluator 如何支撑这种搜索（[Novikov et al., 2025](https://arxiv.org/abs/2506.13131)）。
- **本文的 Harness–Evolve** 位于这些方向的交叉处：借 harness 扩大轨迹搜索空间，借 verifier 和多样性规则选择轨迹，再把结果蒸馏回目标模型。它目前是一个研究假设，而不是已有实验结论。

真正需要验证的不是“这个 loop 看起来是否合理”，而是三个因果问题：多 Harness 是否比单 Harness 产生更可迁移的数据；Ladder 能否提前预测大规模生产的收益；经过 SFT 的模型是否学到了可复用的过程，而非生成器和 verifier 的表面偏好。

<span class="anchor" id="loop"></span>

# 这条 loop 怎么转起来

把前面三件事接起来以后，它其实是一条很普通的工作流：eval 找问题，Harness–Evolve 做轨迹，SFT 把轨迹训练回去，Ladder 判断这条数据方法还值不值得继续。

不普通的地方在于，下一轮的数据开始由上一轮模型的失败决定。模型变强以后，旧题会失效，旧 Harness 也会饱和，于是系统必须继续换题、换环境、换数据。它不是一次性把数据做完，而是让数据本身进入迭代。

<div class="loop-grid">
  <div><span>01</span><strong>先说想补什么</strong><p>不必一开始就有精确分数，但要说清大致方向。</p></div>
  <div><span>02</span><strong>出一批新题</strong><p>不断换题，找到当前模型真正会卡住的地方。</p></div>
  <div><span>03</span><strong>设计 Harness</strong><p>把人的领域经验写进工具、反馈、验证和探索规则。</p></div>
  <div><span>04</span><strong>跑出轨迹</strong><p>让模型尝试、失败、修改，留下几种不同的完整过程。</p></div>
  <div><span>05</span><strong>筛选，再 SFT</strong><p>只把可靠且有差异的轨迹训练回目标模型。</p></div>
  <div><span>06</span><strong>用 Ladder 验证</strong><p>从小到大看吸收、迁移和饱和，再决定要不要继续。</p></div>
</div>

对我来说，关键并不在于它算不算严格意义上的 RSI。只要每一轮里，模型开始参与发现失败、生产下一批训练经验，而这些经验确实让下一版更强，这条 loop 就已经值得做。

它当然还不是模型完全自己改进自己。目标、Harness、验证和停止条件，现在都还需要大量人的判断。也正因为它不完整，这个方向反而更可信：不需要先解决所有问题，就能把其中一段做成可以测、可以扩、也可以推翻的实验。

# 仍未解决的问题

- 怎么知道一个模糊目标已经覆盖得够好，而不是偷偷换成了另一套 Benchmark？
- 不同 Harness 的轨迹怎么去重、怎么配比，才不会互相抵消？
- 什么时候该继续扩量，什么时候其实应该先换生产模型或 Harness？
- 模型能不能逐渐参与 Harness 的设计，同时不让 eval 和数据一起塌掉？
- SFT 学到的到底是更好的解题过程，还是生产模型更隐蔽的表达习惯？

这些问题我现在也没有答案。接下来真正有价值的工作，可能不是再画一个更完整的框架，而是挑一个窄领域，把整条 loop 跑几轮，看看它到底会在哪里坏掉。

# References

1. Villalobos et al. (2024), [*Will we run out of data? Limits of LLM scaling based on human-generated data*](https://arxiv.org/abs/2211.04325).
2. Singh et al. (2024), [*Evaluation data contamination in LLMs: how do we measure it and (when) does it matter?*](https://arxiv.org/abs/2411.03923).
3. Zelikman et al. (2022), [*STaR: Bootstrapping Reasoning With Reasoning*](https://arxiv.org/abs/2203.14465).
4. Qin et al. (2025), [*Scaling Laws of Synthetic Data for Language Models*](https://arxiv.org/abs/2503.19551).
5. Zhang et al. (2025), [*Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents*](https://arxiv.org/abs/2505.22954).
6. Novikov et al. (2025), [*AlphaEvolve: A coding agent for scientific and algorithmic discovery*](https://arxiv.org/abs/2506.13131).
7. Zhang et al. (2026), [*Self-Harness: Harnesses That Improve Themselves*](https://arxiv.org/abs/2606.09498).
8. Weng (2026), [*Harness Engineering for Self-Improvement*](https://lilianweng.github.io/posts/2026-07-04-harness/).

<footer class="post-footer">
  <p>Thanks for reading. 如果你也在做 synthetic data、eval 或 agent harness，欢迎来聊。</p>
  <a href="mailto:mozhu621@gmail.com">mozhu621@gmail.com</a>
  <a href="{{ site.baseurl }}/blog/">More writing →</a>
</footer>
