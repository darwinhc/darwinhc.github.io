// Fails the build when placeholder text reaches the published site.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const PLACEHOLDERS = [
  /your text here/i,
  /lorem ipsum/i,
  /\[your [^\]]+\]/i,
  /\bTODO\b/,
  /\bplaceholder\b/i,
];

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return path.endsWith('.html') ? [path] : [];
  });
}

const problems = [];
for (const file of htmlFiles(DIST)) {
  const text = readFileSync(file, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ');
  for (const pattern of PLACEHOLDERS) {
    const match = text.match(pattern);
    if (match) problems.push(`${file.replace(DIST, 'dist/')}: "${match[0]}"`);
  }
}

if (problems.length) {
  console.error('Placeholder text found in the built site:\n' + problems.join('\n'));
  process.exit(1);
}
console.log('Content check passed: no placeholder text in the built site.');
