// Long-form writing. Same single-source pattern as content.ts — the page maps over this.
// Each section body is plain text: blank lines separate blocks, "* "/"• " lines become
// bullets, `backticks` become inline code. See renderBody() in the blog page.

/** A conceptual, non-technical visual woven into a section. Rendered by BlogVisual. */
export interface VisualPanel {
  title: string;
  items: string[];
  outcome?: string;
  tone?: "warn" | "good";
}
export type Visual =
  | { kind: "steps"; steps: string[]; loop?: boolean; loopLabel?: string; caption?: string }
  | { kind: "split"; left: VisualPanel; right: VisualPanel; caption?: string }
  | { kind: "frame"; chips: string[]; inner: string; caption?: string };

export interface Section {
  /** Anchor id used by the table of contents, e.g. "secure-environments". */
  id: string;
  /** Short, friendly label shown in the table of contents. */
  tocLabel: string;
  heading: string;
  body: string;
  /** Conceptual visual, rendered after the section's opening line. */
  visual?: Visual;
}

export interface Series {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: Section[];
}

export const agenticEngineering: Series = {
  slug: "agentic-engineering",
  title: "Agentic Engineering",
  description:
    "How my software engineering workflow changed as AI moved from chat, to coding assistant, to planning partner, to agentic system.",
  date: "2026-06-30",
  sections: [
    {
      id: "rubber-duck",
      tocLabel: "Where it started",
      heading: "From ChatGPT as a Rubber Duck to Agentic Engineering",
      visual: {
        kind: "steps",
        steps: ["Ask", "Read", "Adapt", "Test", "Fix"],
        loop: true,
        loopLabel: "next problem",
        caption: "Every step by hand — AI-assisted thinking, 2022",
      },
      body: `I did not start with "agentic engineering."

I started with ChatGPT in 2022 as a rubber duck for personal projects.

At the time, the workflow was simple. I would get stuck on a piece of code, paste in a snippet, describe the issue, and use ChatGPT to help me reason through the problem. It was not writing full systems for me. It was not operating inside my repo. It was not running commands, creating branches, opening PRs, or reviewing code.

It was helping me think.

That distinction matters because my path into agentic engineering did not begin with autonomy. It began with leverage.

The first thing that stood out was that ChatGPT could sometimes find the right idea faster than Google. Not because it was always correct, and not because search stopped being useful, but because search often requires you to know the exact phrase for the problem you are trying to solve.

A lot of engineering problems do not start that cleanly.

Sometimes you have:

* a vague error pattern
* a code smell
* a half-formed architectural question
* a library behavior you do not fully understand
* a stack trace that points in three possible directions
* a pattern you recognize but cannot quite name

Traditional search is good when you know what to ask.

ChatGPT was useful when I had context but not the right query.

That was the first shift for me. AI was not yet an engineer in the loop. It was a better reasoning surface. I could describe the problem in the language I had, and it would help me discover the language I needed.

The workflow still looked like this:

Ask the question.

Read the response.

Adapt the code.

Test it manually.

Fix what was wrong.

Move on.

That phase was useful, but it was not agentic engineering. It was AI-assisted thinking.

The next phase came from a very different environment.`,
    },
    {
      id: "secure-environments",
      tocLabel: "Learning the boundaries",
      heading: "Secure Environments Taught Me Boundaries",
      visual: {
        kind: "frame",
        chips: ["access", "logging", "approvals", "review", "rollback", "ownership"],
        inner: "the model does useful work",
        caption: "Capability only counts inside the constraints",
      },
      body: `For most of my tenure in the federal space, AI was not allowed in the engineering workflow.

That shaped how I thought about it.

A lot of people encountered AI first as a productivity shortcut. I encountered the serious version of AI through the lens of boundaries.

Where can the model run?

What data can it see?

What systems can it touch?

What needs to be logged?

Who approves the workflow?

How does it fit into the existing DevOps pipeline?

What happens when it makes a mistake?

What information should never leave the environment?

Toward the end of my time there, we started looking at how LLMs and agentic AI could be integrated into secure engineering workflows. That was a very different conversation from "can this model write code?"

The better question was:

Can this model perform useful work inside the right controls?

That distinction has stayed with me.

Agentic engineering is not just about capability. It is about capability inside constraints.

A model that can write code is interesting.

A model that can write code inside a controlled engineering process is useful.

A model that can inspect a repository, understand boundaries, propose a plan, make scoped changes, run checks, ask for review, and avoid touching systems it should not touch starts to become something more operationally meaningful.

This is where my thinking changed.

AI in software engineering is not just a chatbot.

It is not just autocomplete.

It is not just a productivity toy.

If it is going to touch real systems, it needs to fit into real engineering governance.

That means:

* access control
* environment boundaries
* logging
* repeatable workflows
* approval gates
* code review
* auditability
* rollback paths
* clear human ownership

That foundation became important later. When I started using AI more aggressively in my own development workflow, I did not think of the problem as "how do I make the model autonomous?"

I thought of it as:

How do I put the model inside a process where it can be useful without being reckless?`,
    },
    {
      id: "claude-code",
      tocLabel: "The first inflection point",
      heading: "Claude Code Was the First Real Inflection Point",
      visual: {
        kind: "split",
        left: {
          title: "Just 'build this'",
          items: ["No goal, no limits", "Plausible but inconsistent"],
          tone: "warn",
        },
        right: {
          title: "An engineering frame",
          items: ["Goal, limits, quality bar", "Decent decisions, fast"],
          tone: "good",
        },
        caption: "Same model, very different output",
      },
      body: `The first tool that genuinely changed how I built software was Claude Code.

By December 2025, I had used plenty of AI coding workflows. I had tried tools like Windsurf and Cursor. They were useful, but I still preferred my own IDE experience combined with ChatGPT when search was not enough.

Claude Code felt different.

Not because it was perfect.

It was not.

It made mistakes. It needed direction. It could overreach. It could make incorrect assumptions. It could produce code that looked plausible but needed inspection.

But with the right prompting, context, and decision boundaries, it could make decent engineering decisions inside a real codebase.

That was the important part.

Before that, AI helped me reason through implementation.

With Claude Code, AI started helping me execute implementation.

The difference was not simply saying:

"Build this."

The difference was giving it an engineering frame:

Here is the goal.

Here is the architecture.

Here is the current state of the repo.

Here is what you can change.

Here is what you should not touch.

Here is when you need to check in with me.

Here is the quality bar.

Here is how to think about the tradeoffs.

Here is what "done" means.

When I treated the model like an unconstrained magic box, the results were inconsistent.

When I treated it like a capable engineer operating under constraints, the results improved dramatically.

That became one of the first practical lessons:

> A strong coding agent is only as useful as the boundaries you give it.

Claude Code could produce working prototypes in minutes that previously would have taken days. That did not mean the prototypes were production-ready. It meant the time from idea to working surface area collapsed.

Instead of spending hours setting up boilerplate, wiring components, building first-pass API handlers, or exploring implementation paths, I could get to a working version quickly and spend my time evaluating direction.

That changed the role of the human engineer.

I was no longer just typing every line.

I was defining the problem, shaping the architecture, reviewing the output, and deciding which tradeoffs were acceptable.

Claude Opus was especially strong at planning and architecture. It could reason through product flows, system boundaries, sequencing, and tradeoffs. It could hold a large plan in mind and explain what needed to happen first.

But I still did not want one model doing everything.

That became the next shift.

Instead of asking:

Which model is best?

I started asking:

Which model is best for which role?`,
    },
    {
      id: "claude-plans-codex-codes",
      tocLabel: "Claude plans, Codex codes",
      heading: "Claude Plans, Codex Codes",
      visual: {
        kind: "steps",
        steps: [
          "The architect plans",
          "The builder implements",
          "Review catches issues",
          "You decide what ships",
        ],
        loop: true,
        loopLabel: "more work",
        caption: "Two roles inside one process",
      },
      body: `The first agentic architecture that really worked for me was simple:

> Claude plans.
> Codex codes.

Claude Opus was strong at long-form planning and architecture. It was useful for understanding a broader system, decomposing work, identifying tradeoffs, and deciding what needed to happen first.

Codex was strong at implementation.

At the time Codex first came out, its coding ability felt noticeably stronger for certain implementation tasks. People described it as feeling like a senior engineer, and in the right lane, I understood why.

So I stopped treating models as interchangeable.

Claude became the architect.

Codex became the implementation agent.

The human role became scope, constraints, sequencing, and final judgment.

The workflow began to look like this:

Claude reasons through the product goal and architecture.

Claude decomposes the work into scoped implementation tasks.

Codex executes individual tasks.

Git isolates the work.

PRs create review boundaries.

Review loops catch issues.

The human reviews the system-level outcome and decides what ships.

This was the first time the workflow felt less like AI-assisted coding and more like agentic engineering.

Not one model doing everything.

Not blind autonomy.

Not "vibe coding."

Role assignment inside an engineering process.

That is where the leverage started to show up.

The key realization was that different models have different strengths. Some are better at long-context reasoning. Some are better at implementation. Some are better at tool use. Some are better at review. Some are better at summarization. Some are good enough locally for private productivity tasks but not strong enough for complex production architecture.

Once you accept that, the question changes.

The question is no longer:

How do I prompt one model perfectly?

The question becomes:

How do I design a workflow where the right model handles the right part of the engineering process?

That is a different kind of engineering problem.`,
    },
    {
      id: "overwrite-sickness",
      tocLabel: "It's a process problem",
      heading: "AI Overwrite Sickness Is Usually a Process Problem",
      visual: {
        kind: "split",
        left: {
          title: "No process",
          items: ["One branch", "Vague scope", "No review"],
          outcome: "Tangles and overwrites",
          tone: "warn",
        },
        right: {
          title: "Normal discipline",
          items: ["Branch + scope", "PR + review", "Pull the latest"],
          outcome: "A clean merge",
          tone: "good",
        },
        caption: "The mess is usually the process, not the model",
      },
      body: `One of the most common complaints I hear from engineers and friends using AI coding tools is:

"AI keeps overwriting my work."

I agree that it is annoying.

But I do not think the core problem is always the model.

A lot of the time, it is a process problem.

If you let an agent edit a broad surface area on one branch, with vague scope, no PR boundary, no merge strategy, and no review loop, the repo will get messy.

That is not unique to AI.

Human teams create the same problems when they skip basic software engineering practices.

The difference is that AI makes the failure happen faster.

A human developer might slowly create merge conflicts over a few days.

An AI agent can create the same chaos in minutes.

That does not mean the solution is exotic.

The solution is mostly normal software engineering discipline:

Create a branch.

Scope the feature.

Open a PR.

Review the diff.

Implement feedback.

Pull the latest changes.

Merge upstream changes into active branches.

Keep dependent PRs synchronized.

Avoid letting multiple streams of work mutate the same files without coordination.

This is especially obvious when people without a software engineering background start using agents to code. They experience stale branches, overwritten files, merge conflicts, noisy diffs, and broken assumptions as "AI problems."

But many of those problems already have solutions.

Good engineering teams already know how to manage parallel work. They use branches, pull requests, code review, CI, feature flags, small diffs, and merge discipline.

Agentic engineering does not make those fundamentals less important.

It makes them more important.

The more powerful the agent, the more important the process around it becomes.

That became one of the central ideas in my workflow:

> Do not just make the model smarter.
> Make the environment safer.`,
    },
    {
      id: "worktrees",
      tocLabel: "Worktrees & isolation",
      heading: "Worktrees Made Agents More Usable",
      visual: {
        kind: "split",
        left: {
          title: "One shared branch",
          items: ["Everyone edits the same files"],
          outcome: "Collisions, stale work",
          tone: "warn",
        },
        right: {
          title: "A lane each",
          items: ["One scope, one branch, one PR"],
          outcome: "Merged in order",
          tone: "good",
        },
        caption: "Give every agent its own lane",
      },
      body: `Once I started using agents seriously, I needed a way to let them work without stepping on each other.

That is where worktrees became important.

Instead of letting one model make broad edits on one branch, I could create separate worktrees for separate feature scopes.

Each agent had its own lane.

One branch.

One feature scope.

One PR.

One review boundary.

That made parallel agent work much safer.

The important thing was not just parallelism. It was isolation.

If an agent was working on a billing flow, another agent should not be casually editing the same files for a dashboard refactor. If one PR changed the database schema, other related work needed to understand that before continuing. If one branch landed first, dependent branches needed to pull in those changes before moving forward.

This is where cascading PR discipline mattered.

The workflow became:

Scope the feature.

Create the isolated worktree.

Let the agent implement.

Open a PR.

Review the changes.

Merge when ready.

Update dependent branches.

Continue.

If PR 1 merged, then PR 2, PR 3, and any other related branches needed to pull in the latest changes before proceeding.

Otherwise, an agent could keep working on stale code and accidentally undo work that had already landed.

That was one of the biggest practical unlocks for me.

Agents became more useful when the repo became harder for them to damage.

This is also where human skill still mattered. Feature scoping did not disappear. In fact, it became more important.

A task needs to be sized correctly for an agent.

Too small, and the coordination overhead is not worth it.

Too large, and the agent touches too much of the system.

A good agent-sized task has a clear objective, a narrow file surface area, a testable outcome, and a defined stopping point.

For example:

"Add a status filter to the project list page and update the API query to support it" is a good scoped task.

"Improve the dashboard" is not.

The model can execute, but the human still needs to define the unit of work.

That is engineering judgment.`,
    },
    {
      id: "process-wrapper",
      tocLabel: "Wrapping the process in a skill",
      heading: "The First Skill I Built Was a Process Wrapper",
      visual: {
        kind: "steps",
        steps: ["Scope", "Branch", "Build", "Review", "Merge", "Update the rest"],
        loop: true,
        loopLabel: "next feature",
        caption: "The steps you stop having to remember",
      },
      body: `Eventually, I got tired of manually coordinating the same workflow.

Scope the feature.

Create the branch.

Run the agent.

Open the PR.

Ask for review.

Fix the review.

Check if related PRs need updating.

Pull latest changes.

Continue.

So I built a skill for myself.

The point of the skill was not to make AI fully autonomous.

The point was to encode the software engineering process I was already using manually.

That distinction matters.

A lot of people try to make the agent smarter.

I wanted to make the workflow safer and more repeatable.

The skill helped coordinate:

* feature scoping
* branch and worktree isolation
* PR creation
* Codex review
* feedback loops
* dependent PR updates
* merge sequencing

Feature scoping was still my job.

The skill helped enforce the sequence.

If a PR was merged, any other PR that was part of the same plan needed to pull in the latest changes before proceeding.

That reduced the "AI overwrote my work" problem because the workflow stopped allowing agents to operate on stale assumptions.

This is one of the more important lessons I learned:

Agentic engineering is not just prompting.

It is turning good engineering judgment into reusable workflows.

A prompt is an instruction.

A skill is a repeatable process.

A process can preserve hard-won lessons.

For example, instead of reminding the model every time not to make broad unrelated changes, the workflow can enforce scoped execution. Instead of manually remembering to update dependent branches, the workflow can treat that as part of the plan. Instead of hoping review happens, the workflow can make review part of the loop.

That is when the system starts to compound.

You are no longer just using the model.

You are building the operating procedure around the model.`,
    },
    {
      id: "pr-review-loops",
      tocLabel: "PR review loops",
      heading: "PR Review Loops Changed the Quality Bar",
      visual: {
        kind: "steps",
        steps: ["Open PR", "Ask for review", "Apply the notes", "Push"],
        loop: true,
        loopLabel: "until clean",
        caption: "Round and round until a human signs off",
      },
      body: `One of the most useful workflows I built was a PR review loop.

The idea was simple.

An agent creates a PR.

Another agent reviews it.

The implementation agent fixes the findings.

The reviewer checks again.

The loop continues until there are no more findings.

In my case, I used Codex review.

The flow looked like this:

Create a PR from the branch.

Comment \`@codex review\`.

Wait for feedback.

Apply the review findings.

Push updates.

Request review again.

Repeat until clean.

This changed the role of AI in the workflow.

AI was no longer just writing code.

It was also participating in quality control.

That does not mean I stopped reviewing.

It means my review started at a higher level.

Instead of spending all my time catching obvious issues, I could focus more on architecture, product behavior, edge cases, and whether the change actually matched the intent.

The agent can write code.

The agent can review code.

The agent can fix review feedback.

But the human still owns judgment.

That is the line I try to keep clear.

AI review is useful, but it is not the same as accountability. A model can catch issues, but it does not own the consequences of shipping the system. The human engineer still has to understand the change, inspect the diff, and decide whether the result is acceptable.

The value of the PR review loop is that it moves more defects earlier in the process.

It can catch missing tests, inconsistent patterns, typing issues, naming problems, edge cases, dead code, or mismatches with the requested behavior.

It can also miss things.

It can misunderstand product intent.

It can approve a change that is locally correct but globally wrong.

It can fail to notice that the implementation makes the system harder to maintain.

That is why the loop is not a replacement for engineering review.

It is a pre-review accelerator.

It gets the PR into better shape before the human does the final inspection.`,
    },
    {
      id: "local-inference",
      tocLabel: "Going local",
      heading: "Why I Started Moving Toward Local Inference",
      visual: {
        kind: "split",
        left: {
          title: "Frontier, in the cloud",
          items: ["Heavy architecture", "Complex coding"],
        },
        right: {
          title: "Local, on my machine",
          items: ["Private context", "Planning and routing", "Always available"],
          tone: "good",
        },
        caption: "The right layer for the work",
      },
      body: `At one point, I started thinking seriously about local inference.

Not because the API was too expensive.

In many cases, the token-per-dollar economics from frontier model APIs were better than what I could run locally.

The reason was control.

If I hit rate limits, I wanted a fallback.

If I was working on personal productivity workflows, I wanted them close to my own machine.

If the workflow involved sensitive personal information, bank details, credentials, or private planning, I did not want that leaving my environment.

So I built a 128 GB unified memory workstation for less than a comparable Mac Studio setup.

Then I started experimenting with a local architecture:

* Qwen as the chat model
* Gemma as the orchestrator
* Qwen as the tool router
* dynamic personas based on task type
* background memory monitoring
* agents spinning up and down based on workload
* Discord as the interface

One Gemma instance and one Qwen instance stayed on.

Everything else became task-dependent.

That opened a different category of agentic workflow.

Not just code generation.

Local planning.

Local productivity.

Local routing.

Local workflows around private context.

The point was not to replace frontier models.

The point was to have a private, controllable layer for work that belonged on my own machine.

This is an important distinction.

Local inference is not automatically better.

It is not always cheaper.

It is not always smarter.

But it gives you different properties:

* privacy
* control
* availability
* experimentation
* offline resilience
* custom routing
* private memory
* lower concern around sensitive local context

That made it useful for a specific class of workflows.

For high-end architecture and complex coding, I still wanted frontier models.

For personal productivity, local planning, private notes, routing, and lightweight automation, local models became much more interesting.

This reinforced the same pattern again:

The question is not "which model wins?"

The question is "which model belongs in which part of the system?"`,
    },
    {
      id: "loop-engineering",
      tocLabel: "Loop engineering",
      heading: "Loop Engineering Is the Next Step",
      visual: {
        kind: "steps",
        steps: ["Plan", "Act", "Check", "Repair", "Review", "Stop"],
        loop: true,
        loopLabel: "if not done",
        caption: "A loop with structure, not just 'run it again'",
      },
      body: `The next major shift for me was loop engineering.

Prompt engineering is about asking the model for a good answer.

Loop engineering is about creating a system that keeps working toward an objective.

Plan.

Act.

Check.

Repair.

Retry.

Review.

Stop.

That changed how I thought about agents.

A good loop is not just "run the model again."

A good loop has structure:

* clear objective
* scoped permissions
* observable state
* failure detection
* rollback or repair behavior
* review gates
* stop conditions
* traceability

This was the part I had avoided for a while.

Partly because of token burn.

Partly because runaway agents are hard to trust.

Partly because loops can become unreadable if the system does not make each step observable.

But once I started using tools that made loop engineering more composable, understandable, and traceable, the idea became much more practical.

That felt like a new paradigm.

The future of agentic engineering is not just better models.

It is better loops.

> A model can produce an answer.
> A loop can produce progress.

That distinction matters.

A single prompt might generate a plan.

A loop can implement part of the plan, run checks, detect failure, revise the implementation, request review, repair findings, and stop when a condition is satisfied.

That is much closer to how engineering work actually happens.

Real software development is not one-shot.

It is iterative.

You build.

You test.

You inspect.

You discover something wrong.

You adjust.

You ask for review.

You fix the review.

You merge.

You learn from the result.

Agentic engineering becomes powerful when the AI workflow reflects that reality.`,
    },
    {
      id: "gmwyd",
      tocLabel: "Building gmwyd",
      heading: "`gmwyd` Is an Artifact of the Workflow",
      visual: {
        kind: "steps",
        steps: ["Planning", "Execution", "Review", "Repair", "Merge"],
        caption: "Composing the pieces into one repeatable system",
      },
      body: `One thing I started building from this agentic engineering workflow is \`gmwyd\`.

I do not think of it as the center of the story.

I think of it as one artifact that came out of the process.

After using Claude for planning, Codex for implementation, worktrees for isolation, PRs for review boundaries, and loops for iteration, I wanted a cleaner way to compose those pieces.

The problem was not that I needed another chatbot.

The problem was that the workflow had too many repeated coordination steps:

Define the task.

Scope the feature.

Create the branch.

Run the agent.

Open the PR.

Request review.

Apply feedback.

Update dependent branches.

Continue the loop.

\`gmwyd\` is my attempt to make that workflow more repeatable.

Not autonomous for the sake of autonomy.

Not a replacement for engineering judgment.

Just a way to package the agentic engineering process I was already using manually.

The larger idea is more important than the tool:

Good agentic engineering comes from composing planning, execution, review, repair, and merge discipline into a system.

That is the part I care about most.

The tool is one expression of the workflow.

The workflow is the real lesson.

In my view, the best agentic tools will not just expose a chat window. They will encode engineering process.

They will understand branches.

They will understand PRs.

They will understand review loops.

They will understand test gates.

They will understand dependency sequencing.

They will understand when to ask.

They will understand when to stop.

That is the direction I care about.

Not "AI writes code."

AI participates in a controlled engineering system.`,
    },
    {
      id: "screenshot-ai",
      tocLabel: "Frontend & screenshots",
      heading: "Screenshot-AI and Frontend Iteration Loops",
      visual: {
        kind: "steps",
        steps: ["Build", "Run", "Screenshot", "Compare", "Fix"],
        loop: true,
        loopLabel: "until it looks right",
        caption: "Seeing the result, then improving it",
      },
      body: `A separate area where agentic engineering gets interesting is frontend iteration.

This is where screenshot-based workflows are useful.

Frontend work has a specific challenge: many problems are visual.

You can describe them in text, but it is often inefficient.

Spacing is off.

Hierarchy is unclear.

The layout does not match the design.

The component feels visually inconsistent.

The page works technically, but it does not look right.

A screenshot gives the agent a different kind of context.

Instead of only describing what is wrong with a UI, you can show the current state, compare it to the intended state, and let the agent reason from the visual difference.

That creates a tighter loop:

Generate or edit the UI.

Run the app.

Take a screenshot.

Compare against the target.

Identify visual issues.

Apply fixes.

Repeat.

That is useful because frontend iteration is not just about producing code. It is about producing a rendered experience.

A component can be technically correct and visually wrong.

A page can pass tests and still feel broken.

A layout can use the right data and still fail because the spacing, hierarchy, or visual rhythm is off.

Screenshot-AI is interesting because it makes visual feedback part of the engineering loop.

It is not just code generation.

It is:

Code.

Render.

Inspect.

Adjust.

Repeat.

That is the broader agentic engineering pattern showing up again.

The value is not one perfect prompt.

The value is a loop that can observe the result and improve it.

For frontend work, screenshots are one of the cleanest ways to close that loop.`,
    },
    {
      id: "whats-next",
      tocLabel: "Where it goes next",
      heading: "Where I Think Agentic Engineering Goes Next",
      visual: {
        kind: "frame",
        chips: [
          "agents",
          "routing",
          "worktrees",
          "review loops",
          "test gates",
          "memory",
          "rollback",
        ],
        inner: "human approval at the right points",
        caption: "Composed systems, not one giant agent",
      },
      body: `I do not think agentic engineering eliminates the engineer.

I think it changes where engineering judgment lives.

Less time manually typing every line.

More time defining:

* what should be built
* how the work should be scoped
* which agent should do it
* what constraints matter
* what quality gates must pass
* when to stop the loop
* what tradeoffs are acceptable
* what should never be automated

That is the shift.

The engineer becomes less of a line-by-line implementer and more of a system designer for engineering workflows.

The future is not one giant autonomous agent that does everything perfectly.

The future is composed systems:

* specialized agents
* local and cloud model routing
* isolated worktrees
* PR review loops
* test gates
* memory
* rollback
* traceability
* human approval at the right points

That is what I mean by agentic engineering.

Not vibe coding.

Not prompt tricks.

Not replacing software engineering fundamentals.

It is software engineering fundamentals applied to AI-native development.

The people who get the most leverage from AI will not be the ones who blindly trust it.

They will be the ones who know how to design the system around it.`,
    },
    {
      id: "main-lesson",
      tocLabel: "The main lesson",
      heading: "The Main Lesson",
      visual: {
        kind: "frame",
        chips: [
          "scope",
          "isolate",
          "review",
          "run checks",
          "update PRs",
          "control the loop",
        ],
        inner: "AI-driven work",
        caption: "The discipline is the container",
      },
      body: `The biggest lesson from this whole progression is that agentic engineering is not primarily about making AI more autonomous.

It is about making AI useful inside a disciplined engineering system.

The model matters.

But the workflow matters more than people think.

A strong model with a weak process can destroy a repo quickly.

A slightly weaker model inside a good process can still produce useful work.

That is why I keep coming back to the same ideas:

Scope the work.

Isolate the branch.

Review the diff.

Run the checks.

Update dependent PRs.

Control the loop.

Keep human judgment in the right places.

> Agentic engineering is not the absence of software engineering discipline.
> It is what happens when software engineering discipline becomes the container for AI-driven work.`,
    },
  ],
};
