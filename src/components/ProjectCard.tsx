"use client";

import { useEffect, useRef } from "react";
import type { TimelineEntry } from "@/content";
import Reveal from "./Reveal";
import Architecture from "./Architecture";
import { useHighlight } from "./HighlightContext";

function labelColor(label?: string) {
  return label === "Application" || label === "Deployed Solution"
    ? "var(--color-accent)"
    : "var(--color-accent-2)";
}

export default function ProjectCard({
  entry,
  roleId,
}: {
  entry: TimelineEntry;
  roleId?: string;
}) {
  const { setActive } = useHighlight();
  const ref = useRef<HTMLElement>(null);

  // Scrollspy: when this card crosses the vertical center band, mark its role active.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Apps/deployed solutions highlight their role; everything else clears it.
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(roleId ?? null);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [roleId, setActive]);

  return (
    <Reveal>
      <article
        ref={ref}
        className="rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-sm sm:p-6"
      >
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          {entry.label && (
            <span
              className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px]"
              style={{ color: labelColor(entry.label) }}
            >
              {entry.label}
            </span>
          )}
          <span className="font-mono text-xs text-muted">{entry.period}</span>
        </div>

        <h3 className="text-lg font-semibold tracking-tight">{entry.title}</h3>
        <p className="mt-1 text-sm text-accent-2">{entry.org}</p>

        <p className="mt-4 text-[15px] leading-relaxed text-muted">{entry.summary}</p>

        {entry.diagram && <Architecture chart={entry.diagram} id={entry.id} />}

        {entry.tags && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {entry.tags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {entry.links && (
          <div className="mt-5 flex flex-wrap gap-4">
            {entry.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  );
}
