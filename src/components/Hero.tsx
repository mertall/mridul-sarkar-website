import { hero, socials } from "@/content";

const cta =
  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors";

export default function Hero() {
  return (
    <header className="relative mx-auto flex min-h-[88vh] max-w-3xl flex-col justify-center px-6 py-24">
      <p className="font-mono text-sm text-accent">{hero.location}</p>

      <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
        {hero.name}
      </h1>
      <p className="mt-3 font-mono text-base text-accent-2 sm:text-lg">
        {hero.tagline}
      </p>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {hero.intro}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          className={`${cta} bg-accent text-bg hover:opacity-90`}
          href={`mailto:${socials.email}`}
        >
          Email me
        </a>
        <a
          className={`${cta} border border-border text-fg hover:bg-surface`}
          href={socials.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé (PDF)
        </a>
        <a
          className={`${cta} border border-border text-fg hover:bg-surface`}
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className={`${cta} border border-border text-fg hover:bg-surface`}
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <ul className="mt-10 flex flex-wrap gap-2" aria-label="Core skills">
        {hero.skills.map((s) => (
          <li
            key={s}
            className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
          >
            {s}
          </li>
        ))}
      </ul>

      <p className="mt-16 flex items-center gap-2 font-mono text-xs text-muted">
        <span aria-hidden>↓</span> scroll the timeline
      </p>
    </header>
  );
}
