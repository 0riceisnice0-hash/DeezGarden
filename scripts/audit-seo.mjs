import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const files = fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith('.html'));
const errors = [];
const titles = new Map();
let schemas = 0;
for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const route = file === 'index.html' ? '/' : `/${file.replaceAll('\\', '/').replace(/index\.html$/, '')}`;
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  if (!title) errors.push(`${route}: missing title`);
  else if (titles.has(title)) errors.push(`${route}: duplicate title with ${titles.get(title)}`);
  else titles.set(title, route);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) errors.push(`${route}: expected one H1`);
  if (!/<meta\s+name="description"\s+content="[^"]+"/.test(html)) errors.push(`${route}: missing description`);
  if (!/<link\s+rel="canonical"\s+href="https:\/\/deezgardens\.co\.uk[^\"]*"/.test(html)) errors.push(`${route}: missing production canonical`);
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    try { JSON.parse(match[1]); schemas++; } catch { errors.push(`${route}: invalid JSON-LD`); }
  }
  for (const match of html.matchAll(/(?:href|src)="(\/[^\"]*)"/g)) {
    const target = decodeURIComponent(match[1].split(/[?#]/)[0]);
    const resolved = path.join(root, target);
    if (!fs.existsSync(resolved)) errors.push(`${route}: missing target ${target}`);
  }
  if (/<img[^>]*src="(?:undefined|null|)"/.test(html)) errors.push(`${route}: empty image source`);
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(match[0])) errors.push(`${route}: image without alt`);
  }
}
const sitemap = fs.readFileSync(path.join(root, 'sitemap-0.xml'), 'utf8');
if (sitemap.includes('/services/garden-maintenance/')) errors.push('Sitemap contains retired maintenance page');
for (const route of ['/services/garden-renovations/', '/projects/', '/blog/planning-a-garden-makeover/']) {
  if (!sitemap.includes(route)) errors.push(`Sitemap missing ${route}`);
}
console.log(`Checked ${files.length} HTML pages, ${schemas} JSON-LD blocks, local link/image targets and sitemap.`);
if (errors.length) { console.error([...new Set(errors)].join('\n')); process.exitCode = 1; }
else console.log('SEO crawl checks passed.');
