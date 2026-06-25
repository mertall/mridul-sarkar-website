"use client";

import { timeline, type TimelineEntry } from "@/content";
import Reveal from "./Reveal";
import { useHighlight } from "./HighlightContext";

const KIND_COLOR: Record<TimelineEntry["kind"], string> = {
  role: "var(--color-accent)",
  project: "var(--color-accent-2)",
  education: "#b794ff",
};

const experience = timeline.filter(
  (e) => e.kind === "role" || e.kind === "education"
);

// Compact career timeline (sticky aside). The entry lining up with the in-view
// project highlights via the shared scrollspy state.
export default function Experience() {
  const { active } = useHighlight();

  return (
    <aside aria-label="Experience" className="order-2 self-start lg:order-1 lg:sticky lg:top-8">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Experience
      </h2>
      <ol className="relative">
        <div
          className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-accent/60 to-accent-2/30"
          aria-hidden
        />
        {experience.map((e) => {
          const isActive = active === e.id;
          return (
            <li key={e.id} className="relative pb-7 pl-6 last:pb-0">
              <span
                className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg transition-transform"
                style={{
                  background: KIND_COLOR[e.kind],
                  transform: isActive ? "scale(1.4)" : undefined,
                  boxShadow: isActive ? `0 0 0 3px ${KIND_COLOR[e.kind]}44` : undefined,
                }}
                aria-hidden
              />
              <Reveal>
                <div
                  className={`-ml-2 rounded-lg py-1 pl-2 transition-colors ${
                    isActive ? "bg-surface" : ""
                  }`}
                >
                  <p
                    className={`font-mono text-[11px] ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {e.period}
                  </p>
                  <h3
                    className={`mt-0.5 text-sm font-semibold leading-snug transition-colors ${
                      isActive ? "text-fg" : "text-fg/90"
                    }`}
                  >
                    {e.title}
                  </h3>
                  <p className="text-xs text-accent-2">{e.org}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{e.summary}</p>
                  {e.points && (
                    <ul className="mt-1.5 space-y-0.5">
                      {e.points.map((p, i) => (
                        <li key={i} className="text-[11px] leading-snug text-muted">
                          · {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
