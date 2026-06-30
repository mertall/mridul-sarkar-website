import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
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

// Blank lines separate blocks. A block whose lines all start with "• " is a list;
// otherwise it's a paragraph (internal newlines preserved via whitespace-pre-line).
function renderBody(body: string) {
  return body.split(/\n{2,}/).map((block, i) => {
    const lines = block.split("\n");
    if (lines.every((l) => l.startsWith("• "))) {
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

        <header className="mt-8 border-b border-border pb-8">
          <p className="font-mono text-sm text-accent-2">Series</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {series.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {series.description}
          </p>
        </header>

        {series.posts.map((post) => (
          <section
            key={post.title}
            className="mt-12 border-t border-border pt-12 first:border-t-0"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-fg">
              {inline(post.title)}
            </h2>
            <div className="mt-4">{renderBody(post.body)}</div>
          </section>
        ))}
      </article>
      <Footer />
    </>
  );
}
