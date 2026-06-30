import { Fragment, type ReactNode } from "react";
import type { Visual, VisualPanel } from "@/blog";

// Conceptual, non-technical visuals woven into the prose. Plain HTML — no Mermaid,
// no expand chrome — so they read as part of the writing, not an engineering exhibit.

function Caption({ children }: { children: ReactNode }) {
  return <figcaption className="mt-3 text-center text-sm italic text-muted">{children}</figcaption>;
}

function Steps({
  steps,
  loop,
  loopLabel,
  caption,
}: {
  steps: string[];
  loop?: boolean;
  loopLabel?: string;
  caption?: string;
}) {
  return (
    <figure className="my-7">
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 rounded-2xl bg-surface/40 px-4 py-5">
        {steps.map((s, i) => (
          <Fragment key={i}>
            <span className="rounded-full border border-border bg-bg/50 px-3.5 py-1.5 text-sm text-fg">
              {s}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden className="text-accent">
                →
              </span>
            )}
          </Fragment>
        ))}
        {loop && (
          <span className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-accent-2/40 px-3 py-1.5 text-sm text-accent-2">
            <span aria-hidden>↻</span>
            {loopLabel ?? "repeat"}
          </span>
        )}
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

function Panel({ p }: { p: VisualPanel }) {
  const titleColor = p.tone === "good" ? "text-accent-2" : "text-muted";
  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-5">
      <p className={`text-sm font-semibold ${titleColor}`}>{p.title}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-muted">
        {p.items.map((it) => (
          <li key={it} className="flex gap-2">
            <span aria-hidden className="text-muted">
              ·
            </span>
            {it}
          </li>
        ))}
      </ul>
      {p.outcome && (
        <p className="mt-4 border-t border-border pt-3 text-sm font-medium text-fg">
          → {p.outcome}
        </p>
      )}
    </div>
  );
}

function Split({
  left,
  right,
  caption,
}: {
  left: VisualPanel;
  right: VisualPanel;
  caption?: string;
}) {
  return (
    <figure className="my-7">
      <div className="grid gap-3 sm:grid-cols-2">
        <Panel p={left} />
        <Panel p={right} />
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

function Frame({
  chips,
  inner,
  caption,
}: {
  chips: string[];
  inner: string;
  caption?: string;
}) {
  return (
    <figure className="my-7">
      <div className="rounded-2xl border border-border bg-surface/40 p-5">
        <div className="flex flex-wrap justify-center gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <span className="rounded-xl border border-accent/40 bg-bg/50 px-5 py-2.5 text-sm font-medium text-fg">
            {inner}
          </span>
        </div>
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

export default function BlogVisual({ visual }: { visual: Visual }) {
  switch (visual.kind) {
    case "steps":
      return <Steps {...visual} />;
    case "split":
      return <Split {...visual} />;
    case "frame":
      return <Frame {...visual} />;
  }
}
