---
layout: default
title: "Data May Be the First Tractable Part of RSI"
description: "Why data-driven self-improvement runs through open-ended evaluation, synthetic-data ladders, and Harness–Evolve trajectory production."
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
    <nav class="post-language" aria-label="Language"><a href="{{ '/blog/data-driven-rsi/' | relative_url }}">中文</a><span>English</span></nav>
  </div>
  <p class="post-kicker">Research note · 31 Jul 2026</p>
  <h1>Data May Be the First<br>Tractable Part of RSI</h1>
  <p class="post-dek">If recursive self-improvement ever begins, what will its earliest form look like? Data offers a practical starting point: a model finds the edges of what it cannot do, turns those failures into training experience, learns from them, and goes looking again.</p>
  <div class="post-tags"><span>Eval</span><span>Synthetic data</span><span>Harness–Evolve</span></div>
</header>

<nav class="post-toc" aria-label="Table of contents">
  <strong>In this note</strong>
  <ol>
    <li><a href="#start-with-data">Start with data</a></li>
    <li><a href="#synthetic-data">Why this leads to synthetic data</a></li>
    <li><a href="#eval">Evaluation that tells us what to do next</a></li>
    <li><a href="#ladder">From architecture ladders to synthetic-data ladders</a></li>
    <li><a href="#trajectory">A production line for better trajectories</a></li>
  </ol>
</nav>

<span class="anchor" id="start-with-data"></span>

# Start with data

If RSI does begin to happen, its earliest form may not look very dramatic. A model may not begin by rewriting its own architecture. It may begin with something more ordinary: making the next batch of training data better than the last one.

Algorithms obviously matter, but they are difficult to reason about in advance. A new idea often has to be built before its mechanism becomes clear, and a change that looks promising at one scale may disappear at another. There is no reliable way to predict where the next important algorithmic change will come from.

Data is more concrete. Give a model a set of unfamiliar tasks and watch where it fails. Organize those failures, build new exercises and trajectories around them, and train them back into the model. Then take the new model to a fresh set of tasks and repeat.

The point is not simply to feed the model more tokens. The point is that its failures change what gets produced next. Once that loop works reliably, the model is already participating in the decision about what it should learn in the next round. This is still far from full recursive self-improvement, but it is a practical place to begin.

Following that line of thought leaves me with three questions:

- How can an open-ended goal such as “be better at mathematics” or “be better at coding” be evaluated well enough to decide what to train next?
- When a batch of synthetic data looks good, how can its absorption by the target model be measured, and how much should be produced?
- How can synthesis techniques accumulated across domains become a repeatable production line for useful trajectories?

Those are the three questions considered here.

<span class="anchor" id="synthetic-data"></span>

# Why this leads to synthetic data

Push the data-driven view one step further and synthetic data becomes unavoidable.

This is already obvious in post-training. SFT examples, preference pairs, critiques and rewrites, verifier-filtered rollouts, and tool-use trajectories are rarely just found on the open web. They are made by some combination of models, rules, tools, and people. A great deal of recent capability improvement has come from this kind of deliberately constructed experience.

Pretraining is beginning to acquire the same character. Natural data remains the foundation, but once cleaning, deduplication, and filtering improve, more of the marginal data will come from rewriting, transformation, difficulty control, reasoning completion, execution-based filtering, or turning existing material into a task that is actually worth learning. The boundary between pretraining and post-training data will become less clean over time.

This does not make natural data unimportant. Natural data gives a model its knowledge, language, and contact with the world. But the internet does not grow in response to the failure modes of a particular checkpoint. When a model gets stuck on one step of one kind of problem, the web does not immediately produce ten thousand exercises at exactly the right difficulty with reliable feedback attached.

The data wall does not mean that the internet has run out of new material. It means that data which is new to the model, useful for the next version, and good enough to train on is not growing as quickly as the appetite created by more models and more compute. New tokens no longer guarantee new capability.

> The scarce resource is not tokens. It is experience that is useful for the model’s next step.

