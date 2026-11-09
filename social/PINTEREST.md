# Pinterest pins

Pinterest works like a search engine: people type "gifts for gamers" or "gifts under $25" and save what they find. Pins keep getting found for months, which is why it suits a site with no followers yet. Every pin here leads with the phrase people search, links to the matching guide, and carries a tracked link.

## Files

- Pins: `social/images/p-*.png` (1000 x 1500), built by `social/build-pins.mjs` from the guides and catalog.
- To rebuild after editing a pin: `node social/build-pins.mjs`, then render each `social/html/p-*.html` with headless Edge at 1000 x 1500 (`--screenshot`, `--window-size=1000,1500`, `--virtual-time-budget=5000`).
- Budget labels ("Up to $25") are the catalog's planning tiers, not live prices.

## Boards

Topic boards help Pinterest understand what each pin is about. Keep "Gift Ideas" and add these:

- Gifts for Gamers
- Gifts for Book Lovers
- D&D Gifts
- Gifts Under $25
- Holiday Gift Ideas
- Gifts for Your Partner

## Posting

One pin a day works better than all nine at once: Pinterest favors accounts that post steadily. Holiday shopping searches are rising now, so the holiday and budget pins go first.

| Day | Pin | Board |
|---|---|---|
| 1 | p-holiday-budget | Holiday Gift Ideas |
| 2 | p-under-25 | Gifts Under $25 |
| 3 | p-gamer-budget | Gifts for Gamers |
| 4 | p-partner | Gifts for Your Partner |
| 5 | p-reader-gifts | Gifts for Book Lovers |
| 6 | p-last-minute | Holiday Gift Ideas |
| 7 | p-dnd-gifts | D&D Gifts |
| 8 | p-has-everything | Gift Ideas |
| 9 | p-personalized | Gift Ideas |

## Pin text

Each link is `https://couplebettergifts.com/<guide>?utm_source=pinterest&utm_medium=organic_social&utm_campaign=gift_quiz&utm_content=<pin id>`.

**p-holiday-budget** → `holiday-gift-planning.html`
- Title: How to Plan Holiday Gifts on a Budget
- Description: Set one total for the season, including wrapping and shipping, then give each person a share of it. Keep every gift idea in one list and write an order-by date next to each one so nothing ships late. Holiday gift planning, Christmas gift budget, gift list.

**p-under-25** → `gifts-under-25.html`
- Title: Good Gifts Under $25
- Description: A small budget goes further on things they use up, like favorite coffee or tea, and small upgrades to things they use every day, like a better pen or cozy socks. Set the limit for the total, including shipping and a card. Cheap gift ideas, gifts under 25 dollars.

**p-gamer-budget** → `gaming-gifts.html`
- Title: Gifts for a Gamer at Every Budget
- Description: Controller thumb grips, a gaming controller, a headset, or a mechanical keyboard. Before you order, check whether they play on PC, PlayStation, Xbox, or Switch, because accessories don't work with every system. Gamer gift ideas, gifts for gamers.

**p-partner** → `partner-gifts.html`
- Title: How to Pick a Gift for Your Partner
- Description: Make three lists: things they use every day, things you have done together, and things they have mentioned wanting to try. A good gift usually sits where two of them overlap. Anniversary gift ideas, gifts for boyfriend, gifts for girlfriend.

**p-reader-gifts** → `reading-gifts.html`
- Title: Gift Ideas for a Book Lover
- Description: A rechargeable reading light, a reading journal, a bookmark set, or a collectible hardcover of a book they love. Check whether they read paperback, hardcover, or e-book, and whether they already own it. Gifts for readers, book lover gifts.

**p-last-minute** → `last-minute-gifts.html`
- Title: Last-Minute Gift Ideas That Still Feel Thoughtful
- Description: Decide how the gift will reach them first. With a few hours left, try a local bookshop, bakery, or florist. With a day, use same-day pickup. Any time: tickets, a class, an e-book, or a plan you make together. Last minute gifts.

**p-dnd-gifts** → `tabletop-gifts.html`
- Title: D&D Gifts for a Player or Game Master
- Description: A polyhedral dice set, a dice bag, a folding dice tray, or metal dice. Metal dice need a lined tray, and every set should have readable numbers. Dungeons and Dragons gifts, DnD gift ideas, tabletop gamer gifts.

**p-has-everything** → `has-everything-gifts.html`
- Title: Gifts for Someone Who Has Everything
- Description: Skip anything that just adds to their shelves. Give an experience with a date on the calendar, something they will use up, an upgrade to what they use most, or something only you can give. Gift ideas for the person who has everything.

**p-personalized** → `personalized-gifts.html`
- Title: Ordering a Personalized Gift? Check These First
- Description: Engraving has character limits and small fonts are hard to read. Low-resolution photos print blurry. Custom books take longer to make and typos are easy to miss. Most custom orders can't be returned, so check before you pay. Personalized gift ideas.

## Measuring

The account was converted to a free business account on November 9, 2026 (type: Publisher or media), which turned on scheduling and Pinterest Analytics (impressions, saves, and outbound clicks per pin). All nine pins above are scheduled for 12:00 PM daily, November 10 to 18. Site visits show in GA4 as pinterest / organic_social, with the pin id in utm_content.
