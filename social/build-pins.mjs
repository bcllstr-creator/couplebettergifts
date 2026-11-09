// Builds Pinterest list pins (1000 x 1500), one per buying guide. Every row comes from the
// guide text or the catalog; budget labels are the catalog's planning tiers, not live prices.
// Run: node social/build-pins.mjs, then render each HTML file with headless Edge (see PINTEREST.md).
import {writeFileSync, mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '../dist');
const out = path.join(here, 'html');
mkdirSync(out, {recursive: true});
const file = p => encodeURI('file:///' + path.join(dist, p).replace(/\\/g, '/'));

export const pins = [
  {
    id: 'p-gamer-budget', guide: 'gaming-gifts.html', photo: 'guide-gaming.jpg', kicker: 'For a gamer',
    title: 'Gifts for a gamer at every budget',
    rows: [['Up to $25', 'Controller thumb grips'], ['Up to $50', 'Gaming controller'], ['Up to $100', 'Gaming headset'], ['Up to $200', 'Mechanical gaming keyboard']],
    note: 'Check what system they play on before you order.'
  },
  {
    id: 'p-reader-gifts', guide: 'reading-gifts.html', photo: 'guide-reading.jpg', kicker: 'For a reader',
    title: 'Gift ideas for a book lover',
    rows: [['Up to $25', 'Rechargeable reading light'], ['Up to $25', 'Reading journal'], ['Up to $25', 'Fantasy bookmark set'], ['Up to $50', 'Collectible hardcover of a favorite']],
    note: 'Confirm the edition, and whether they already own it.'
  },
  {
    id: 'p-dnd-gifts', guide: 'tabletop-gifts.html', photo: 'guide-tabletop.jpg', kicker: 'For a D&D player',
    title: 'D&D gifts for a player or game master',
    rows: [['Up to $25', 'Polyhedral dice set'], ['Up to $25', 'Drawstring dice bag'], ['Up to $50', 'Folding dice tray'], ['Up to $100', 'Metal polyhedral dice']],
    note: 'Metal dice need a lined tray. Check the numbers are readable.'
  },
  {
    id: 'p-under-25', guide: 'gifts-under-25.html', photo: 'guide-under25.jpg', kicker: 'By budget',
    title: 'Good gifts under $25',
    rows: [['Use up', 'Favorite coffee, tea, or hot sauce'], ['Upgrade', 'A better pen, phone stand, or cozy socks'], ['Read', 'A paperback by an author they love']],
    note: 'Set the limit for the total, including shipping and a card.'
  },
  {
    id: 'p-last-minute', guide: 'last-minute-gifts.html', photo: 'guide-lastminute.jpg', kicker: 'Last minute',
    title: 'Last-minute gift? Pick how it gets there first',
    rows: [['Hours left', 'A local store, bakery, florist, or bookshop'], ['One day', 'Same-day pickup from a nearby store'], ['Any time', 'Tickets, a class, or an e-book'], ['Any time', 'A plan you make, with a real date']],
    note: 'Print a digital gift and put it in a card.'
  },
  {
    id: 'p-has-everything', guide: 'has-everything-gifts.html', photo: 'guide-everything.jpg', kicker: 'Has everything',
    title: 'Gifts for someone who has everything',
    rows: [['01', 'An experience, with a date on the calendar'], ['02', 'Something they will use up'], ['03', 'An upgrade to what they use most'], ['04', 'Something only you can give']],
    note: 'Skip anything that just adds to their shelves.'
  },
  {
    id: 'p-holiday-budget', guide: 'holiday-gift-planning.html', photo: 'guide-holiday.jpg', kicker: 'Holidays',
    title: 'How to plan holiday gifts on a budget',
    rows: [['01', 'Set one total, including wrapping and shipping'], ['02', 'Give each person a share of it'], ['03', 'Keep every idea in one list'], ['04', 'Write an order-by date for each gift']],
    note: 'Order early. Shipping slows down in December.'
  },
  {
    id: 'p-personalized', guide: 'personalized-gifts.html', photo: 'guide-personalized.jpg', kicker: 'Personalized',
    title: 'Ordering a personalized gift? Check these first',
    rows: [['Engraving', 'Character limits and small fonts'], ['Photo print', 'Low-resolution photos print blurry'], ['Custom book', 'Long production times and typos']],
    note: 'Most custom orders cannot be returned.'
  },
  {
    id: 'p-partner', guide: 'partner-gifts.html', photo: 'guide-partner.jpg', kicker: 'For a partner',
    title: 'How to pick a gift for your partner',
    rows: [['List 1', 'Things they use every day'], ['List 2', 'Things you have done together'], ['List 3', 'Things they want to try']],
    note: 'A good gift sits where two of the lists overlap.'
  }
];

