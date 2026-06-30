// Long-form writing. Same single-source pattern as content.ts — the page maps over this.
// Each section body is plain text: blank lines separate blocks, "* "/"• " lines become
// bullets, "> " lines become a pull-quote, `backticks` become inline code.

/** A conceptual, non-technical visual woven into a section. Rendered by BlogVisual. */
export interface VisualPanel {
  title: string;
  items: string[];
  outcome?: string;
  tone?: "warn" | "good";
}
export interface VisualLane {
  label: string;
  steps: string[];
}
export type Visual =
  | { kind: "steps"; steps: string[]; loop?: boolean; loopLabel?: string; caption?: string }
  | { kind: "split"; left: VisualPanel; right: VisualPanel; caption?: string }
  | { kind: "lanes"; lanes: VisualLane[]; caption?: string }
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
      body: `I did not start with "agentic engineering." I started with ChatGPT in 2022 as a rubber duck.

The workflow was simple: get stuck, paste a snippet, talk it through. It wasn't writing systems or touching my repo. It was helping me think — so my path in began with leverage, not autonomy.

What stood out was that it could find the right idea faster than Google. Search needs the exact phrase, and a lot of problems don't start that cleanly — a vague error, a code smell, a half-formed question. I had the context but not the query, and the model could reason from what I already knew.

For a while it stayed manual: ask, read, adapt, test, fix, move on. Useful, but not agentic engineering — just AI-assisted thinking.

What follows is really a scaling story, and it moves along two axes. First I scaled *vertically* — one agent doing drastically more in a single pass. Then *horizontally*, building the skills to run agents in parallel. Then vertical again, splitting the work so Claude architects and Codex builds. Then I scaled the review itself, both ways at once. Now I'm pushing vertical scale again with loops — not replacing any of that, but folding every earlier lesson into one agentic workflow. But the first real lesson came from somewhere that banned AI entirely.`,
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
      body: `For most of my time in the federal space, AI wasn't allowed in the workflow. That shaped how I saw it.

Most people met AI as a productivity shortcut. I met the serious version through boundaries: Where can the model run? What data can it see? What gets logged? Who approves it? What should never leave the environment?

Later we started looking at how agentic AI could fit secure engineering workflows. The question was never just "can it write code?" It was:

> Can it do useful work inside the right controls?

A model that writes code is interesting. A model that writes code inside review, logging, approvals, and rollback is useful. If AI is going to touch real systems, it has to fit real engineering governance — not a chatbot bolted on, but something that runs inside the controls.`,
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
      body: `The first tool that genuinely changed how I build software was Claude Code, in December 2025.

I'd tried Cursor, Windsurf, ChatGPT on the side. Claude Code was different — not perfect, but with the right context and boundaries it made decent engineering decisions inside a real codebase. Before, AI helped me reason about implementation. Now it helped me execute it.

The difference wasn't "build this." It was giving it a frame: the goal, the architecture, what to touch and what not to, the quality bar, what "done" means.

> A strong coding agent is only as useful as the boundaries you give it.

Prototypes that took days took minutes — not production-ready, but the distance from idea to working surface collapsed, and my job shifted to defining the problem and judging the result. Claude Opus was strongest at planning and architecture. But I didn't want one model doing everything. The question wasn't "which model is best?" — it was "which model is best for which role?"`,
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
      body: `The first architecture that really worked was simple:

> Claude plans.
> Codex codes.

Claude Opus was strong at planning — decomposing work, weighing tradeoffs, deciding what comes first. Codex, when it launched, felt noticeably stronger at implementation; people called it a senior engineer, and in the right lane I understood why.

So I stopped treating models as interchangeable. Claude became the architect, Codex the implementer, and I owned scope, sequencing, and final judgment. Git isolated the work, PRs drew the review boundaries, loops caught issues.

For the first time it felt less like AI-assisted coding and more like agentic engineering — not one model doing everything, not blind autonomy, but role assignment inside a process. The question stopped being "how do I prompt one model perfectly?" and became "how do I get the right model on the right part of the work?"

That was vertical scale again: not more agents, but more depth in a single pass — one architect, one builder, more done before I had to step in.`,
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
      body: `A complaint I hear constantly: "AI keeps overwriting my work."

It's annoying — but it's usually a process problem, not a model problem. Let an agent edit a broad surface on one branch with vague scope and no review, and the repo gets messy. That's not unique to AI; teams do it whenever they skip the basics. AI just makes it happen faster.

The fix isn't exotic. It's ordinary discipline: branch, scope, PR, review, pull the latest, keep dependent PRs in sync. This hits hardest for people without a software background — they experience stale branches and messy diffs as "AI problems," when those problems already have solutions.

Agentic engineering doesn't make fundamentals less important. It makes them more important.

> Do not just make the model smarter.
> Make the environment safer.`,
    },
    {
      id: "worktrees",
      tocLabel: "Worktrees & isolation",
      heading: "Worktrees Made Agents More Usable",
      visual: {
        kind: "lanes",
        lanes: [
          { label: "Worktree A", steps: ["scope", "branch", "PR"] },
          { label: "Worktree B", steps: ["scope", "branch", "PR"] },
          { label: "Worktree C", steps: ["scope", "branch", "PR"] },
        ],
        caption: "Each agent in its own lane — merged in order, the rest pull the latest",
      },
      body: `To let agents work without stepping on each other, I leaned on worktrees.

Instead of one model making broad edits on one branch, each agent got its own lane: one scope, one branch, one PR, one review boundary. Parallel work got much safer — but the real key was isolation plus sequencing. If PR A lands first, B and C have to pull the latest before continuing, or an agent keeps building on stale code and quietly undoes what already shipped.

Scoping didn't disappear — it got more important. "Add a status filter to the project list and update the API query" is a good agent-sized task. "Improve the dashboard" is not. The model executes; the human still defines the unit of work.

> Agents got more useful once the repo got harder for them to damage.`,
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
      body: `Eventually I got tired of coordinating the same sequence by hand: scope, branch, run, PR, review, fix, update dependent PRs, continue.

So I built a skill — not to make the agent autonomous, but to encode the process I was already running manually. That distinction matters. Most people try to make the agent smarter; I wanted the workflow safer and more repeatable. The skill enforced the sequence — isolate, build, review, update dependent PRs, merge — while scoping stayed my job.

It cut the "AI overwrote my work" problem, because the workflow stopped letting agents act on stale assumptions.

> Agentic engineering isn't just prompting. It's turning engineering judgment into reusable workflows.`,
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

An agent opens a PR. Another reviews it. The first fixes the findings. Repeat until clean. In my case: open the PR, comment \`@codex review\`, apply the notes, push, ask again — until there's nothing left.

This changed AI's role: not just writing code, but doing quality control. I didn't stop reviewing — my review just started higher up, on architecture and intent instead of obvious nits. The loop moves defects earlier: missing tests, inconsistent patterns, dead code. It also misses things — it can approve something locally correct but globally wrong. So it's not a replacement for review; it's a pre-review accelerator that gets the PR into shape before a human does the final inspection.

I scaled this both ways. Vertically, the loop went deeper — more passes until a PR was genuinely clean. Horizontally, I ran reviewers in parallel, each with its own lens, so a change got looked at from several angles before I ever saw it.

> The agent can write, review, and fix. The human still owns judgment.`,
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
      body: `At some point I got serious about local inference — not for cost. Frontier APIs were often cheaper per token than running my own. The reason was control.

If I hit rate limits, I wanted a fallback. If a workflow touched bank details, credentials, or private planning, I didn't want it leaving my machine. So I built a 128 GB workstation for less than a comparable Mac Studio, then experimented: Gemma orchestrating, Qwen routing and chatting, task personas spinning up and down, Discord as the interface. One chat model and one orchestrator stayed on; everything else was task-dependent.

That opened a different category of work — local planning, routing, productivity around private context. Not a replacement for frontier models, but a private layer for the work that belonged at home. The question, again, wasn't "which model wins?" but "which model belongs where?"`,
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
      body: `The next shift was loop engineering.

Prompt engineering asks the model for a good answer. Loop engineering builds a system that keeps working toward an objective: plan, act, check, repair, retry, review, stop.

A good loop isn't "run the model again." It has structure — a clear objective, scoped permissions, observable state, failure detection, repair, stop conditions, traceability. I'd avoided it for a while: token burn, runaway agents, loops that turn unreadable. But once the tooling made loops composable and traceable, it became practical.

> A model can produce an answer.
> A loop can produce progress.

That's much closer to how real engineering works — build, test, find the problem, adjust, review, merge, learn. Agentic engineering gets powerful when the workflow mirrors that.

Loops are where the two axes finally meet. Every earlier lesson — scoped work, parallel lanes, the architect/builder split, review that runs both ways — doesn't get replaced; it gets folded in. The loop is the one workflow that carries all of it.`,
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
      body: `One thing that came out of all this is \`gmwyd\`.

It's not the center of the story — it's an artifact of the process. After Claude for planning, Codex for implementation, worktrees for isolation, PRs for review, and loops for iteration, I wanted a cleaner way to compose those pieces. Not another chatbot — a way to collapse the repeated coordination: scope, branch, run, PR, review, apply, update dependent branches, continue.

The larger idea matters more than the tool: good agentic engineering comes from composing planning, execution, review, repair, and merge discipline into one system. The best agentic tools won't just open a chat window — they'll encode engineering process: branches, PRs, review loops, test gates, when to ask, when to stop.

> The tool is one expression of the workflow. The workflow is the real lesson.`,
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
      body: `Frontend iteration is where agentic engineering gets interesting, because so many problems are visual. Spacing is off. Hierarchy is unclear. It works, but it doesn't look right. That's slow to describe and fast to show.

A screenshot gives the agent the missing context: here's the current state, here's the target, reason from the difference. The loop tightens — edit, run, screenshot, compare, fix — until it looks right.

Frontend work isn't just code; it's a rendered experience. A component can pass tests and still feel broken. Screenshots make visual feedback part of the loop, and that's the same pattern again:

> The value isn't one perfect prompt. It's a loop that can see the result and improve it.`,
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
      body: `I don't think agentic engineering removes the engineer. It moves where judgment lives — less typing every line, more deciding what to build, how to scope it, which agent does it, which gates must pass, when to stop, and what should never be automated.

The engineer becomes a system designer for engineering workflows. The future isn't one giant autonomous agent that does everything perfectly. It's composed systems: specialized agents, local and cloud routing, isolated worktrees, review loops, test gates, memory, rollback, traceability, and human approval at the right points.

That's what I mean by agentic engineering — not vibe coding, not prompt tricks, but software engineering fundamentals applied to AI-native development.

> The most leverage won't go to people who blindly trust AI. It'll go to the ones who design the system around it.`,
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
      body: `The biggest lesson from all of it: agentic engineering isn't mainly about making AI more autonomous. It's about making AI useful inside a disciplined system.

The model matters — but the workflow matters more than people think. A strong model in a weak process can wreck a repo fast. A weaker model in a good process still does useful work.

So I keep coming back to the same moves: scope the work, isolate the branch, review the diff, run the checks, update dependent PRs, control the loop, and keep human judgment where it belongs.

> Agentic engineering isn't the absence of software engineering discipline. It's what happens when that discipline becomes the container for AI-driven work.`,
    },
  ],
};
