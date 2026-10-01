# Landscaping SEO and lead-quality changes — 1 October 2026

## Evidence and limitations

Sources: the two Google Search Console exports supplied on 1 October 2026, one filtered to the last three months and one to the last twelve months. These overlap and must not be added together. The ZIP contents were read as data only.

The three-month Pages report shows the homepage receiving 319 clicks from 20,236 impressions. Patios/paving received 1 click from 753 impressions, and landscaping received 0 clicks from 46 impressions. Garden-maintenance searches and gardener terminology are prominent in the query report. This supports changing the site's commercial positioning; it does not establish which visits became enquiries. Search Console measures search activity, not booked jobs or lead quality.

The GA4 measurement ID in the repository is empty. No analytics ID was invented and no new third-party tracking was enabled. Existing form and click-event hooks need a real configured analytics destination before they can establish conversion performance. No live test enquiry was submitted.

## Implemented

- Landscaping-focused homepage, navigation, description, service hierarchy and calls to action.
- New garden-renovations landing page; old maintenance page immediately redirects using a static-host-compatible meta refresh, has a canonical to the replacement and is excluded from the sitemap. This is not an HTTP 301; GitHub Pages does not provide custom server-side redirects.
- All sixteen area pages now introduce landscaping, patio installation and garden makeovers instead of routine gardening. Existing location coverage is retained, not expanded.
- Removed recurring/hourly maintenance offers from commercial copy and quote options. DIY maintenance articles and genuine historical customer reviews remain historical/informational content, not new service promises.
- Four installation-focused service cards and contextual internal links.
- Three individual project pages with the client's confirmed before/after pairings, plus a project index. No project addresses, budgets or durations were invented.
- A practical garden-makeover planning guide, visible quote FAQs and appropriate Service/CreativeWork/Article structured data.
- Optional project-budget and timing fields, useful photo/access/measurement prompts, and mobile form checks. Phone input no longer uses a browser-invalid pattern.
- Original interactive before/after slider retained with its original images.
- Fixed area-page image selection and gallery lightbox initial image source.
- Automated built-output audit included in the build: titles, H1 counts, descriptions, production canonicals, JSON-LD parsing, local link/image targets and sitemap checks.

## Owner-controlled next steps (not performed)

1. Review the Google Business Profile primary category against the real core business. If landscaping is now the main activity, select the most accurate available landscaping category, rather than retaining a gardening/maintenance category that no longer fits. Keep secondary categories and service listings limited to services actually offered. Category changes can require reverification.
2. Update the profile description/services to match the website. Suggested description: "Dee'z Gardens carries out landscaping, patios and paving, turf and artificial lawn installations, garden renovations and one-off garden clearances in Northampton and surrounding towns. Send garden photos and your postcode to discuss a project quote. We do not offer hourly gardening or regular mowing."
3. Add genuine completed-project photos and link project updates to the corresponding website page. Ask real customers for honest reviews without incentives or review gating.
4. In Search Console, submit the sitemap and request indexing for the homepage, landscaping, renovations, project index and new guide. Indexing/ranking cannot be forced by code changes.
5. Configure the business's actual GA4 measurement ID only after deciding on an appropriate privacy/consent setup. Track quote successes, calls and WhatsApp clicks, then separately record enquiry type and booked work. Compare equal non-overlapping reporting windows after Google recrawls, and separate branded from non-branded landscaping queries. Lower maintenance traffic can be intentional; success is qualified landscaping enquiries, not total traffic alone.

No Google Ads campaigns, ad accounts, social-media accounts or Business Profile settings were changed. Organic rankings and enquiry volume are not guaranteed.

## Official guidance

- [Google: improve local ranking](https://support.google.com/business/answer/7091?hl=en)
- [Google: choose business categories](https://support.google.com/business/answer/7249669?hl=en-GB)
- [Google: helpful, reliable content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
