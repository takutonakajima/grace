# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint (Next.js core-web-vitals + TypeScript rules)
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** — configuration lives entirely in `src/app/globals.css` via `@theme inline {}` (no `tailwind.config.*` file)
- **shadcn/ui** (style: `base-nova`) — components are installed into `src/components/ui/` via `npx shadcn add <component>`
- **Framer Motion** for all animations
- **`@base-ui/react`** as the underlying headless primitive library (shadcn uses it instead of Radix in this version)
- Path alias `@/*` maps to `src/*`

## Architecture

This is a static marketing site for **Glow Life Aesthetics & Wellness** (a med spa). There is no backend, database, or auth.

### Page structure

Each route (`/`, `/services`, `/about`, `/contact`) renders `<Navigation />` + page content + `<Footer />`. The home page (`src/app/page.tsx`) is a server component that composes section components. The inner pages (`/services`, `/contact`) are `"use client"` because they use local state (category filter, form).

### Data

`src/lib/services-data.ts` is the single source of truth for all service content. It exports the `Service` interface, `services` array, and `categories` array. Both `src/app/services/page.tsx` and `src/components/sections/featured-services.tsx` import from it.

### Styling conventions

- Brand palette tokens (`--ivory`, `--blush`, `--gold`, `--warm-dark`, etc.) are defined as CSS custom properties in `:root` inside `globals.css` and re-exported into the Tailwind theme as `--color-ivory`, `--color-blush`, etc. Use `bg-ivory`, `text-gold`, `bg-blush` etc. in JSX.
- Body text uses `font-sans` (DM Sans); headings use `font-serif` / `font-heading` (Cormorant Garamond). Apply `font-serif` to display headings.
- All inline `font-family` overrides in existing components should be replaced with the CSS variable (`var(--font-cormorant)`) or Tailwind token.

### Booking integration

All "Book Now" / "Book a Consultation" CTAs link to the constant `MANGOMINT_URL` (`https://www.mangomint.com/`) defined at the top of each file that needs it. When adding new CTAs, import or redeclare this constant — do not hardcode the URL inline.

### Navigation behavior

`src/components/navigation.tsx` is `"use client"`. It transitions from transparent/white text (on the home page hero) to an ivory background with dark text after 60 px of scroll, detected via a `scroll` listener.
