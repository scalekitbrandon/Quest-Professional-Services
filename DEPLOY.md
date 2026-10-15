# Deploy — Quest Professional Services

General playbook: `~/Scale Kit - Visual Studio Code/SOP-astro-cloudflare-deploy.md`

- **Repo:** https://github.com/scalekitbrandon/Quest-Professional-Services (branch `main`; every push auto-redeploys)
- **Hosting:** Cloudflare Workers & Pages, static build, no adapter
  - Framework preset: Astro · Build command: `npm run build` · Output directory: `dist`
  - Cloudflare project name: _(fill in after connecting)_
- **Domain:** www.questprofessionalllc.com (`site` in astro.config.mjs). Registrar: _(fill in)_
- **⚠ Email lives on this domain:** info@questprofessionalllc.com. When importing DNS into Cloudflare, keep every MX and email TXT record (SPF/DKIM/DMARC) exactly as scanned. Only the root/`www` A or CNAME records change.
- **Lead form:** GoHighLevel form "Quest Professional - Website Form" (id `4JNqjaJ1zjAqSjhUPtz6`), component `src/components/GhlForm.astro`.
- **Google reviews link:** https://share.google/bvBQAcf3ILz2sn0ki (`site.googleReviewsUrl`).