If scaling is to continue, it cannot depend on people writing a larger internet. Models will have to help create the next round of experience: turn failures into tasks, turn tool and verifier feedback into process, and turn the useful parts of that process back into training data. Synthetic data therefore becomes an important precondition for RSI.

Of course, synthetic data can also copy the past more quickly. A model can generate millions of answers that contain nothing it did not already know. If the same model produces, judges, and filters those answers, its preferences can become more concentrated with every round. This is why evaluation, a data ladder, and a serious trajectory pipeline have to be designed together.

<span class="anchor" id="eval"></span>

# 1. Evaluation has to tell us what to do next

Suppose the goal is to make a model better at coding. The easiest move is to choose a benchmark and optimize the score. Over time, however, its task formats, answers, and grading preferences seep into the training process. The score may keep rising while it becomes harder to tell whether the model can write more kinds of code or has simply become better at this test.

Benchmarks are not useless. They are good snapshots and they are often the right way to compare a local change. The problem begins when a fixed benchmark becomes a permanent training target. Mathematics and coding are not single scores in the first place.

> Useful evaluation looks more like a demanding test lead than a leaderboard.

The long-term goal may be fuzzy; the evidence from each round cannot be. An evaluation should tell us what kind of unfamiliar task failed, whether the bottleneck was knowledge, planning, tool use, or checking, whether the failure can be reproduced, and whether the fix transfers to a different set of tasks.

Most importantly, the result should change the next round of work. It should tell us what tasks to add, what environment the model needs to practice in, which data pipeline is not worth running yet, and what fresh tasks should be held back for the next check. A single aggregate score rarely carries enough information to drive self-improvement.

<figure class="rsi-diagram rsi-diagram--flow">
  <div><span>01</span><strong>Name the direction</strong></div>
  <div><span>02</span><strong>Build unfamiliar tasks</strong></div>
  <div><span>03</span><strong>Locate the failure</strong></div>
  <div><span>04</span><strong>Choose the next data</strong></div>
  <div><span>05</span><strong>Return with new tasks</strong></div>
  <figcaption>Figure 1. The numbers show the order of one iteration, not five separate scores. Failures found in step 03 directly determine the data produced in step 04.</figcaption>
</figure>

Much of this will probably have to be done in-house. The evaluation needs to move with the model, its tools, and its training data. Once an old failure is fixed, the system should move outward and look for the next boundary instead of continuing to celebrate a solved score.

Evaluation and data production should also remain partly separate. If one model writes the tasks, solves them, filters the attempts, and assigns the grades, the loop can quickly become self-confirming. Fresh held-out tasks, execution-based checks or independent verifiers, and a small amount of human auditing make the pipeline slower, but they are worth the cost.

<span class="anchor" id="ladder"></span>

# 2. Ladders: look for the curve before paying for scale

Imagine that a coding harness can produce one million trajectories in a week. Should it run at full scale? The answer should not be a matter of taste. Synthetic data can look polished and be fully correct while doing almost nothing when trained into the target model.

The term “ladder” comes from the way model architectures are often tested. A new architecture is not usually taken straight to the largest possible run. Researchers train a sequence of models at increasing parameter, token, or compute budgets. They look at the loss and capability curves and ask whether the gap over a baseline grows, holds, crosses over, or disappears. An idea that wins on a small model may not survive scale. An architecture ladder asks: **is this model design worth scaling further?**

A data ladder changes the object being scaled. Hold the target model and training recipe roughly fixed, vary the amount, mixture, or coverage of a dataset, and measure what each additional tranche contributes on independent evaluations. The question is no longer whether an architecture survives scale. It is: **how much new learning signal does this data still contain, and where do returns begin to flatten?**

Synthetic data adds another complication because the dataset does not simply exist before the experiment. It is produced. Change the generator, harness, verifier, sampling policy, or filter and the distribution changes with it. As production grows, acceptance rates may fall, duplication may rise, and easy examples may crowd out the long tail. The same trajectories can also be absorbed very differently by different target models. One model may learn a planning habit; another may copy the wording; a third may barely move.

