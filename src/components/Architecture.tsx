"use client";

import { useEffect, useRef, useState } from "react";

// Inline architecture diagram — the visual for a timeline node. Mermaid is dynamically
// imported and rendered the first time the diagram scrolls near the viewport (lazy),
// so all diagrams don't render on initial load.
let initialized = false;
let counter = 0;

export default function Architecture({ chart, id }: { chart: string; id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || rendered) return;
    let cancelled = false;
    (async () => {
      const mermaid = (await import("mermaid")).default;
      if (!initialized) {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "dark",
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          themeVariables: { fontSize: "15px" },
          // Render at natural size (the container scrolls) instead of shrinking
          // wide diagrams to fit — otherwise the text becomes unreadable.
          flowchart: { useMaxWidth: false, padding: 14, nodeSpacing: 40, rankSpacing: 55 },
        });
        initialized = true;
      }
      try {
        const { svg } = await mermaid.render(`mm-${id}-${++counter}`, chart);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
          setRendered(true);
        }
      } catch {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = `<pre class="whitespace-pre-wrap text-xs text-muted">${chart.replace(
            /</g,
            "&lt;"
          )}</pre>`;
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [inView, rendered, chart, id]);

  return (
    <figure className="mt-5 rounded-xl border border-border bg-bg/40 p-4">
      <figcaption className="mb-3 font-mono text-xs text-accent">Architecture</figcaption>
      <div ref={ref} className="mermaid-diagram min-h-8 overflow-x-auto" />
    </figure>
  );
}
