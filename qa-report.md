# QA Report — Quest Professional Services

Date: 2026-10-15

- Ready to deploy: YES
- Deploy-isolation check: PASS (clean copy with no sibling folders: `npm ci` + `npm run build` → 32 pages)
- `astro check`: 0 errors, 0 warnings, 0 hints
- Pages: 32, all in sitemap; robots.txt points to https://www.questprofessionalllc.com/sitemap-index.xml
- Canonicals: https://www.questprofessionalllc.com/… on every page
- Internal links: 0 broken
- Titles / meta descriptions: no duplicates; all descriptions ≤ 160 chars
- H1: exactly one per page
- JSON-LD: valid on every page (BreadcrumbList, Service, FAQPage, LocalBusiness w/ USDOT + MC identifiers)
- Images: all have alt text; WebP, EXIF stripped
- Copy rules: no "move/moving/movers" or "junk" in site copy (customer reviews kept verbatim — client's call)

## Not verifiable here
- GHL form (id 4JNqjaJ1zjAqSjhUPtz6): embedded on all 32 pages with form_embed.js, but the headless test browser can't finish loading GHL forms. Verify in a real browser on the live URL and submit a test lead.

## Known, accepted
- 29 of 32 titles exceed ~65 chars (brand suffix truncates in SERPs; keyword is first).