The three ladders have a similar shape, but they place their bets on different things:

<figure class="ladder-figure">
  <div class="ladder-comparison">
    <div>
      <strong>Architecture ladder</strong>
      <p class="ladder-axis">What scales: model and compute</p>
      <div class="ladder-scale" aria-label="Scale from a small model to a large model"><span>Small</span><i></i><span>Medium</span><i></i><span>Large</span></div>
      <p>Does the structural advantage grow, hold, or disappear?</p>
      <small>Is this model design worth making larger?</small>
    </div>
    <div>
      <strong>Data ladder</strong>
      <p class="ladder-axis">What scales: data from a fixed source</p>
      <div class="ladder-scale" aria-label="Scale from a small data batch to a large data batch"><span>Small</span><i></i><span>Medium</span><i></i><span>Large</span></div>
      <p>Hold training fixed and watch gain, transfer, and marginal return.</p>
      <small>Is this dataset still worth adding to?</small>
    </div>
    <div>
      <strong>Synthetic-data ladder</strong>
      <p class="ladder-axis">What scales: pipeline × data × target model</p>
      <div class="ladder-scale" aria-label="Validate data, run a small training experiment, then decide whether to scale"><span>Validate</span><i></i><span>Small run</span><i></i><span class="ladder-scale__stop">Scale?</span></div>
      <p>At every rung, check whether the target model actually absorbed the trajectories.</p>
      <small>Is this pipeline still worth running for this model?</small>
    </div>
  </div>
  <div class="diagram-legend" aria-label="Legend">
    <strong>Legend</strong>
    <span><i class="legend-key legend-key--node"></i>A rung tested with training and eval</span>
    <span><i class="legend-key legend-key--line"></i>Continue only after a positive signal</span>
    <span><i class="legend-key legend-key--stop"></i>Stop when the advantage or return fades</span>
  </div>
  <figcaption>Figure 2. The ladders look similar, but their horizontal axes are different. The first two mostly scale one variable; the synthetic-data ladder also changes the production system and depends on the target model.</figcaption>
</figure>

A synthetic-data ladder is therefore a sequence of increasingly expensive bets. Spend as little as possible to check that the task and verifier are sound. Run a small training experiment to see whether there is a repeatable signal. Scale the data only if the signal exists, then test transfer and saturation. If one rung has not answered its question, there is no reason to climb to the next.

<div class="ladder-stack">
  <div><span>01</span><section><strong>Is the data valid?</strong><p>Are the tasks solvable? Are the answers and verifier reliable? Does the data touch the capability we care about?</p><small>If not, do not train yet.</small></section></div>
  <div><span>02</span><section><strong>Can a model learn from it?</strong><p>Use a small batch for a cheap training run. Does the target behavior move in a stable way?</p><small>If the change is not repeatable, do not scale production.</small></section></div>
  <div><span>03</span><section><strong>Does more still help?</strong><p>When the volume grows by several times, does the gain continue? Do new trajectories add new information?</p><small>Look for the curve, not one attractive score.</small></section></div>
  <div><span>04</span><section><strong>Does it transfer?</strong><p>Does the model improve on tasks that were not part of production? Did an older capability regress?</p><small>Memorizing one task family is not enough.</small></section></div>
  <div><span>05</span><section><strong>Where should production stop?</strong><p>Has the cost of generation, verification, and training overtaken the capability gained from the next batch?</p><small>The saturation region tells us how much to make.</small></section></div>
</div>

## What to measure first

The total number of generated examples is not very informative by itself. More useful measures are the share that passes verification, what remains after deduplication, and whether each additional batch of genuinely different trajectories improves an independent evaluation. The first two numbers determine what the production line really costs. The last one tells whether it should keep running.

Once a small training run shows a signal, accepted and non-duplicate trajectories can be scaled in stages. At each stage, the starting checkpoint, training setup, and evaluation set should remain as stable as possible, with the previous rung retained as a control. If volume grows several times while unfamiliar tasks no longer improve, or if acceptance collapses, the pipeline is approaching saturation.

