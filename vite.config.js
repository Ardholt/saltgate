import { defineConfig } from 'vite';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

// Writes dist/sw.js: the file list of the finished build plus a version hashed from every file's bytes.
function offlineShell() {
  let outDir = 'dist';
  const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
  return {
    name: 'saltgate-offline-shell',
    apply: 'build',
    configResolved(c) { outDir = c.build.outDir; },
    closeBundle() {
      const files = walk(outDir).map((p) => relative(outDir, p).split('\\').join('/')).filter((f) => f !== 'sw.js').sort();
      const h = createHash('sha256');
      for (const f of files) { h.update(f); h.update(readFileSync(join(outDir, f))); }
      const version = h.digest('hex').slice(0, 12);
      const list = ['./', ...files.map((f) => './' + f)];
      const tpl = readFileSync('sw/sw.template.js', 'utf8').replace('__VERSION__', version).replace('__FILES__', JSON.stringify(list));
      writeFileSync(join(outDir, 'sw.js'), tpl);
    },
  };
}

export default defineConfig({
  base: './',
  build: { chunkSizeWarningLimit: 900, assetsInlineLimit: 0 },
  server: { host: '127.0.0.1' },
  plugins: [offlineShell()],
});
