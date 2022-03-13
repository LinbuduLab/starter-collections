import { build } from 'esbuild';
import { plugin } from '../src/plugin';
import path from 'path';

(async () => {
  await build({
    entryPoints: [path.resolve(__dirname, './entry.ts')],
    plugins: [plugin()],
    outdir: './dist',
  });
})();