The right amount of synthetic data is not the largest amount the budget can buy. It is the useful region before saturation. Without a ladder, it is easy to finish producing an expensive dataset and only then begin explaining why it did not work.

## The ladder belongs to the target model

The same synthetic dataset can behave very differently on two models. Every example carries habits from its generator and harness: how problems are decomposed, which tools are preferred, when the model backtracks, and which errors it tends to make. There is no guarantee that another model can absorb those habits.

Whenever the target model, generator, or harness changes, the ladder should return to its cheap rungs. The previous curve is useful evidence, not a guarantee. This is one reason a scaling law for synthetic data is harder to establish than one for natural data.

<span class="anchor" id="trajectory"></span>

# 3. Trajectories need a production line

Data has always been designed by people. People decide where to look, what is worth keeping, how to label it, and which tasks should come before others. Even when the raw material comes from the internet, it enters a model through a human-built pipeline.

Many synthetic-data pipelines today are essentially prompt + model + filter. That is enough to produce large collections of questions and answers, but it remains too thin. The valuable part is often not the final answer. It is how the model searched, tried something, observed an error, revised a plan, and noticed that it had gone wrong.

## A prompt is not a production line

In coding, people know that tests matter. In mathematics, they use proof checks, counterexamples, and controlled increases in difficulty. In agent tasks, environment state and tool output cannot simply be discarded. These pieces of experience currently live in prompts, scripts, and researchers’ heads. A harness turns them into an environment the model encounters every time it works.

Here, a harness is more than an engineering wrapper. It decides what the model can see, which tools it can call, whether it can retry after failure, where feedback comes from, and what counts as completion. In practice, it determines the kind of trajectory the pipeline is able to collect.

<div class="production-checks">
  <div><strong>Traceable</strong><p>The task, generator, harness, tools, and verifier all have explicit versions.</p></div>
  <div><strong>Process is visible</strong><p>Keep the necessary states, actions, tool feedback, failures, and revisions.</p></div>
  <div><strong>Verifiable</strong><p>Prefer execution or independent judgment, and retain a reason when a trajectory is rejected.</p></div>
  <div><strong>Diverse</strong><p>Control the mixture of harnesses and generators; remove duplicate paths and repeated phrasing.</p></div>
  <div><strong>Trainable and testable</strong><p>Send every batch back through the ladder and an independent evaluation.</p></div>
</div>

## Harness–Evolve first, then SFT

Harness–Evolve can be read straightforwardly. Put a model in an environment with tools and feedback, and let it make several attempts. It can follow different paths, fail, backtrack, and revise in response to what happens. From those attempts, keep the complete processes that are correct, representative, and meaningfully different from one another.

What goes into SFT is no longer a polished final answer. It is a better trajectory. The aim is not to memorize one solution, but to make reliable behavior easier to reach the next time: verify when verification is needed, revise after failure, and use a tool when the task calls for one.

<figure class="rsi-diagram rsi-diagram--trajectory">
  <div><strong>Harness</strong><p>Tools, context, feedback, memory, verification</p></div>
  <div><strong>Evolve</strong><p>Multiple attempts, variation, backtracking, revision, selection</p></div>
  <div><strong>Trajectory data</strong><p>Keep complete, reliable, and meaningfully different processes</p></div>
  <div><strong>SFT</strong><p>Train those processes back into the target model</p></div>
  <figcaption>Figure 3. These are four stages of one data pipeline. Evolve improves the candidate trajectories; it does not update the model directly. The final SFT stage writes the selected processes back into the target model.</figcaption>
</figure>

## Why use more than one harness

One harness tends to grow one style of trajectory. A test-driven coding harness produces many run–error–revision paths. A critique-and-rewrite harness produces more self-checking. A search-oriented harness produces branches and comparisons. Each can be useful, and each can harden into a template when overused.

A better approach is to run several harnesses and use the ladder to see which ones the target model actually absorbs, and which mixtures work better together. This is more cumbersome than declaring one ideal trajectory format, but it is less likely to train the model into a single repeated pattern.

