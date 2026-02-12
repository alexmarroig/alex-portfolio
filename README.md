# Alex de Freitas Marroig — Portfolio

Technical Project Manager | Technical PM | Systems Integrator | QA-minded Builder

Built with Next.js (App Router) and deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

## Routes

- `/` home (hero, current focus, core stack, selected work, about, contract CTA)
- `/case/ethos`
- `/case/cryptoalert`
- `/project/ai-ops-assistant`
- `/about`
- `/contact`
- `/api/proxy/[...path]` optional server-side proxy to external backend

## Vercel environment variables

Set these in **Project Settings → Environment Variables**:

- `API_BASE_URL` (recommended, server-side)
- `NEXT_PUBLIC_API_BASE_URL` (optional fallback)

If set, requests to `/api/proxy/<path>` are forwarded to `<API_BASE_URL>/<path>` with query params preserved.

### Example

`GET /api/proxy/v1/health` → `GET ${API_BASE_URL}/v1/health`

## Styling architecture

- Global styles: `app/globals.css`
- Design tokens: `styles/tokens.css`
- Section components: `components/sections/*`
- Shared UI primitives: `components/ui/*`

## Notes

- Motion and hover interactions respect `prefers-reduced-motion`.
- Hero tilt disables naturally on coarse pointer devices (mobile/touch).
- Core SEO metadata lives in `app/layout.tsx`.
