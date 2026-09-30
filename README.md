# Good Guess

A static gift finder with 72 fixed editorial ideas. The live quiz uses local matching rules, never an AI model. It starts with budget and recipient, asks about age and interests, and returns three ranked ideas with more available when the budget permits.

## Edit recommendations

Edit `dist/catalog.js`. Each row contains: name, planning budget tier, gift style, description, buying check, and search terms. Tiers 1–4 mean planning maxima of $25, $50, $100, and $200. These are editorial estimates for product types, not verified prices. The catalog currently covers ages 13+; `minAge` is an eligibility field for later additions.

The `listings` map at the end of `dist/catalog.js` holds three checked Amazon product ASINs. Add reviewed listings there; other gifts use clearly labeled searches. Set `config.affiliateTag` to your own approved Associates tracking ID to tag both direct and search links and activate the disclosure. See `AMAZON_SETUP.md` for the application checklist.

Review real listings, prices, availability, compatibility, image permissions, and Amazon's current rules before a commercial launch. The Stormlight Archive character model is an unverified concept, not a promise that a licensed item is available on Amazon. Photos and reviews from Amazon are not copied here.

## Run locally

From this directory: `python -m http.server 5173 --bind 127.0.0.1 --directory dist`, then visit `http://127.0.0.1:5173`.

## Files

- `dist/index.html`: page structure and metadata
- `dist/style.css`: responsive presentation
- `dist/app.js`: questionnaire, matching, and catalog view
- `dist/catalog.js`: editable fixed recommendation data
- `dist/assets/gift.jpg`: Unsplash photo by Katya Azimova
- `.openai/hosting.json`: existing Site identity and static configuration

Quiz answers are held only in page memory. There is no analytics service, account system, email collection, or runtime AI dependency. Amazon tracking ID bestguess0f-20 is configured on both direct and search links, with the affiliate disclosure enabled. The owner manages account eligibility, website registration, tax, and payment setup in Associates Central. Earned revenue and traffic measurement are next-stage launch work.

Photo source: https://unsplash.com/photos/a-wooden-table-topped-with-a-wrapped-present-jorPYgT6V10 (Unsplash License).

Catalog inspiration checked against original retailer pages: Barnes & Noble's book-lover gifts, REI's gifts under $25, and LEGO's Botanical collection. These support product categories, not verification of all 72 Amazon listings or price bands.

Two sidebar ad placeholders are identified by `data-ad-slot` in `dist/index.html`. They are not active ads. The square responsive layout places them below the quiz on mobile. No ad network script or tracking has been added.
