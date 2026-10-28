# Affiliate programs for Couple Better Gifts

Verified against official merchant pages on **October 19, 2026**. Publicly advertised terms are subject to the agreement offered to this specific account. No applications were submitted and no approval is implied.

| Retailer | Public commission | Public referral window | Application route | Official source |
|---|---:|---|---|---|
| Bookshop.org (US, non-bookstore affiliate) | 10% | 48 hours; last-touch attribution | Direct Bookshop.org affiliate account; account verification required | [Apply](https://bookshop.org/affiliates/profile/introduction), [referral-window FAQ](https://support.bookshop.org/en/support/solutions/articles/65000191390-can-you-explain-bookshop-org-s-affiliate-program-) |
| LoveBook | Starting at 10% | 30 days | CJ / Commission Junction, through the merchant's signup link; merchant approval required | [Affiliate program](https://lovebookonline.com/affiliate/) |
| Personalization Mall | Base commission starting at 6% | Not stated on its public program page; confirm in the offered Impact contract | Impact, through the merchant's Join Now link; free to join | [Affiliate program](https://www.personalizationmall.com/StaticPage.aspx?pageID=24) |
| Miniature Market | 5% | 7 days | Apply to LinkConnector first, then apply to the Miniature Market campaign after network acceptance | [Affiliate program](https://www.miniaturemarket.com/utility/affiliate-program) |
| Lovepop | Up to 10% for content affiliates, new and repeat customers | 30 days | Impact through the merchant's Join Now link; confirm the awarded content-publisher rate | [Affiliate program](https://www.lovepop.com/pages/lovepop-affiliate-program) |

Bookshop's 30% bookstore rate is for qualified bookstores; it should not be used in this site's earnings projections. LoveBook's merchant page currently directs applications to CJ at the rate/window above. Do not assume a different offer found in another network directory applies.

## Implementation handoff

1. Apply using the published site, accurate traffic numbers, and a description of the gift quiz and buying guides. Network acceptance does not by itself mean merchant approval.
2. Keep the newly researched products linked with their **ordinary public retailer URLs** until approval and the actual account's tracking links are supplied. Those ordinary links currently earn no affiliate commission for the owner. Do not create tracking IDs, append the Amazon tag, or say these retailers have approved the site.
3. After approval, generate a product-specific deep link using that merchant/network's link tool. Preserve the complete supplied URL, including tracking parameters. Update that product's affiliate-status flag and disclosure when the real link is activated.
4. Use approved merchant creative assets. Personalization Mall advertises image and text links; LoveBook offers promotional materials and link/tracking support; Lovepop advertises a product feed. Confirm licensed images/feed access in the account before publishing product photography. Miniature Market does not publicly promise a product feed on the checked page.
5. Record retailer clicks by merchant and product ID. Outgoing clicks are not purchases or commissions. Validate purchases/returns in each merchant/network dashboard and keep the existing analytics choice respected.
6. Confirm permitted traffic sources, eligible products, attribution rules, returns/reversals, payout requirements, and any required business/tax details in the actual approved agreement. Supply public tracking URLs or approved creatives for implementation; do not send account passwords or secret API keys.

No approval dates, earnings forecasts, or merchant conversion rates have been invented.

## Additional programs researched October 28, 2026

Rates below come from third-party directories unless marked official, and directories often disagree. Confirm the offered rate in the network dashboard before relying on it.

| Store | Matches quiz category | Reported commission | Cookie | Network | Notes |
|---|---|---|---|---|---|
| Uncommon Goods | Cozy, art, cooking, general gifts | 5% (official support page) | 30 days | Impact | Gift-focused catalog; best general fit. |
| Etsy | Personalized, art, cozy | About 4% (Etsy says case by case) | 30 days web, 7 days app | Awin ($5 refundable deposit) | Manual review; may reject low-traffic sites. |
| REI | Outdoors, fitness | 5% | About 15 days | AvantLink | |
| Bass Pro Shops / Cabela's | Hunting and fishing | Up to 5%; about 1-2% on firearms and ammo | 14-15 days | AvantLink / others | |
| Sur La Table | Cooking | 4% (Impact) to 7% (Partnerize) | 15-30 days | Impact or Partnerize | Rate depends on network. |
| Atlas Coffee Club | Coffee and tea | About $7.50-$11 flat per subscription | 30 days | Pepperjam / others | Flat fee beats a percentage on a $15-$30 item. |
| Green Man Gaming | Video games (digital) | Up to 5% (official); 10% on its bundles | About 30 days | Direct | |
| Blick Art Materials | Art | Up to 10% (official); directories report 2-3% | About 1 day | CJ / ShareASale | Very short cookie limits real earnings. |

Not recommended: Target (about 1% on electronics and toys, many 0% categories), Dick's Sporting Goods (about 3%, short cookie), Sweetwater (about 1.6%).

Amazon comparison (reported 2026 standard rates; Amazon reportedly cut some rates mid-2026): physical books and kitchen 4.5%, home, toys, and sports 3%, physical video games 1%. Most catalog Amazon links are searches, which earn only if the visitor buys within Amazon's 24-hour window.

The site records retailer_click for any lowercase store id in catalog.js, so new stores need no analytics change. Add an approved tracking link to retailerLinks in dist/catalog.js and set affiliate:true; the result card then labels it "Affiliate link."
