// Postbuild gate: every indexable page needs a <title> of 60 characters or fewer
// and a meta description of 155 characters or fewer (Google truncates longer ones).
// Fix the copy; never raise the limits to get a build through.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const LIMITS = { title: 60, description: 155 };
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const failures = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) { walk(path); continue; }
    if (!name.endsWith('.html')) continue;
    const html = readFileSync(path, 'utf8');
    if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue;
    if (/<meta http-equiv="refresh"/.test(html)) continue; // redirect stubs
    const found = {
      title: html.match(/<title>([^<]*)<\/title>/)?.[1],
      description: html.match(/<meta name="description" content="([^"]*)"/)?.[1],
    };
    for (const [field, max] of Object.entries(LIMITS)) {
      const text = found[field] && decode(found[field]).trim();
      if (!text) failures.push({ path, field, problem: 'missing' });
      else if (text.length > max) failures.push({ path, field, problem: `${text.length} > ${max}`, text });
    }
  }
})('dist');

if (failures.length) {
  console.error(`\n✗ ${failures.length} title/description problem(s):\n`);
  for (const f of failures) console.error(`  ${f.field} ${f.problem}  ${f.path}${f.text ? `\n       "${f.text}"` : ''}\n`);
  process.exit(1);
}
console.log(`✓ All titles ≤ ${LIMITS.title} and descriptions ≤ ${LIMITS.description} characters.`);
