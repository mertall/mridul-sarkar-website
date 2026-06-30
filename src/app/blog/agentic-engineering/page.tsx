import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Architecture from "@/components/Architecture";
import { agenticEngineering as series } from "@/blog";
import { hero } from "@/content";

export const metadata: Metadata = {
  title: `${series.title} — ${hero.name}`,
  description: series.description,
  openGraph: {
    title: `${series.title} — ${hero.name}`,
    description: series.description,
    url: `https://mridul-sarkar.com/blog/${series.slug}`,
    type: "article",
  },
};

// Inline `code` → <code>. Splits on backtick pairs; odd segments are code.
function inline(text: string) {
  return text.split("`").map((part, i) =>
    i % 2 === 1 ? (
      <code
        key={i}
        className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-2"
      >
        {part}
      </code>
    ) : (
      part
    )
  );
}

// Blank lines separate blocks. A block is rendered as: a bullet list ("* "/"• "),
// a pull-quote ("> "), or a paragraph (internal newlines preserved).
function renderBody(body: string) {
  return body.split(/\n{2,}/).map((block, i) => {
    const lines = block.split("\n");

    if (lines.every((l) => l.startsWith("> "))) {
      return (
        <blockquote
          key={i}
          className="my-6 border-l-2 border-accent pl-5 text-xl font-medium leading-snug text-fg"
        >
          {lines.map((l, j) => (
            <span key={j} className="block">
              {inline(l.slice(2))}
            </span>
          ))}
        </blockquote>
      );
    }

    if (lines.every((l) => l.startsWith("* ") || l.startsWith("• "))) {
      return (
        <ul key={i} className="my-4 list-disc space-y-1 pl-6 text-muted">
          {lines.map((l, j) => (
            <li key={j}>{inline(l.slice(2))}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="my-4 whitespace-pre-line leading-relaxed text-muted">
        {inline(block)}
      </p>
    );
  });
}

export default function AgenticEngineering() {
  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <Link
          href="/"
          className="font-mono text-sm text-accent transition-colors hover:text-accent-2"
        >
          ← back
        </Link>

        <header className="mt-8">
          <p className="font-mono text-sm text-accent-2">Series</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {series.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {series.description}
          </p>
        </header>

        <nav
          aria-label="Contents"
          className="mt-8 rounded-xl border border-border bg-surface px-5 py-4"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Contents
          </p>
          <ol className="mt-3 space-y-1.5">
            {series.sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex gap-3 text-sm text-fg transition-colors hover:text-accent"
                >
                  <span className="font-mono text-muted group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s.tocLabel}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {series.sections.map((s, i) => (
          <section key={s.id} className="mt-14 border-t border-border pt-12">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2
                id={s.id}
                className="scroll-mt-20 text-2xl font-semibold tracking-tight text-fg"
              >
                {inline(s.heading)}
              </h2>
            </div>
            <div className="mt-4">{renderBody(s.body)}</div>
            {s.diagram && (
              <Architecture
                chart={s.diagram}
                id={`blog-${s.id}`}
                title={s.diagramLabel}
                label="Diagram"
              />
            )}
          </section>
        ))}
      </article>
      <Footer />
    </>
  );
}