export const link = pin => `https://couplebettergifts.com/${pin.guide}?utm_source=pinterest&utm_medium=organic_social&utm_campaign=gift_quiz&utm_content=${pin.id}`;

const html = pin => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Newsreader";src:url(${file('fonts/newsreader.woff2')}) format("woff2");font-weight:200 800}
@font-face{font-family:"Plex Mono";src:url(${file('fonts/plexmono-500.woff2')}) format("woff2");font-weight:500}
*{box-sizing:border-box;margin:0}
html,body{width:1000px;height:1500px;overflow:hidden;background:#fff}
.pin{width:1000px;height:1500px;display:flex;flex-direction:column;font-family:"Newsreader",Georgia,serif;color:#182a3d}
.photo{height:${pin.rows.length > 3 ? 500 : 560}px;background:url(${file('assets/' + pin.photo)}) center/cover;position:relative}
.brand{position:absolute;left:0;top:0;background:#fff;padding:18px 26px 16px;font-weight:800;font-size:34px;letter-spacing:-.03em}
.band{background:#234ee8;color:#fff;padding:40px 56px 46px}
.kicker{font-family:"Plex Mono",monospace;font-size:24px;letter-spacing:.14em;text-transform:uppercase;color:#c9d5ff;margin-bottom:14px}
h1{font-weight:700;font-size:${pin.title.length > 38 ? 72 : 82}px;line-height:1;letter-spacing:-.03em}
ul{list-style:none;padding:12px 56px 0;flex:1;display:flex;flex-direction:column}
li{flex:1;display:grid;grid-template-columns:210px 1fr;align-items:center;gap:18px;padding:14px 0;border-bottom:1px dotted #182a3d}
li span{font-family:"Plex Mono",monospace;font-size:24px;letter-spacing:.06em;text-transform:uppercase;color:#234ee8}
li b{font-weight:600;font-size:${pin.rows.length > 3 ? 42 : 48}px;line-height:1.1;letter-spacing:-.015em}
.note{margin:0 56px;padding:26px 0 0;font-size:32px;line-height:1.25;font-style:italic;color:#2b3a4a}
.footer{margin:24px 56px 48px;border-top:2px solid #182a3d;padding-top:18px;display:flex;justify-content:space-between;font-family:"Plex Mono",monospace;font-size:22px;letter-spacing:.06em;text-transform:uppercase}
.footer em{font-style:normal;color:#234ee8}
</style></head><body><div class="pin">
<div class="photo"><div class="brand">Couple Better Gifts</div></div>
<div class="band"><div class="kicker">${pin.kicker}</div><h1>${pin.title}</h1></div>
<ul>${pin.rows.map(([label, text]) => `<li><span>${label}</span><b>${text}</b></li>`).join('')}</ul>
<p class="note">${pin.note}</p>
<div class="footer"><span>couplebettergifts.com</span><em>Full guide</em></div>
</div></body></html>`;

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  for (const pin of pins) writeFileSync(path.join(out, `${pin.id}.html`), html(pin));
  console.log(`Wrote ${pins.length} pin pages to ${out}`);
}
