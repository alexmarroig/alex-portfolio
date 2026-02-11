# Alex Marroig — Portfolio

AI Product Manager | Technical PM | AI-Driven SaaS

This portfolio includes:
- Private product case studies (ETHOS, CryptoAlert Pro)
- A public, neutral portfolio project (AI Ops Assistant)

## Routes
- `/` Home (headline, summary, project cards)
- `/case/ethos` Private case study
- `/case/cryptoalert` Private case study
- `/project/ai-ops-assistant` Public portfolio-only project
- `/about` Mini bio + focus areas
- `/contact` Contact links

Built with Next.js and deployed on Vercel.

## Production deploy troubleshooting (Vercel)

When a Production deploy fails due to the wrong branch/commit:

1. Open **Vercel → Project Settings → Git**.
2. Confirm **Production Branch** is `main`.
3. Open the failed deploy details and copy the deploy commit SHA.
4. Compare it against the latest expected commit from the repository:

   ```bash
   git fetch origin
   git rev-parse origin/main
   ```

5. If SHAs diverge, merge the correct branch into `main` and push:

   ```bash
   git checkout main
   git pull origin main
   git merge <correct-branch>
   git push origin main
   ```

6. In Vercel, trigger a **Redeploy** in Production.
