# Couple Better Gifts

An independent student gift finder. The live quiz matches a fixed collection of concepts; it does not generate new recommendations at runtime. Recipient age, interest, gift style, and estimated budget determine matches. There is no published full catalog or total gift-count promotion.

## Content and editing

- `dist/catalog.js`: fixed quiz gift data and five previously identity-checked Amazon listings. Planning budget tiers are not live seller prices. Keep `bestguess0f-20` as the supplied affiliate tracking ID.
- `guides.mjs`: four distinct buying guides. Technical examples cite primary sources. These are buying notes, not personally tested product reviews.
- `build-content.mjs`: generates the homepage, guides, About, Privacy, explicit 404, robots.txt, and sitemap.xml. Run `node build-content.mjs` after changing guides or layout.
- `dist/app.js`: local questionnaire and optional, dismissible instructions. Answers live only in page memory; no analytics/account database.
- `dist/style.css`: square responsive design, keyboard focus styling, and readable article layout.

Run `python -m http.server 5173 --bind 127.0.0.1 --directory dist` from this directory for local preview.

## Advertising after the policy review

Only the four complete buying guides include Google’s loader and one labeled bottom banner (`7973839221`). `ads-content.js` requests it once near the viewport while the document is visible. The quiz (including results and help), About, Privacy, and error page have no Google ad loader or ad units. They use the verification meta tag instead. `ads.txt` authorizes the supplied publisher ID.

Owner reports configuring an AdSense consent message. Confirm it is published for the real domain and applicable regions. Turn off Auto ads in AdSense to preserve the manual article-only layout. Google approval and ad fill are separate from successful code installation.

See `ADSENSE_POLICY_REVIEW.md` for the reviewed policies, evidence, implemented remedies, and account-side tasks. No universal compliance or approval guarantee is claimed. No public contact address is configured yet.

Photo: Katya Azimova / Unsplash, existing licensed gift image. Do not copy Amazon photos, merchant descriptions, ratings, or reviews without the required rights or official mechanisms. Do not invent licensing, personal testing, seller prices, inventory, author credentials, or reviews.
