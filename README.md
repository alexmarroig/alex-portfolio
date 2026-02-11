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
## Vercel domain verification checklist

If a domain is not serving this portfolio correctly, use this checklist in the Vercel Dashboard:

1. Open the correct project in Vercel.
2. Go to **Settings → Domains**.
3. Confirm each domain in the list is assigned to this exact project.
4. For each domain, validate that the target environment is **Production** for this project (not another project/team).
5. If a domain is attached to the wrong project:
   - Remove it from the incorrect project.
   - Add it again in this project’s **Settings → Domains**.
6. Wait for DNS/assignment propagation.
7. After the latest deployment is **Ready**, test the domain in browser and confirm it resolves to this portfolio.

### Optional CLI checks

After linking the repository to the right Vercel project, you can run:

```bash
vercel project ls
vercel domains ls
```

These commands help confirm which project and domains are currently associated in your Vercel account.
