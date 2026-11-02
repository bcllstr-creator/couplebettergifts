// Builds social profile images: a square "cb" profile picture and a Facebook cover.
// Run: node social/brand-assets.mjs, then screenshot each HTML file (see WEEK-1.md).
import {writeFileSync, mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '../dist');
const out = path.join(here, 'html');
mkdirSync(out, {recursive: true});
const file = p => encodeURI('file:///' + path.join(dist, p).replace(/\\/g, '/'));
const fonts = `@font-face{font-family:"Newsreader";src:url(${file('fonts/newsreader.woff2')}) format("woff2");font-weight:200 800}
@font-face{font-family:"Plex Mono";src:url(${file('fonts/plexmono-500.woff2')}) format("woff2");font-weight:500}
*{box-sizing:border-box;margin:0}`;

writeFileSync(path.join(out, 'profile.html'), `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}
html,body{width:720px;height:720px;overflow:hidden;background:#182a3d}
.mark{width:720px;height:720px;display:grid;place-items:center;color:#fff;font-family:"Newsreader",Georgia,serif;font-weight:700;font-size:360px;letter-spacing:-.01em;line-height:1;padding-top:40px}
</style></head><body><div class="mark">cb</div></body></html>`);

writeFileSync(path.join(out, 'cover.html'), `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}
html,body{width:1640px;height:624px;overflow:hidden;background:#fff}
.cover{display:grid;grid-template-columns:1fr 1fr;height:624px}
.text{display:flex;flex-direction:column;justify-content:center;padding:0 80px;color:#182a3d;font-family:"Newsreader",Georgia,serif}
.kicker{font-family:"Plex Mono",monospace;font-size:24px;letter-spacing:.14em;text-transform:uppercase;color:#234ee8;margin-bottom:18px}
h1{font-weight:700;font-size:76px;line-height:1.02;letter-spacing:-.03em}
p{font-family:"Plex Mono",monospace;font-size:24px;letter-spacing:.06em;text-transform:uppercase;margin-top:28px;border-top:2px solid #182a3d;padding-top:16px}
.photo{background:url(${file('assets/gift.jpg')}) center/cover}
</style></head><body><div class="cover"><div class="text"><span class="kicker">Gift quiz and buying guides</span><h1>Find a gift they will actually use.</h1><p>couplebettergifts.com</p></div><div class="photo"></div></div></body></html>`);
console.log('Wrote profile.html and cover.html');
