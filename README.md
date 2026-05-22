# ericknavarro97.github.io

Personal portfolio of **Erick Navarro** — Full-Stack Developer.

Live: https://ericknavarro97.github.io

## Stack

- React 19 + TypeScript 5.7
- Vite 7
- Tailwind CSS v4 + shadcn/ui design tokens
- Bilingual: Spanish / English (toggle)
- Light / Dark theme
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview production build
```

## Deploy

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the site and publishes to GitHub Pages.

> One-time setup: GitHub repo → **Settings → Pages → Source: GitHub Actions**.

## Structure

```
src/
  components/
    sections/          # Hero, About, Stack, Projects, Experience, Contact
    Navbar.tsx
    Footer.tsx
    SectionHeader.tsx
  data/
    content.ts         # All localized UI strings
    projects.ts        # Project entries
  lib/
    i18n.tsx           # ES/EN context
    theme.tsx          # dark/light context
    utils.ts           # cn() helper
  App.tsx
  main.tsx
  index.css            # Tailwind v4 + design tokens
```
