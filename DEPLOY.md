# Deploy — Quest Professional Services

General playbook: `~/Scale Kit - Visual Studio Code/SOP-astro-cloudflare-deploy.md`

- **Repo:** https://github.com/scalekitbrandon/Quest-Professional-Services (branch `main`; every push auto-redeploys)
- **Hosting:** Cloudflare Workers & Pages, static build, no adapter
  - Framework preset: Astro · Build command: `npm run build` · Output directory: `dist`
  - Cloudflare project name: _(fill in after connecting)_
- **Domain:** questprofessionalllc.com, bare domain is primary (`site` in astro.config.mjs), matching Brandon's other sites. `www` redirects to the bare domain via a Cloudflare Redirect Rule + proxied `www` DNS record; www is NOT attached to the Worker. Registrar: **Wix** (domain stays registered there; only nameservers move to Cloudflare).
- **Before cutover (checked 2026-10-15):** DNS hosted on Wix (ns8/ns9.wixdns.net); old Wix site on root A 185.230.63.x + www CNAME to wixdns. No other subdomains. No DKIM or DMARC set up.
- **⚠ Email lives on this domain (Google Workspace):** keep these exactly:
  - MX: 1 aspmx.l.google.com (10), alt1 (20), alt2 (30), alt3 (40), alt4 (50) — all `.aspmx.l.google.com`
  - TXT @: `v=spf1 include:_spf.google.com ~all`
  - TXT @: `google-site-verification=QsdY1xcS8wuXrtNF6Cx07iJNSrOxF7UuhS6Wb82614U`
  Only the root A records and the `www` CNAME (old Wix site) get removed.
- **Old Wix URLs:** 301s in `public/_redirects` (services, google-reviews, request-a-quote, file-share, 5 /service-page/* URLs).
- **Lead form:** GoHighLevel form "Quest Professional - Website Form" (id `4JNqjaJ1zjAqSjhUPtz6`), component `src/components/GhlForm.astro`.
- **Google reviews link:** https://share.google/bvBQAcf3ILz2sn0ki (`site.googleReviewsUrl`).
