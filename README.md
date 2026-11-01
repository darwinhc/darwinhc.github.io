# darwinhc.github.io

Source of [darwinhc.github.io](https://darwinhc.github.io), the portfolio of Darwin Herrera, Senior Backend Engineer.

It presents two case studies with their backend architecture, the open-source library bisslog, a CV and articles on backend architecture.

## Stack

- [Astro](https://astro.build) static site, no client-side framework
- Content collections for the articles in `src/content`
- Images optimised at build time with `astro:assets`
- Self-hosted fonts: Schibsted Grotesk and Fragment Mono
- Technology logos from [Simple Icons](https://simpleicons.org) and symbols from [Lucide](https://lucide.dev)
- Deployed to GitHub Pages by `.github/workflows/pages-deploy.yml` on every push to `main`

## Run locally

```bash
npm ci
npm run dev
```

`npm run build` type-checks the project and writes the static site to `dist/`.

## Structure

```text
src/
  components/   Header, footer, contact band, architecture diagram, icons
  content/      Articles (posts and bisslog), Markdown
  data/         Site details, experience, bisslog packages
  layouts/      Base page layout
  pages/        Home, case studies, CV, bisslog, writing, articles
  styles/       Design tokens and shared styles
public/         Static files served as they are
```

Older URLs keep working: articles keep their permalinks, and `/about`, `/categories`, `/tags` and `/archives` redirect to their new places.