## Synthesis still needs priors

<dl class="prior-list">
  <div><dt>Goal priors</dt><dd>Know roughly what “better at mathematics” contains without reducing it to one frozen test.</dd></div>
  <div><dt>Task priors</dt><dd>Know which tasks are worth producing, how difficulty should increase, and which failures are informative.</dd></div>
  <div><dt>Verification priors</dt><dd>Execute what can be executed and check what can be checked; avoid asking the generator to grade itself.</dd></div>
  <div><dt>Exploration priors</dt><dd>Allow trial, error, and backtracking while cutting off long trajectories that are going nowhere.</dd></div>
  <div><dt>Diversity priors</dt><dd>Control task types, tools, solution paths, and generator sources so one pattern does not fill the dataset.</dd></div>
</dl>

These priors are not meant to write the solution for the model. They point to where exploration is useful, which feedback is trustworthy, and which outcomes should not be trusted. Ultimately, the model needs to learn more than a single synthesis recipe. Given a new topic or a new open-ended goal, it should be able to borrow from these experiences, design tasks and environments, and search for the next useful data.

There is also a practical risk: generators copy themselves. If one model acts, judges, and filters, Evolve can make its existing patterns more concentrated rather than more capable. Execution tools, independent verifiers, generators from different model families, anchors in real data, and small human audits are ways of keeping the production line from becoming an echo chamber.

<span class="anchor" id="loop"></span>

# Putting the loop together

Once the three pieces are connected, the workflow is ordinary: evaluation locates a problem, Harness–Evolve produces trajectories, SFT trains them back into the model, and the ladder decides whether that data method is still worth scaling.

The unusual part is that the failures of one model begin to determine the data for the next. As the model improves, old tasks stop being useful and old harnesses saturate. The system has to change its tasks, environments, and data rather than finishing one dataset and treating it as permanent.

<div class="loop-grid">
  <div><span>01</span><strong>Name the direction</strong><p>The goal need not begin as one exact score, but it should be clear enough to explore.</p></div>
  <div><span>02</span><strong>Build fresh tasks</strong><p>Keep changing the test until it reaches failures that matter for the current model.</p></div>
  <div><span>03</span><strong>Design the harness</strong><p>Put human domain knowledge into tools, feedback, verification, and exploration rules.</p></div>
  <div><span>04</span><strong>Produce trajectories</strong><p>Let models try, fail, and revise; retain several kinds of complete process.</p></div>
  <div><span>05</span><strong>Filter, then SFT</strong><p>Train only trajectories that are reliable and meaningfully different.</p></div>
  <div><span>06</span><strong>Run the ladder</strong><p>Measure absorption, transfer, and saturation before deciding to produce more.</p></div>
</div>

The strict definition of RSI matters less than whether the loop works. If a model can help identify its failures, help produce the next training experience, and become stronger because of that experience, the loop is already worth studying.

It is not autonomous self-improvement. The goal, harness, verifier, and stopping rule still depend heavily on human judgment. That is partly why the direction feels credible to me: one segment of the larger problem can be made measurable, scalable, and falsifiable without waiting for every other segment to be solved.

# Open questions

- How can an open-ended goal be covered well enough without quietly replacing it with another benchmark?
- How should trajectories from different harnesses be deduplicated and mixed without cancelling one another out?
- When should the data keep scaling, and when should the generator or harness be replaced instead?
- Can the model gradually participate in harness design without causing evaluation and production to collapse into the same loop?
- Does SFT learn a better process, or merely a subtler version of the generator’s style?

These questions do not yet have confident answers. The most useful next step may not be a more complete diagram. It may be to choose one narrow domain, run the entire loop several times, and see where it actually breaks.

<footer class="post-footer">
  <p>Thanks for reading. If you are also working on synthetic data, evaluation, or agent harnesses, I would be glad to compare notes.</p>
  <a href="mailto:mozhu621@gmail.com">mozhu621@gmail.com</a>
  <a href="{{ site.baseurl }}/blog/">More writing →</a>
</footer>
