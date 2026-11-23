// Checks every PDF url (<PdfLink url="..."> or a news item's url: '...') in src/ and records unreachable remotes in src/data/broken-links.json,
// so PdfLink serves the local fallback copy instead. Runs before each export.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : /\.(tsx?|jsx?)$/.test(f) ? [p] : [];
  });

const urls = new Set();
for (const file of walk('src')) {
  for (const m of readFileSync(file, 'utf8').matchAll(/\burl[=:]\s*["'](https?:[^"']+\.pdf)["']/g)) urls.add(m[1]);
}

const isOk = async (url) => {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(10000) });
    return res.ok;
  } catch {
    return false;
  }
};

const broken = [];
for (const url of urls) {
  const ok = await isOk(url);
  console.log(`${ok ? 'OK    ' : 'BROKEN'} ${url}`);
  if (!ok) broken.push(url);
}
writeFileSync('src/data/broken-links.json', JSON.stringify(broken, null, 2) + '\n');
