# Alex Marroig — Interactive Resume Portfolio

Technical Project Manager | Systems Integrator | QA-minded Builder

This project is a polished Next.js App Router resume site with a dark, high-contrast visual system inspired by Justin Roden-style portfolio storytelling.

## Sections

- **Hero**
  - Updated positioning statement, gradient CTAs, and Framer Motion tilt/parallax interaction.
- **Core Stack**
  - Three columns: Frontend, Automation & AI, Dev & Ops.
  - Icon-backed pills with hover tooltips for quick stack scanning.
- **Current Focus**
  - Responsive three-card layout for Open To, Specialties, and What Sets Me Apart.
- **Selected Work**
  - Responsive flip cards with front/back case storytelling.
  - Back side includes Problem, Solution/Architecture, and Impact blocks.
  - Includes SANDECH complex industrial engineering case.
- **How I Think**
  - Available on `/about` with philosophy quote and long-form leadership narrative.
- **Footer + Floating CTA**
  - Updated 2026 branding, social links, version tag, and pulsing “Let’s Talk” mailto button.

## Add a new project / case card

1. Open `src/data/projects.tsx`.
2. Add a new object to the `projects` array with:
   - `title`, `subtitle`, `description`, `status`, `icon`, `tech`
   - `caseStudy.problem`, `caseStudy.solution`, `caseStudy.impact`
   - optional `links.github` and/or `links.live`
3. The card will render automatically in **Selected Work** via `components/sections/SelectedWorkSection.tsx`.

## Update stack groups

1. Open `src/data/coreStack.ts`.
2. Edit categories or add items under each category.
3. Changes render automatically in the **Core Stack** section.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Admin (private)

A área `/admin` exige autenticação no servidor e usa cookie `HttpOnly`.
Para configurar seu acesso, defina estas variáveis em `.env.local`:

```bash
ADMIN_EMAIL=Alex.c.marroig@gmail.com
ADMIN_PASSWORD=Bianco256
ADMIN_SESSION_SECRET=troque-por-uma-chave-longa-e-unica
```

Depois acesse:

- `/admin/login` para entrar
- `/admin` para abrir o editor por seções (estilo abas/menu)

## Admin analytics dashboard

The admin panel now includes an **Analytics** tab with:
- Pageviews and unique visitors
- Resume download count
- Top pages, sources, referrers, countries, keywords
- Basic LLM/bot user-agent detection
- Last 14 days timeline

Data is stored locally on the server filesystem at `.analytics/site-analytics.json`.

## LLM and search optimization

Added:
- `public/llms.txt`
- `app/robots.ts`
- `app/sitemap.ts`
- Rich metadata + JSON-LD schema in `app/layout.tsx`
