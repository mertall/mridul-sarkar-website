// Long-form writing. Same single-source pattern as content.ts — the page maps over this.
// Each post body is plain text: blank lines separate blocks, "• " lines become bullets,
// `backticks` become inline code. See renderBody() in the blog page.

export interface BlogPost {
  /** Section heading, e.g. "Post 1 — I Did Not Start With Agents". */
  title: string;
  body: string;
}

export interface Series {
  slug: string;
  title: string;
  description: string;
  date: string;
  posts: BlogPost[];
}

export const agenticEngineering: Series = {
  slug: "agentic-engineering",
  title: "Agentic Engineering",
  description:
    "A series on how my software engineering workflow changed as AI moved from chat, to coding assistant, to planning partner, to agentic system.",
  date: "2026-06-30",
  posts: [
    {
      title: "Intro — Why I'm Writing About Agentic Engineering",
      body: `I'm starting a series on agentic engineering.

Not as a "here are the tools I use" series.

More as a record of how my software engineering workflow changed as AI moved from chat, to coding assistant, to planning partner, to agentic system.

I started using ChatGPT casually in 2022 as a rubber duck for personal projects.

Since then, the workflow has gone through a few phases:

• using AI when Google was not enough
• learning the boundaries of AI in secure engineering environments
• using Claude Code to build working prototypes in minutes
• splitting planning and implementation across different models
• using Codex as a coding and review agent
• isolating agent work with branches and worktrees
• building PR review loops
• experimenting with local inference
• moving toward loop-based engineering workflows

The biggest lesson so far:

Agentic engineering is not about letting AI randomly mutate a repo.

It is about putting AI inside a real software engineering process.

Scope the work.
Isolate the branch.
Review the diff.
Run the checks.
Update dependent PRs.
Control the loop.
Keep human judgment in the right places.

That is the story I want to tell in this series.

How I started.
What broke.
What worked.
Where I think the workflow is going next.`,
    },
    {
      title: "Post 1 — I Did Not Start With Agents",
      body: `I did not start with "agentic engineering."

I started with ChatGPT in 2022 as a rubber duck for personal projects.

At first, the value was simple.

I could paste a code snippet or describe a weird implementation issue, and ChatGPT could often point me toward the relevant idea faster than Google.

Not always the perfect answer.

But often the right direction.

Sometimes the problem with search is that you do not know the exact phrase to search for.

You have a code smell.
An error pattern.
A half-formed architectural question.
A library issue that is hard to describe.

ChatGPT was useful because it could reason from the context I already had.

At that point, it was not writing full systems for me.

It was helping me think.

The workflow was still manual:

Ask the question.
Read the response.
Adapt the code.
Test it myself.
Fix what was wrong.

That phase matters because it was the foundation.

Before AI became an agent in my workflow, it became a better debugging partner.

Before it operated inside the repo, it helped me reason outside of it.

That was the first step.

Not autonomy.

Leverage.`,
    },
    {
      title: "Post 2 — Secure Environments Taught Me Boundaries",
      body: `For most of my tenure in the federal space, AI was not allowed in the engineering workflow.

That shaped how I thought about it.

A lot of people first encountered AI as a productivity shortcut.

I first encountered the serious version of AI through the lens of boundaries.

Where can the model run?
What data can it see?
What systems can it touch?
What needs to be logged?
Who approves the workflow?
How does it fit into the existing DevOps pipeline?

Toward the end of my time there, we started looking at how agentic AI could be integrated into secure engineering environments.

That changed my view of AI in software development.

The question was not just:

"Can the model do the task?"

The better question was:

"Can the model do the task inside the right controls?"

That distinction matters.

Agentic engineering is not just about capability.

It is about capability inside constraints.

The model needs boundaries.
The workflow needs permissions.
The system needs review gates.
The output needs inspection.
The human needs final judgment.

That experience made me less interested in AI as a toy and more interested in AI as an engineering system.

If AI is going to touch real software, it has to fit into real engineering governance.`,
    },
    {
      title: "Post 3 — Claude Code Was the First Real Inflection Point",
      body: `In December 2025, Claude Code was the first tool that genuinely changed how I built software.

Not because it was perfect.

Because, with the right context and constraints, it could make decent engineering decisions inside a real codebase.

That was different.

Before that, AI helped me reason through implementation.

With Claude Code, AI started helping me execute implementation.

If I prompted it properly, gave it the right context, and made the decision boundaries clear, it could produce working prototypes in minutes instead of days.

The important part was not simply saying:

"Build this."

The important part was telling it:

Here is the goal.
Here is the architecture.
Here is what you can change.
Here is what you should not touch.
Here is when you need to check in.
Here is the quality bar.

That changed the output.

Claude Opus was especially strong at planning and architecture.

It could reason through product flows, system boundaries, sequencing, and tradeoffs.

But I still did not want one model doing everything.

That became the next step in my workflow.

Instead of asking:

"Which model is best?"

I started asking:

"Which model is best for which role?"

That question changed everything.`,
    },
    {
      title: "Post 4 — Claude Plans, Codex Codes",
      body: `The first agentic architecture that really worked for me was simple:

Claude plans.
Codex codes.

Claude Opus was strong at long-form planning and architecture.

It was good at understanding the broader system, decomposing work, identifying tradeoffs, and deciding what needed to happen first.

Codex was strong at implementation.

At the time Codex first came out, its coding ability felt noticeably stronger for certain tasks. People described it as feeling like a senior engineer, and in the right lane, I understood why.

So I stopped treating models as interchangeable.

Claude became the architect.

Codex became the implementation agent.

The human role became scope, constraints, sequencing, and final judgment.

That was the actual pattern:

Claude creates the plan.
Codex executes scoped tasks.
Git isolates the work.
PRs create review boundaries.
Review loops catch issues.
Human judgment decides what ships.

This was the first time the workflow felt less like "AI-assisted coding" and more like agentic engineering.

Not one model doing everything.

Not blind autonomy.

Role assignment inside an engineering process.

That is where the leverage started to show up.`,
    },
    {
      title: "Post 5 — AI Overwrite Sickness Is Usually a Process Problem",
      body: `A common complaint I hear from engineers and friends using AI coding tools:

"AI keeps overwriting my work."

I agree.

It is annoying.

But I do not think the core problem is always the model.

A lot of the time, it is a process problem.

If you let an agent edit a broad surface area on one branch, with vague scope, no PR boundary, no merge strategy, and no review loop, the repo will get messy.

That is not unique to AI.

Human teams have the same problem when they skip basic software engineering practices.

The difference is that AI makes the failure happen faster.

The fix is not magic.

It is normal SWE discipline:

Create a branch.
Scope the feature.
Open a PR.
Review the diff.
Implement feedback.
Pull the latest changes.
Merge upstream changes into active branches.
Keep dependent PRs synchronized.

AI coding tools make software engineering fundamentals more important, not less.

This is especially obvious when people without a software engineering background start using agents to code.

They experience branch conflicts, overwrites, stale changes, and messy diffs as "AI problems."

But many of those problems already have solutions.

Agentic engineering works better when it borrows from the practices good engineering teams already use.`,
    },
    {
      title: "Post 6 — Worktrees Made Agents Usable",
      body: `Once I started using agents seriously, I needed a way to let them work without stepping on each other.

That is where worktrees became important.

Instead of letting one model make broad edits on one branch, I could create separate worktrees for separate feature scopes.

Each agent had its own lane.

One branch.
One feature scope.
One PR.
One review boundary.

That made parallel agent work much safer.

But worktrees alone were not enough.

The key was sequencing.

If PR 1 merged, then PR 2, PR 3, and any other related branches needed to pull in the latest changes before continuing.

Otherwise, an agent could keep working on stale code and accidentally undo work that had already landed.

That is where cascading PR discipline mattered.

The workflow became:

Scope the feature.
Create the isolated worktree.
Let the agent implement.
Open a PR.
Review the changes.
Merge when ready.
Update dependent branches.
Continue.

This was one of the biggest practical unlocks for me.

The agents became more useful when the repo became harder for them to damage.

That is a pattern I keep coming back to:

Do not just make the model smarter.

Make the workflow safer.`,
    },
    {
      title: "Post 7 — The First Skill I Built Was a Process Wrapper",
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

• feature scoping
• branch and worktree isolation
• PR creation
• Codex review
• feedback loops
• dependent PR updates
• merge sequencing

Feature scoping was still my job.

The skill just helped enforce the sequence.

If a PR was merged, any other PR that was part of the same plan needed to pull in the latest changes before proceeding.

That reduced the "AI overwrote my work" problem because the workflow stopped allowing agents to operate on stale assumptions.

One of the biggest lessons:

Agentic engineering is not just prompting.

It is turning good engineering judgment into reusable workflows.`,
    },
    {
      title: "Post 8 — PR Review Loops Changed the Quality Bar",
      body: `One of the most useful workflows I built was a PR review loop.

The idea was simple.

An agent creates a PR.
Another agent reviews it.
The implementation agent fixes the findings.
The reviewer checks again.
The loop continues until there are no more findings.

In my case, I used Codex review.

The flow looked like this:

Create PR from the branch.
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

Instead of spending all my time catching obvious issues, I could focus on architecture, product behavior, edge cases, and whether the change actually matched the intent.

The agent can write code.

The agent can review code.

The agent can fix review feedback.

But the human still owns judgment.

That is the line I try to keep clear.

Agentic engineering is not removing review.

It is making review loops faster, more repeatable, and easier to run before the human does the final inspection.`,
    },
    {
      title: "Post 9 — Why I Started Moving Toward Local Inference",
      body: `At one point, I started thinking seriously about local inference.

Not because the API was too expensive.

In many cases, the token-per-dollar economics from frontier model APIs were better than what I could run locally.

The reason was control.

If I hit rate limits, I wanted a fallback.

If I was working on personal productivity workflows, I wanted them close to my own machine.

If the workflow involved sensitive personal information, bank details, credentials, or private planning, I did not want that leaving my environment.

So I built a 128 GB unified memory workstation for less than a comparable Mac Studio setup.

Then I started experimenting with a local architecture:

• Qwen as the chat model
• Gemma as the orchestrator
• Qwen as the tool router
• dynamic personas based on task type
• background memory monitoring
• agents spinning up and down based on workload
• Discord as the interface

One Gemma instance and one Qwen instance stayed on.

Everything else became task-dependent.

That opened a different category of agentic workflow.

Not just code generation.

Local planning.
Local productivity.
Local routing.
Local workflows around private context.

The point was not to replace frontier models.

The point was to have a private, controllable layer for the work that belonged on my own machine.`,
    },
    {
      title: "Post 10 — Loop Engineering Is the Next Step",
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

• clear objective
• scoped permissions
• observable state
• failure detection
• rollback or repair behavior
• review gates
• stop conditions
• traceability

This was the part I had avoided for a while.

Partly because of token burn.

Partly because runaway agents are hard to trust.

Partly because loops can become unreadable if the system does not make each step observable.

But once I started using tools that made loop engineering more composable, understandable, and traceable, the idea became much more practical.

That felt like a new paradigm.

The future of agentic engineering is not just better models.

It is better loops.

A model can produce an answer.

A loop can produce progress.

That distinction matters.`,
    },
    {
      title: "Post 11 — `gmwyd` Is an Artifact of the Workflow",
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

The workflow is the real lesson.`,
    },
    {
      title: "Post 12 — Screenshot-AI and Frontend Iteration Loops",
      body: `A separate area where agentic engineering gets interesting is frontend iteration.

This is where screenshot-based workflows are useful.

Instead of only describing what is wrong with a UI, you can show the current state, compare it to the intended state, and let the agent reason from the visual difference.

That creates a tighter loop:

Generate or edit the UI.
Run the app.
Take a screenshot.
Compare against the target.
Identify visual issues.
Apply fixes.
Repeat.

This is especially useful for frontend work because many issues are easier to see than explain.

Spacing is off.
Hierarchy is unclear.
The layout does not match the design.
The component feels visually inconsistent.
The page works technically, but does not look right.

Screenshot-AI is interesting to me because it makes visual feedback part of the engineering loop.

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
      title: "Post 13 — Where I Think Agentic Engineering Goes Next",
      body: `I do not think agentic engineering eliminates the engineer.

I think it changes where engineering judgment lives.

Less time manually typing every line.

More time defining:

• what should be built
• how the work should be scoped
• which agent should do it
• what constraints matter
• what quality gates must pass
• when to stop the loop
• what tradeoffs are acceptable
• what should never be automated

That is the shift.

The engineer becomes less of a line-by-line implementer and more of a system designer for engineering workflows.

The future is not one giant autonomous agent that does everything perfectly.

The future is composed systems:

• specialized agents
• local and cloud model routing
• isolated worktrees
• PR review loops
• test gates
• memory
• rollback
• traceability
• human approval at the right points

That is what I mean by agentic engineering.

Not vibe coding.

Not prompt tricks.

Not replacing software engineering fundamentals.

It is software engineering fundamentals applied to AI-native development.

The people who get the most leverage from AI will not be the ones who blindly trust it.

They will be the ones who know how to design the system around it.`,
    },
  ],
};
