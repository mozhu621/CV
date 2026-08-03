---
layout: default
title: "Data-Driven RSI: Evaluation, Synthetic-Data Ladders, and Trajectory Production"
description: "A working framework for data-driven self-improvement: use open-ended evaluation to find failures, synthetic-data ladders to decide what deserves scale, and Harness–Evolve to produce trainable trajectories."
permalink: /blog/data-driven-rsi/en/
category: "Research note"
author_profile: false
page_class: blog-post
lang: en
listed: false
translation_url: /blog/data-driven-rsi/
---

<header class="post-header">
  <div class="post-utility">
    <a class="post-back" href="{{ site.baseurl }}/blog/">← Writing</a>
    <nav class="post-language" aria-label="Language and download"><a href="{{ '/blog/data-driven-rsi/' | relative_url }}">中文</a><span>English</span><a href="{{ '/output/pdf/data-driven-rsi-en.pdf' | relative_url }}">PDF</a></nav>
  </div>
  <p class="post-kicker">Research note · 31 Jul 2026 · Updated 3 Aug 2026</p>
  <h1>Data-Driven RSI:<br>Evaluation, Ladders, and Trajectories</h1>
  <p class="post-dek">RSI describes a recursive process of improvement: the current model helps create a stronger successor, and the successor carries the process into the next round. This note starts with the part that seems easiest to test—data.</p>
  <div class="post-tags"><span>Eval</span><span>Synthetic data</span><span>Harness–Evolve</span></div>
</header>

<nav class="post-toc" aria-label="Table of contents">
  <strong>In this note</strong>
  <ol>
    <li><a href="#start-with-data">What RSI is meant to achieve</a></li>
    <li><a href="#synthetic-data">Why this leads to synthetic data</a></li>
    <li><a href="#eval">Evaluation has to keep moving</a></li>
    <li><a href="#ladder">How the three ladders differ</a></li>
    <li><a href="#trajectory">A production line for better trajectories</a></li>
    <li><a href="#related-work">Relationship to adjacent work</a></li>
    <li><a href="#loop">Putting the loop together</a></li>
    <li><a href="#open-questions">Open questions</a></li>
    <li><a href="#references">References</a></li>
  </ol>
</nav>

<span class="anchor" id="start-with-data"></span>

# What RSI is meant to achieve

RSI stands for Recursive Self-Improvement. A current model helps create a stronger successor. That successor inherits the ability to find problems, propose improvements, and train the next generation. Each round improves the model and the method used to produce it. Continued repetition gives the process its recursive character.

Foundation-model teams currently maintain this loop. Researchers at organizations such as OpenAI, Moonshot AI—the company behind Kimi—and Zhipu AI—the developer of GLM—locate capability boundaries, build evaluations, produce data, run training, and choose the next direction. Models complete individual tasks; people improve the process that produces the models.

RSI aims to move the second responsibility into the system as well. An LLM should be able to identify a worthwhile capability gap, propose a testable intervention, create experience for the next training round, and determine whether its successor is genuinely stronger. The successor must then be able to repeat the process.

Several abilities have to work together: find valuable problems, turn them into training interventions, confirm the effect with independent evidence, and use the result to choose the next round. Generating more samples alone will not sustain the loop. Gains on a fixed benchmark will also run out of direction. RSI depends on cumulative improvement of the whole process.

## Why start with data

Data offers a practical starting point. Important algorithmic changes are hard to predict, and promising ideas often disappear at scale. With data, the experiment is concrete: give a model unfamiliar tasks, locate stable failures, turn them into new tasks and trajectories, and train those back into the next model.

The key is to let the model's failures change what gets produced next. Additional tokens are only the medium. If this loop can keep running, the model is already participating in the decision about what it should learn next. That remains short of full RSI, but it may be the first part that can be tested seriously.

Following that line of thought leaves me with three questions:

- How can an open-ended goal such as “be better at mathematics” or “be better at coding” be evaluated well enough to decide what to train next?
- When a batch of synthetic data looks good, how can its absorption by the target model be measured, and how much should be produced?
- How can synthesis techniques accumulated across domains become a repeatable production line for useful trajectories?

Those are the three questions considered here.

## Working definitions

This note studies one segment of that longer loop: the current model helps identify capability gaps and produce experience for the next training round; the resulting successor then improves reproducibly on fresh tasks outside production. The model does not yet need to rewrite its parameters during a single inference run.

**Open-ended evaluation** allows a broad goal, such as mathematical research ability. Each iteration still needs auditable evidence: tasks, trajectories, failure causes, verifier outcomes, and a data prescription for the next round.

