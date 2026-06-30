"use client";

import { useEffect, useRef, useState } from "react";

// Inline architecture diagram: a fit-to-width preview that expands to a full-screen,
// pannable view at natural size (readable on mobile). Mermaid is dynamically imported
// and the preview renders lazily when it scrolls near the viewport.
let initialized = false;
let counter = 0;

async function getMermaid() {
  const mermaid = (await import("mermaid")).default;
  if (!initialized) {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "dark",
      fontFamily: "var(--font-mono), ui-monospace, monospace",
      themeVariables: { fontSize: "15px" },
      flowchart: { useMaxWidth: false, padding: 14, nodeSpacing: 40, rankSpacing: 55 },
    });
    initialized = true;
  }
  return mermaid;
}

export default function Architecture({
  chart,
  id,
  title,
  label = "Architecture",
}: {
  chart: string;
  id: string;
  title?: string;
  /** Caption shown on the figure, e.g. "Architecture" or "Diagram". */
  label?: string;
}) {
  const previewRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [inView, setInView] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [zoomRendered, setZoomRendered] = useState(false);

  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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
      const mermaid = await getMermaid();
      try {
        const { svg } = await mermaid.render(`mm-${id}-${++counter}`, chart);
        if (!cancelled && previewRef.current) {
          previewRef.current.innerHTML = svg;
          setRendered(true);
        }
      } catch {
        if (!cancelled && previewRef.current) {
          previewRef.current.innerHTML = `<pre class="whitespace-pre-wrap text-xs text-muted">${chart.replace(
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

  async function openZoom() {
    if (!zoomRendered) {
      try {
        const mermaid = await getMermaid();
        const { svg } = await mermaid.render(`mmz-${id}-${++counter}`, chart);
        if (zoomRef.current) {
          zoomRef.current.innerHTML = svg;
          setZoomRendered(true);
        }
      } catch {
        /* preview fallback already shown */
      }
    }
    dialogRef.current?.showModal();
  }

  return (
    <figure className="mt-5 rounded-xl border border-border bg-bg/40 p-4">
      <figcaption className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs text-accent">{label}</span>
        <button
          type="button"
          onClick={openZoom}
          aria-label="Expand architecture diagram"
          className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-fg"
        >
          Expand ⤢
        </button>
      </figcaption>

      <button
        type="button"
        onClick={openZoom}
        aria-label="Expand architecture diagram"
        className="block w-full cursor-zoom-in text-left"
      >
        <div ref={previewRef} className="arch-inline" />
      </button>

      <dialog ref={dialogRef} className="arch-dialog">
        <div className="arch-dialog-inner">
          <div className="arch-dialog-bar">
            <span className="font-mono text-xs text-accent">
              {title ?? label}
            </span>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close diagram"
              className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-fg"
            >
              Close ✕
            </button>
          </div>
          <div ref={zoomRef} className="arch-zoom" />
        </div>
      </dialog>
    </figure>
  );
}
