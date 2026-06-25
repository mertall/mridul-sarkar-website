import { hero, socials } from "@/content";

export default function Footer() {
  const links = [
    { label: "Email", href: `mailto:${socials.email}` },
    { label: "GitHub", href: socials.github },
    { label: "LinkedIn", href: socials.linkedin },
    { label: "Résumé", href: socials.resume },
    { label: "Multimodal Works", href: socials.consultancy },
  ];
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{hero.name}</p>
          <p className="text-sm text-muted">
            {hero.tagline} · {hero.location}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Contact and links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