This note uses **Harness–Evolve** as a working name for the production process. The harness defines the environment in which the model operates. Evolve generates, revises, and selects candidate trajectories inside that environment. SFT then trains selected processes into the target model. Weight updates happen during SFT.

<span class="anchor" id="synthetic-data"></span>

# Why this leads to synthetic data

Push the data-driven view one step further and synthetic data becomes unavoidable.

Many SFT examples, preference pairs, critiques and rewrites, verifier-filtered rollouts, and tool-use trajectories are constructed through some combination of models, rules, tools, and people. Recent post-training gains often rely on this deliberately constructed experience.

Pretraining is beginning to acquire the same character. Natural data remains the foundation, but once cleaning, deduplication, and filtering improve, more of the marginal data will come from rewriting, transformation, difficulty control, reasoning completion, execution-based filtering, or turning existing material into a task that is actually worth learning. The boundary between pretraining and post-training data will become less clean over time.

Natural data remains the foundation. It gives a model knowledge, language, and contact with the world. It rarely grows around the failure modes of a particular checkpoint. When a model gets stuck on one step of one kind of problem, the web rarely supplies ten thousand exercises at exactly the right difficulty with reliable feedback attached.

The data wall describes a growing gap between demand and useful high-quality data. The next model needs material that is new to it, relevant to its weaknesses, and good enough to train on. Estimates of public text stocks and training demand suggest that high-quality human-generated text can become a constraint on continued scaling ([Villalobos et al., 2024](https://arxiv.org/abs/2211.04325)). The date of impact is hard to predict, and additional tokens already fail to produce capability reliably.

Will DePue calls the internet a “one-time subsidy” to deep learning ([DePue, 2026](https://willdepue.net/writings/a-stargate-for-data/)). For decades, people wrote webpages, code, papers, and discussions with no model-training plan; together they happened to form a huge, inexpensive, cross-domain dataset. The next increment is unlikely to arrive through the same accident. Much of the valuable material outside the public web lives in internal workflows, tacit expert judgment, unrecorded failures, and processes visible only inside real environments.

This separates the data problem into at least two axes. **Volume** asks how many more high-quality examples are needed in domains already represented. **Coverage** asks which tasks, tools, edge cases, and long-horizon processes have never been recorded at all. Synthetic data can expand volume. Coverage still requires anchors from people and real environments, after which models can elaborate, recombine, and explore around them.

> The scarce resource is experience that is useful for the model's next step.

Continued scaling will require models to help create the next round of experience: turn failures into tasks, turn tool and verifier feedback into process, and turn the useful parts of that process back into training data. Synthetic data therefore becomes an important precondition for RSI.

Synthetic data can also copy the past more quickly. A model can generate millions of answers from abilities it already has. If the same model produces, judges, and filters those answers, its preferences can become more concentrated with every round. Evaluation, a data ladder, and a serious trajectory pipeline therefore have to be designed together.

<span class="anchor" id="eval"></span>

# 1. Evaluation has to keep moving

The resolution of a fixed benchmark rarely lasts indefinitely. As frontier models approach its ceiling, adapt repeatedly to its task format, or encounter its examples during training, its ability to distinguish the strongest systems can decline. Different benchmarks, however, saturate at different rates and for different reasons. In a study of 60 widely used text benchmarks, nearly half showed high or very high saturation ([Akhtar et al., 2026](https://arxiv.org/abs/2602.16763)). Contamination makes the score harder to interpret still, with effects that vary by model and benchmark ([Singh et al., 2024](https://arxiv.org/abs/2411.03923)).

Building a harder benchmark is the usual response, and the process is becoming expensive. Humanity's Last Exam selected 2,500 questions from more than 70,000 submissions, involving nearly a thousand experts and several stages of review ([Center for AI Safety & Scale AI, 2025](https://labs.scale.com/leaderboard/humanitys_last_exam)). This leads to a prediction worth testing: if model iteration keeps accelerating, the human cycle for defining tasks, writing questions, maintaining answers, and refreshing validation sets will eventually fall behind the model's own improvement cycle.

Evaluation has to enter the self-improvement loop. The goal can stay open-ended—better mathematical research, stronger coding, longer-horizon work—while the model uses the previous failure map to search for its next boundary, propose tasks, construct counterexamples, control difficulty, and continuously grow new benchmarks and validation sets. AutoBencher already formulates benchmark creation as an LM-driven search for datasets that are salient, novel, and difficult ([Li et al., 2025](https://proceedings.iclr.cc/paper_files/paper/2025/hash/eb216114f3eaad22506fd1bc7bbff0ca-Abstract-Conference.html)).

A model can help propose benchmark items, tests, and verifiers. Independent validation still carries the burden of proof. An active benchmark used for diagnosis and training can keep changing. Private validation used to confirm progress should remain isolated from the training pipeline and hidden from the evaluated checkpoint. Independent generators, environment evidence, or human review check task validity, answer correctness, and leakage. Freezing the checkpoint helps when paired with these checks.

> A model can write its next test. Independent evidence confirms the improvement.

Self-evaluation maintains a moving capability boundary. Self-validation lets the model help construct a test, then uses hidden and tamper-resistant evidence to settle the result.

<figure class="eval-loop" aria-labelledby="eval-loop-title-en">
  <header><strong id="eval-loop-title-en">From an open-ended goal to the next training round</strong><p>A benchmark becomes a process for continually locating the boundary.</p></header>
  <div class="eval-loop__main">
    <div><span>01</span><strong>Name the direction</strong><p>Mathematics, coding, research, or longer-horizon work.</p></div>
    <div><span>02</span><strong>Search the boundary</strong><p>Propose fresh tasks, counterexamples, and harder variants.</p></div>
    <div><span>03</span><strong>Build a failure map</strong><p>Locate repeatable failures and preserve details beyond the score.</p></div>
    <div><span>04</span><strong>Produce data and train</strong><p>Turn failures into tasks, trajectories, and a successor model.</p></div>
    <div><span>05</span><strong>Validate the successor</strong><p>Compare it on hidden tasks and independent evidence, then feed the result into the next boundary search.</p></div>
  </div>
  <div class="eval-boundary">
    <span>VALIDATION BOUNDARY</span>
    <div><strong>Private validation</strong><p>Hidden from the evaluated checkpoint and strictly separated from training.</p></div>
    <div><strong>Independent evidence</strong><p>Execution, environment feedback, traceable sources, separate verifiers, and human audits.</p></div>
  </div>
  <figcaption>Figure 1. Steps 01–05 form one iteration. Validation feeds the next boundary search, while the validation boundary prevents the system from writing the test, training on it, and declaring victory.</figcaption>
</figure>

An evaluation round should produce a **failure record** that changes what happens next. Keep the score, then record the task slice, terminal error, earliest causal deviation in the trajectory, candidate mechanism, and proposed data intervention. Two runs can both end in a timeout while failing for entirely different reasons—bad planning, a broken tool call, or context-management failure.

Five layers of evidence matter:

1. **Outcome:** Was the task completed under an executable or explicit verifier?
2. **Process:** Where did the first causal deviation occur?
3. **Slice:** Does the mechanism repeat across a fresh task family? One bad case provides weak evidence.
4. **Prescription:** Does the failure imply a concrete task, feedback, or harness intervention?
5. **Transfer:** After training, does the gain appear on private validation that did not participate in data production?

<span class="anchor" id="ladder"></span>

# 2. Ladders: use small experiments to decide whether to climb

Imagine that a coding harness can produce one million trajectories in a week. The decision to run at full scale needs evidence. Synthetic data can look polished and be fully correct while doing almost nothing when trained into the target model.

A ladder is a **stage-gated experiment**. It breaks one expensive run into increasingly costly rungs, scales one object at a time, holds the other conditions as stable as possible, and climbs only when the signal over a control is repeatable. Scaling laws may emerge later from enough of these experiments.

In architecture scaling, each rung represents a larger compute budget. At every rung, the candidate should be compared with a matched baseline under a preregistered data distribution, objective, evaluation protocol, and rule for allocating parameters and tokens. The question is: **does the advantage over baseline survive scale and earn the next compute budget?**

A data ladder changes the object being scaled. Hold the target model, training configuration, and evaluation fixed; increase the amount or coverage of data from a fixed source; measure what each additional tranche contributes on held-out tasks. It asks: **how much new learning signal remains, and where does marginal return disappear?**

Synthetic data is harder because a production recipe creates the dataset on demand. The producer, harness, verifier, sampling policy, and filter jointly determine its distribution; the target model determines whether those trajectories can be absorbed. A comparable synthetic-data ladder must therefore hold the **production recipe and target model fixed**, varying only the volume of accepted, deduplicated trajectories. A change to the producer, harness, verifier, sampling policy, filter, or target model sends the ladder back to its cheaper rungs for recalibration.

Scaling production can itself change the output: acceptance may fall, duplication may rise, and easy cases may crowd out the long tail. The same trajectories can teach one target model a planning habit and another little more than wording. SynthLLM likewise reports saturation regions that vary with target-model scale ([Qin et al., 2025](https://arxiv.org/abs/2503.19551)). Useful volume is specific to the production recipe and target model.

All three ladders make small experiments precede large ones, but their experimental units and failure conditions differ:

<figure class="ladder-map" aria-labelledby="ladder-map-title-en">
  <header class="ladder-map__head"><strong id="ladder-map-title-en">A ladder uses increasingly costly controlled experiments to decide whether to climb</strong><p>Each rung scales one object. If a control condition changes, a new ladder begins.</p></header>
  <section class="ladder-lane">
    <div class="ladder-lane__meta"><span>01</span><h3>Architecture ladder</h3><p><b>Scale</b> training compute (allocate model size and tokens by the same rule)<br><b>Hold fixed</b> candidate/baseline comparison, data distribution, objective, evaluation</p></div>
    <ol class="ladder-track" aria-label="Test an architecture from small to larger model scales"><li><span>Small</span></li><li><span>Medium</span></li><li><span>Large</span></li><li><span>Next scale?</span></li></ol>
    <p class="ladder-readout"><b>Readout</b><br>Does the advantage over baseline survive across several scale points?</p>
  </section>
  <section class="ladder-lane">
    <div class="ladder-lane__meta"><span>02</span><h3>Data ladder</h3><p><b>Scale</b> amount or coverage from a fixed source<br><b>Hold fixed</b> target model, training, evaluation</p></div>
    <ol class="ladder-track" aria-label="Increase data from a fixed source over a control"><li><span>Control</span></li><li><span>Small</span></li><li><span>Larger</span></li><li><span>Next batch?</span></li></ol>
    <p class="ladder-readout"><b>Readout</b><br>Does added data still improve held-out tasks, and where does marginal return vanish?</p>
  </section>
  <section class="ladder-lane ladder-lane--synthetic">
    <div class="ladder-lane__meta"><span>03</span><h3>Synthetic-data ladder</h3><p><b>Scale</b> verified, deduplicated trajectories<br><b>Hold fixed</b> producer, harness, verifier, filter, target model</p></div>
    <ol class="ladder-track" aria-label="Move from a control to a pilot and decide whether to scale synthetic data"><li><span>Control</span></li><li><span>Pilot</span></li><li><span>One rung</span></li><li class="is-decision"><span>Scale again?</span></li></ol>
    <p class="ladder-readout"><b>Why different</b><br>Data is the pipeline's output and can drift with scale; changing the pipeline or target invalidates the curve.</p>
  </section>
  <figcaption>Figure 2. Each synthetic-data ladder belongs to one production recipe and one target model.</figcaption>
</figure>

A synthetic-data ladder is therefore a sequence of increasingly expensive bets: audit a small set of tasks and verifiers; run a pilot from the same base checkpoint; scale only after repeatable held-out signal; repeat when gain approaches the threshold implied by noise, cost, and regression risk; stop—or redesign the pipeline and begin a new ladder—when it falls below.

## A minimum viable experiment

For the ladder to be interpretable, only a small number of variables should move at once. A minimum design fixes the base checkpoint, optimizer, number of epochs—or another preregistered exposure rule—and held-out evaluation, while varying only the number of accepted, deduplicated trajectories; total training tokens then grow with data volume. A fixed training-token budget measures coverage or mixture under equal compute. Pure data scaling lets total training tokens grow with data volume. Report the two experiments separately. Repeat each rung at least twice, and estimate training noise alongside the trend.

Each point needs three groups of measurements: generation cost, acceptance rate, and deduplication rate on the production side; effective training tokens, stability, and behavioral change on the training side; target-slice gain, cross-slice transfer, and regressions on the evaluation side. A more expensive rung is justified only when adjacent rungs show a consistent direction across repeats.

The name **ladder experiment** is more accurate until the curve has been tested across enough scale points, target models, and production pipelines. Existing results have limited reach. The immediate value lies in pacing investment and revealing saturation; a stable scaling law needs more evidence.

<figure class="ladder-curve" aria-labelledby="ladder-curve-title-en">
  <header class="ladder-map__head"><strong id="ladder-curve-title-en">At every rung, ask again: how much new capability did the next batch buy?</strong><p>Each project sets its threshold from uncertainty across repeats, production cost, and regression risk.</p></header>
  <div class="ladder-curve__scroll" tabindex="0" aria-label="Scroll horizontally to inspect the complete figure">
    <svg viewBox="0 0 720 330" role="img" aria-labelledby="curve-title-en curve-desc-en">
      <title id="curve-title-en">A schematic scale decision for a synthetic-data ladder</title>
      <desc id="curve-desc-en">Marginal held-out gain from each rung approaches the decision threshold. Scale with clear signal, repeat near the threshold, and stop or redesign below it.</desc>
      <rect class="curve-zone curve-zone--scale" x="90" y="32" width="570" height="148" rx="3" />
      <rect class="curve-zone curve-zone--stop" x="90" y="180" width="570" height="76" rx="3" />
      <text class="curve-zone-label" x="105" y="54">Clear signal: scale one more rung</text>
      <text class="curve-zone-label" x="105" y="244">Insufficient signal: stop, or redesign and restart</text>
      <line class="curve-axis" x1="90" y1="256" x2="670" y2="256" />
      <line class="curve-axis" x1="90" y1="256" x2="90" y2="25" />
      <line class="curve-threshold" x1="90" y1="180" x2="660" y2="180" />
      <text class="curve-threshold-label" x="654" y="172" text-anchor="end">signal / cost threshold</text>
      <path class="curve-line" d="M150 67 C225 72 255 101 300 110 S390 145 440 163 S525 196 585 212" />
      <g class="curve-error"><line x1="150" y1="56" x2="150" y2="79"/><line x1="144" y1="56" x2="156" y2="56"/><line x1="144" y1="79" x2="156" y2="79"/></g>
      <g class="curve-error"><line x1="300" y1="96" x2="300" y2="124"/><line x1="294" y1="96" x2="306" y2="96"/><line x1="294" y1="124" x2="306" y2="124"/></g>
      <g class="curve-error"><line x1="440" y1="142" x2="440" y2="190"/><line x1="434" y1="142" x2="446" y2="142"/><line x1="434" y1="190" x2="446" y2="190"/></g>
      <g class="curve-error"><line x1="585" y1="197" x2="585" y2="226"/><line x1="579" y1="197" x2="591" y2="197"/><line x1="579" y1="226" x2="591" y2="226"/></g>
      <circle class="curve-point" cx="150" cy="67" r="5"/><circle class="curve-point" cx="300" cy="110" r="5"/><circle class="curve-point curve-point--warn" cx="440" cy="163" r="5"/><circle class="curve-point curve-point--stop" cx="585" cy="212" r="5"/>
      <text class="curve-callout" x="150" y="43" text-anchor="middle">clear signal</text><text class="curve-callout" x="300" y="86" text-anchor="middle">gain persists</text><text class="curve-callout" x="440" y="132" text-anchor="middle">repeat first</text><text class="curve-callout" x="585" y="235" text-anchor="middle">stop or redesign</text>
      <text class="curve-tick" x="150" y="278" text-anchor="middle">Pilot</text><text class="curve-tick" x="300" y="278" text-anchor="middle">Scale 1</text><text class="curve-tick" x="440" y="278" text-anchor="middle">Scale 2</text><text class="curve-tick" x="585" y="278" text-anchor="middle">Scale 3</text>
      <text class="curve-axis-label" x="380" y="310" text-anchor="middle">Cumulative verified, deduplicated trajectories</text>
      <text class="curve-axis-label" x="24" y="142" text-anchor="middle" transform="rotate(-90 24 142)">Marginal held-out gain from next rung</text>
    </svg>
  </div>
  <figcaption>Figure 3. A schematic decision rule. Train every point from the same base checkpoint and repeat it on held-out tasks outside data production; a new production recipe or target model starts a new curve.</figcaption>
</figure>

## What to measure first

Start with three measurements: the share that passes verification, what remains after deduplication, and whether each additional batch of genuinely different trajectories improves an independent evaluation. The first two numbers determine what the production line really costs. The last one tells whether it should keep running. Total generation volume provides context.

Once a small training run shows a signal, accepted and non-duplicate trajectories can be scaled in stages. At each stage, the starting checkpoint, training setup, and evaluation set should remain as stable as possible, with the previous rung retained as a control. If volume grows several times while unfamiliar tasks no longer improve, or if acceptance collapses, the pipeline is approaching saturation.

The right amount of synthetic data lies before saturation. Without a ladder, it is easy to finish producing an expensive dataset and only then begin explaining why it failed.

## The ladder belongs to its pipeline and target model

The same synthetic dataset can behave very differently on two models. Every example carries habits from its generator and harness: how problems are decomposed, which tools are preferred, when the model backtracks, and which errors it tends to make. There is no guarantee that another model can absorb those habits.

Whenever the target model changes—or the producer, harness, verifier, sampling policy, or filter is modified—the ladder should return to its cheaper rungs. The previous curve offers useful evidence with limited transfer. This is one reason a scaling law for synthetic data is harder to establish than one for natural data.

<span class="anchor" id="trajectory"></span>

# 3. Trajectories need a production line

Data has always been designed by people. People decide where to look, what is worth keeping, how to label it, and which tasks should come before others. Even when the raw material comes from the internet, it enters a model through a human-built pipeline.

As public webpages stop being the main source of marginal data, production will increasingly shift from collecting documents to recording work. A complete expert workflow can include private tools, repeated communication, local judgment, failure recovery, and final acceptance. Saving only the input and final answer discards much of the trainable process. Data infrastructure must capture environments, actions, feedback, and outcomes together, alongside storage and labeling.

Many synthetic-data pipelines today are essentially prompt + model + filter. They can produce large collections of questions and answers, while leaving the process thin. The useful training signal often lies in how the model searched, tried something, observed an error, revised a plan, and noticed that it had gone wrong.

## From a prompt to a production line

In coding, people know that tests matter. In mathematics, they use proof checks, counterexamples, and controlled increases in difficulty. Agent tasks also need environment state and tool output. These pieces of experience currently live in prompts, scripts, and researchers’ heads. A harness turns them into an environment the model encounters every time it works.

Here, a harness covers prompts, tools, context management, workflow, persistent state, permissions, and verification logic: the system that controls how a model observes, acts, stores artifacts, and checks itself ([Weng, 2026](https://lilianweng.github.io/posts/2026-07-04-harness/)). In practice, it determines the kind of trajectory the pipeline is able to collect.

<div class="production-checks">
  <div><strong>Traceable</strong><p>The task, generator, harness, tools, and verifier all have explicit versions.</p></div>
  <div><strong>Process is visible</strong><p>Keep the necessary states, actions, tool feedback, failures, and revisions.</p></div>
  <div><strong>Verifiable</strong><p>Prefer execution or independent judgment, and retain a reason when a trajectory is rejected.</p></div>
  <div><strong>Diverse</strong><p>Control the mixture of harnesses and generators; remove duplicate paths and repeated phrasing.</p></div>
  <div><strong>Trainable and testable</strong><p>Send every batch back through the ladder and an independent evaluation.</p></div>
</div>

## Harness–Evolve first, then SFT

Put a model in an environment with tools and feedback, and let it make several attempts. It can follow different paths, fail, backtrack, and revise in response to what happens. From those attempts, keep the complete processes that are correct, representative, and meaningfully different from one another.

SFT receives the better trajectories. The training goal is concrete: make reliable behavior easier to reach the next time, verify when verification is needed, revise after failure, and use a tool when the task calls for one.

STaR provides a direct precedent: generate rationales, keep paths that recover the correct answer, and train them back into the model ([Zelikman et al., 2022](https://arxiv.org/abs/2203.14465)). Harness–Evolve expands the candidate object from a textual rationale to a stateful agent trajectory. Tool responses, file changes, execution errors, backtracking, and replanning become part of the data. DGM and Self-Harness optimize the agent or harness itself. Here the output is training data, and the target model changes in the final SFT stage ([Zhang et al., 2025](https://arxiv.org/abs/2505.22954); [Zhang et al., 2026](https://arxiv.org/abs/2606.09498)).

<figure class="rsi-diagram rsi-diagram--trajectory">
  <div><strong>Harness</strong><p>Tools, context, feedback, memory, verification</p></div>
  <div><strong>Evolve</strong><p>Multiple attempts, variation, backtracking, revision, selection</p></div>
  <div><strong>Trajectory data</strong><p>Keep complete, reliable, and meaningfully different processes</p></div>
  <div><strong>SFT</strong><p>Train those processes back into the target model</p></div>
  <figcaption>Figure 4. Four stages of one data pipeline. Evolve improves candidate trajectories; the final SFT stage writes the selected processes back into the target model.</figcaption>
</figure>

## Why use more than one harness

One harness tends to grow one style of trajectory. A test-driven coding harness produces many run–error–revision paths. A critique-and-rewrite harness produces more self-checking. A search-oriented harness produces branches and comparisons. Each can be useful, and each can harden into a template when overused.

A safer design runs several harnesses, then uses the ladder to measure how well the target model absorbs each trajectory source and mixture. The extra experiments reduce the risk of filling the training set with one repeated pattern.

## A harness has a horizon too

Long-running tasks place another constraint on the harness. Code written for today's agents often assumes that a task ends within one run or context, tool calls are synchronous, verifier feedback arrives quickly, and success can be represented by one terminal state. Those assumptions may work for a coding task measured in minutes. Experiments that run for days, data programs spanning multiple training rounds, and research with delayed feedback need a different design.

METR measures a task-completion horizon using the time a human expert needs for the same task. The metric proxies task difficulty and is calculated separately from the agent's literal wall-clock runtime. Their results isolate an important capability axis: whether a model can reliably compose local skills into a longer sequence of actions ([METR, 2026](https://metr.org/time-horizons/)). If task horizon grows faster than harness horizon, the binding constraint may shift to lost state, context growth, compounding errors, and failed recovery.

An RSI-oriented harness needs several capabilities that still lack universal support:

- **Persistent state:** experiments, code, data versions, and unfinished work need storage beyond context; interrupted runs need recoverable checkpoints.
- **Hierarchical goals:** long tasks need verifiable stages that preserve dependencies across stages and resist the pull of the nearest local score.
- **Asynchronous execution:** training, evaluation, and data generation may run for hours or days; the harness must launch, monitor, cancel, and resume background work.
- **Delayed feedback:** when final reward arrives late, intermediate evidence must be retained and failure attributed to the step that caused it.
- **Evolvability with boundaries:** the model may revise workflows, context policy, and tool composition, while verifiers, permissions, and audit logs remain outside the editable loop.

Recent work on long-horizon agents similarly centers compact state, checkpointing, verifier-backed state transitions, and targeted recovery, reducing the repeated use of raw interaction history in the prompt ([Wu et al., 2026](https://arxiv.org/abs/2607.11388)). This suggests a longer-term extension: Harness–Evolve should evolve trajectories inside the harness and upgrade **the harness carrying those trajectories** as tasks lengthen. Otherwise the production line will reliably generate data only within its current horizon.

## Synthesis still needs priors

<dl class="prior-list">
  <div><dt>Goal priors</dt><dd>Know roughly what “better at mathematics” contains while keeping the target broader than one frozen test.</dd></div>
  <div><dt>Task priors</dt><dd>Know which tasks are worth producing, how difficulty should increase, and which failures are informative.</dd></div>
  <div><dt>Verification priors</dt><dd>Execute what can be executed and check what can be checked; avoid asking the generator to grade itself.</dd></div>
  <div><dt>Exploration priors</dt><dd>Allow trial, error, and backtracking while cutting off long trajectories that are going nowhere.</dd></div>
  <div><dt>Diversity priors</dt><dd>Control task types, tools, solution paths, and generator sources; keep any one pattern from filling the dataset.</dd></div>
</dl>

These priors point to useful regions of exploration, trustworthy feedback, and outcomes that need scrutiny. The model also needs to transfer these lessons. Given a new topic or open-ended goal, it should be able to borrow from prior experience, design tasks and environments, and search for the next useful data.

There is also a practical risk: generators copy themselves. If one model acts, judges, and filters, Evolve can concentrate its existing patterns and slow capability growth. Execution tools, independent verifiers, generators from different model families, anchors in real data, and small human audits help keep the production line from becoming an echo chamber.

A second risk is **selection-induced shortcutting**. A verifier that checks only the final answer may select lucky short paths. A preference for long traces can reward empty elaboration. Selection should therefore consider outcome, process completeness, trajectory novelty, and cost together, while retaining rejected traces and rejection reasons. Those records support cleaning and the next round of task and harness design.

<span class="anchor" id="related-work"></span>

# Relationship to adjacent work

The nearest lines of work become easier to separate by their optimization target:

- **Reasoning self-training** optimizes reasoning paths to be internalized by the model. STaR is the clearest example.
- **Synthetic-data scaling** measures the gain and saturation of a generation method as data and model scale change. SynthLLM belongs here.
- **Dynamic evaluation** continually searches for and refreshes benchmark items. AutoBencher is one example.
- **Harness optimization** changes prompts, tools, context, or workflow so that a frozen model performs better at deployment. Self-Harness closes a loop among failure mining, editing, and regression testing.
- **Open-ended agent evolution** retains a population of candidate agents and continues branching under executable feedback. DGM and AlphaEvolve show how archives and evaluators support this search ([Novikov et al., 2025](https://arxiv.org/abs/2506.13131)).
- **Harness–Evolve in this note** sits at their intersection: use a harness to expand trajectory search, use verifiers and diversity rules to select trajectories, and distill the result into a target model. It remains a research hypothesis awaiting empirical tests.

Three causal tests matter next: whether multiple harnesses produce more transferable data than one; whether a ladder predicts the return of large-scale production; and how much reusable process SFT learns relative to the surface preferences of the generator and verifier.

<span class="anchor" id="loop"></span>

# Putting the loop together

Once the three pieces are connected, the workflow is ordinary: evaluation locates a problem, Harness–Evolve produces trajectories, SFT trains them back into the model, and the ladder decides whether that data method is still worth scaling.

The failures of one model determine the data for the next. As the model improves, old tasks stop being useful and old harnesses saturate. The system keeps changing its tasks, environments, and data. Data itself enters the iteration loop.

<div class="loop-grid">
  <div><span>01</span><strong>Name the direction</strong><p>The goal can begin broad and still be clear enough to explore.</p></div>
  <div><span>02</span><strong>Build fresh tasks</strong><p>Keep changing the test until it reaches failures that matter for the current model.</p></div>
  <div><span>03</span><strong>Design the harness</strong><p>Put human domain knowledge into tools, feedback, verification, and exploration rules.</p></div>
  <div><span>04</span><strong>Produce trajectories</strong><p>Let models try, fail, and revise; retain several kinds of complete process.</p></div>
  <div><span>05</span><strong>Filter, then SFT</strong><p>Train only trajectories that are reliable and meaningfully different.</p></div>
  <div><span>06</span><strong>Run the ladder</strong><p>Measure absorption, transfer, and saturation before deciding to produce more.</p></div>
</div>

The loop earns further study when a model can help identify its failures, produce the next training experience, and become reliably stronger because of that experience.

The goal, harness, verifier, and stopping rule still depend heavily on human judgment. We can make one segment measurable, scalable, and falsifiable now, then leave full autonomy for later.

# Open questions

- How can an open-ended goal be covered well enough? How do we keep it from quietly turning into another fixed benchmark?
- How can model-generated benchmarks and validation sets remain novel without mistaking the generator's preferences for the capability boundary?
- How should trajectories from different harnesses be deduplicated and mixed without cancelling one another out?
- When should the data keep scaling, and when should the generator or harness be replaced instead?
- Can the model gradually participate in harness design without causing evaluation and production to collapse into the same loop?
- Does SFT learn a better process, or merely a subtler version of the generator’s style?

These questions remain open. The next step is to choose one narrow domain, run the entire loop several times, and record where it breaks.

# References

1. Villalobos et al. (2024), [*Will we run out of data? Limits of LLM scaling based on human-generated data*](https://arxiv.org/abs/2211.04325).
2. Singh et al. (2024), [*Evaluation data contamination in LLMs: how do we measure it and (when) does it matter?*](https://arxiv.org/abs/2411.03923).
3. Zelikman et al. (2022), [*STaR: Bootstrapping Reasoning With Reasoning*](https://arxiv.org/abs/2203.14465).
4. Qin et al. (2025), [*Scaling Laws of Synthetic Data for Language Models*](https://arxiv.org/abs/2503.19551).
5. Zhang et al. (2025), [*Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents*](https://arxiv.org/abs/2505.22954).
6. Novikov et al. (2025), [*AlphaEvolve: A coding agent for scientific and algorithmic discovery*](https://arxiv.org/abs/2506.13131).
7. Zhang et al. (2026), [*Self-Harness: Harnesses That Improve Themselves*](https://arxiv.org/abs/2606.09498).
8. Weng (2026), [*Harness Engineering for Self-Improvement*](https://lilianweng.github.io/posts/2026-07-04-harness/).
9. DePue (2026), [*A Stargate for Data*](https://willdepue.net/writings/a-stargate-for-data/).
10. METR (2026), [*Task-Completion Time Horizons of Frontier AI Models*](https://metr.org/time-horizons/).
11. Wu et al. (2026), [*StructAgent: Harness Long-horizon Digital Agents with Unified Causal Structure*](https://arxiv.org/abs/2607.11388).
12. Akhtar et al. (2026), [*When AI Benchmarks Plateau*](https://arxiv.org/abs/2602.16763).
13. Center for AI Safety & Scale AI (2025), [*Humanity's Last Exam*](https://labs.scale.com/leaderboard/humanitys_last_exam).
14. Li et al. (2025), [*AutoBencher: Creating Salient, Novel, Difficult Datasets for Language Models*](https://proceedings.iclr.cc/paper_files/paper/2025/hash/eb216114f3eaad22506fd1bc7bbff0ca-Abstract-Conference.html).

<footer class="post-footer">
  <p>Thanks for reading. If you are also working on synthetic data, evaluation, or agent harnesses, feel free to get in touch.</p>
  <a href="mailto:mozhu621@gmail.com">mozhu621@gmail.com</a>
  <a href="{{ site.baseurl }}/blog/">More writing →</a>
</footer>
