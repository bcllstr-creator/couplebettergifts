// Builds organic social post graphics (Instagram/Facebook 4:5 and Pinterest 2:3)
// from the site's fonts, colors, and licensed guide photos.
// Run: node social/build-posts.mjs, then social/render.ps1 to screenshot each HTML file.
import {writeFileSync, mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '../dist');
const out = path.join(here, 'html');
mkdirSync(out, {recursive: true});
const file = p => encodeURI('file:///' + path.join(dist, p).replace(/\\/g, '/'));

const posts = [
  {
    id: 'w1-controller-check',
    kicker: 'For a gamer',
    title: 'Buying a controller? Check their system first.',
    points: ['A PC, PlayStation, Xbox, and Switch can each need different accessories.', 'Ask what they play on, or check the console under the TV.', 'Wireless or wired: look at how they play now.'],
    photo: 'assets/guide-gaming.jpg',
    footer: 'Full guide at couplebettergifts.com'
  },
  {
    id: 'w1-reader-edition',
    kicker: 'For a reader',
    title: 'Giving a book? Get the edition right.',
    points: ['Check whether they read paperback, hardcover, or e-book.', 'For a series, confirm which book they are on.', 'Not sure which book? A reading light or journal is a safer pick.'],
    photo: 'assets/guide-reading.jpg',
    footer: 'Full guide at couplebettergifts.com'
  },
  {
    id: 'w1-start-with-them',
    kicker: 'Gift quiz',
    title: 'Stuck on a gift? Start with what they enjoy.',
    points: ['Set your budget.', 'Pick up to two things they like.', 'Get a short list with what to check before you buy.'],
    photo: 'assets/guide-partner.jpg',
    footer: 'Take the quiz at couplebettergifts.com'
  }
];

const sizes = [
  {name: 'ig', w: 1080, h: 1350},
  {name: 'pin', w: 1000, h: 1500}
];

for (const post of posts) {
  for (const size of sizes) {
    const photoH = Math.round(size.h * (size.name === 'pin' ? 0.48 : 0.45));
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Newsreader";src:url(${file('fonts/newsreader.woff2')}) format("woff2");font-weight:200 800}
@font-face{font-family:"Plex Mono";src:url(${file('fonts/plexmono-500.woff2')}) format("woff2");font-weight:500}
*{box-sizing:border-box;margin:0}
html,body{width:${size.w}px;height:${size.h}px;overflow:hidden;background:#fff}
.card{width:${size.w}px;height:${size.h}px;display:flex;flex-direction:column;padding:56px;color:#182a3d;font-family:"Newsreader",Georgia,serif}
.brand{display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #182a3d;padding-bottom:18px}
.wordmark{font-weight:800;font-size:40px;letter-spacing:-.03em}
.kicker{font-family:"Plex Mono",monospace;font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:#234ee8}
.photo{margin-top:32px;height:${photoH}px;background:url(${file(post.photo)}) center/cover}
h1{font-weight:700;font-size:${size.name === 'pin' ? 70 : 66}px;line-height:1.02;letter-spacing:-.03em;margin-top:40px}
ol{list-style:none;margin-top:30px;counter-reset:n;display:grid;gap:16px}
li{counter-increment:n;display:grid;grid-template-columns:52px 1fr;font-size:30px;line-height:1.3;color:#2b3a4a}
li::before{content:counter(n);font-family:"Plex Mono",monospace;font-size:22px;color:#234ee8;padding-top:6px}
.footer{margin-top:auto;border-top:1px dotted #182a3d;padding-top:18px;font-family:"Plex Mono",monospace;font-size:22px;letter-spacing:.06em;text-transform:uppercase}
</style></head><body><div class="card">
<div class="brand"><span class="wordmark">Couple Better Gifts</span><span class="kicker">${post.kicker}</span></div>
<div class="photo"></div>
<h1>${post.title}</h1>
<ol>${post.points.map(p => `<li>${p}</li>`).join('')}</ol>
<div class="footer">${post.footer}</div>
</div></body></html>`;
    writeFileSync(path.join(out, `${post.id}-${size.name}.html`), html);
  }
}
console.log(`Wrote ${posts.length * sizes.length} post files to ${out}`);
