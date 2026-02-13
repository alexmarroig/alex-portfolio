# Alex de Freitas Marroig — Portfolio

Technical PM | Systems Integrator | QA-minded Builder

This portfolio is built with Next.js App Router and styled as an interactive resume experience inspired by cinematic, high-contrast technical portfolios.

## What changed in the redesign

- Refined **Hero** introduction with subtle parallax tilt, clear positioning statement, and direct CTA.
- Reworked **Current Focus** into responsive cards with icon-led themes:
  - LLM Reasoning + ChatOps
  - Systems Architecture
  - GenAI in Production
- Expanded **Core Stack** into icon-backed rounded badges across frameworks, languages, data, and cloud tooling.
- Improved **Selected Work** flip cards (desktop hover + mobile tap + keyboard support) with polished case-study backs.
- Upgraded **How I Think** narrative with stronger philosophy and delivery context.
- Strengthened **Contact / CTA** with availability language and service focus.
- Updated footer with social icons, 2026 copyright, and version tag.

## Local development

```bash
npm install
npm run dev
```

## Routes

- `/` home (hero, current focus, core stack, selected work, about, contact CTA)
- `/case/ethos`
- `/case/cryptoalert`
- `/project/ai-ops-assistant`
- `/about`
- `/contact`
- `/api/proxy/[...path]`

## Validation scripts

```bash
npm run lint
npm run typecheck
npm run build
```

## Tech notes

- App Router structure with `app/layout.tsx` + `app/page.tsx`
- Framer Motion reveal/interaction effects
- Accessible card interactions (hover, tap, keyboard)
- Dark theme gradients and glow accents for visual hierarchy
