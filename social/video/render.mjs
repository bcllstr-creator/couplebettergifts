// Captures each ad page from ads.mjs frame by frame in Edge and encodes an MP4 (H.264, 30 fps, no audio).
// Usage: node render.mjs [ad-id] [--stills]   --stills writes a few PNG frames per ad instead of video.
import {spawn} from 'node:child_process';
import {mkdirSync} from 'node:fs';
import {fileURLToPath, pathToFileURL} from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import ffmpeg from 'ffmpeg-static';
import {ads, sizes} from './ads.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(here, 'out');
mkdirSync(outDir, {recursive: true});
const fps = 30;
const only = process.argv.slice(2).find(a => !a.startsWith('--'));
const stills = process.argv.includes('--stills');

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: true,
  args: ['--allow-file-access-from-files', '--hide-scrollbars']
});

for (const ad of ads.filter(a => !only || a.id === only)) {
  for (const size of sizes) {
    const page = await browser.newPage();
    await page.setViewport({width: size.w, height: size.h, deviceScaleFactor: 1});
    await page.goto(pathToFileURL(path.join(here, 'html', `${ad.id}-${size.name}.html`)).href, {waitUntil: 'load'});
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.querySelectorAll('.photo')].map(el => new Promise(done => {
        const img = new Image();
        img.onload = img.onerror = done;
        img.src = getComputedStyle(el).backgroundImage.slice(5, -2);
      })));
    });
    const name = `${ad.id}-${size.name}`;

    if (stills) {
      const marks = [...new Set([...ad.body.matchAll(/data-scene="([\d.]+),/g)].map(m => +m[1]))].sort((a, b) => a - b);
      for (const t of marks.map(m => +(m + 0.9).toFixed(2)).filter(t => t < ad.duration)) {
        await page.evaluate(t => seek(t), t);
        await page.screenshot({path: path.join(outDir, `${name}-${t}s.png`)});
      }
      await page.close();
      console.log(`stills ${name}`);
      continue;
    }

    const encoder = spawn(ffmpeg, ['-loglevel', 'error', '-y', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
      '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'slow', '-crf', '17', '-movflags', '+faststart',
      path.join(outDir, `${name}.mp4`)], {stdio: ['pipe', 'ignore', 'inherit']});
    const done = new Promise((resolve, reject) => encoder.on('close', code => code ? reject(new Error(`ffmpeg exited ${code}`)) : resolve()));
    const frames = Math.round(ad.duration * fps);
    for (let i = 0; i < frames; i++) {
      await page.evaluate(t => seek(t), i / fps);
      const shot = await page.screenshot({type: 'jpeg', quality: 95});
      if (!encoder.stdin.write(shot)) await new Promise(r => encoder.stdin.once('drain', r));
    }
    encoder.stdin.end();
    await done;
    await page.close();
    console.log(`video ${name}.mp4 (${frames} frames)`);
  }
}
await browser.close();
