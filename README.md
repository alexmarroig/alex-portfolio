# Alex Portfolio (Next.js + TypeScript + Tailwind)

A recruiter-friendly portfolio app with a dark, tech-inspired interface built using the Next.js App Router.

## Run locally in Codespaces

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the forwarded port (usually `3000`) in Codespaces.

## Deploy on Vercel from GitHub

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import this GitHub repo.
3. Keep default Next.js build settings.
4. Deploy.
5. Optional: add a custom domain in Vercel project settings.

## Update app/case data

- Edit `src/data/apps.ts` to update app cards shown on `/apps`.
- Edit `src/data/cases.ts` to update case studies shown on `/cases`.

## Included routes

- `/` Home
- `/apps`
- `/lab`
- `/lab/ecommerce`
- `/lab/scheduler`
- `/lab/inbox`
- `/lab/metrics-dashboard`
- `/cases`
- `/resume`
- `/contact`
