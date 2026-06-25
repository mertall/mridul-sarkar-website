# mridul-sarkar.com

Personal showcase site for Mridul Sarkar — a single, scrollable, animated career
timeline. Built with Next.js (App Router) + Tailwind v4, configured for static
export so it hosts free on Vercel or GitHub Pages.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Editing content

All copy lives in **`src/content.ts`** — `hero`, `socials`, and the `timeline`
array (newest first). Add/edit a timeline node there; the UI maps over it, no JSX
changes needed.

- **Email / links:** edit `socials`. The contact email defaults to
  `mridulsarkarbiz@gmail.com` — swap if you prefer another.
- **Project dates** (VisionSearch, Quantum hackathon, Spectrogram) are best-guess
  year labels — adjust the `period` fields to taste.
- **Pictures:** each role/project node renders a generated gradient placeholder.
  Drop a real image in `public/images/` and set `image: "/images/foo.png"` on that
  entry to use it.
- **Résumé:** `public/resume.pdf` (regenerate from your `.docx`, or replace with a
  designed PDF).

## Deploy

Static `out/` works on any static host.

- **Vercel:** import the repo — it detects Next.js. Add `mridul-sarkar.com` as a
  custom domain and point DNS as Vercel instructs.
- **GitHub Pages:** push `out/` (or use a Pages action), add a `CNAME` for the
  domain.

## Stack

Next.js 16 · React 19 · Tailwind v4 · TypeScript. Scroll animations use native
`IntersectionObserver` + CSS (no animation library); `prefers-reduced-motion` is
respected.
