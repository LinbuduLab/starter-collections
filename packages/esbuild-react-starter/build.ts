import { build, BuildOptions } from 'esbuild';
import { capitalCase } from 'capital-case';
import { PreserveExternalPlugin } from './preserve-external-dep.plugin';
import { start } from 'live-server';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

async function main() {
  const sharedBuildOptions: BuildOptions = {
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'development'
      ),
    },
    bundle: true,
    minify: isProd,
    sourcemap: false,
    platform: 'browser',
    target: ['es2020', 'chrome58'],
  };

  const preMountContent = `
window.React = require('react');
window.ReactDOM = require('react-dom')`;

  await build({
    stdin: {
      contents: preMountContent,
      resolveDir: __dirname,
    },
    outfile: './public/inject.js',
    ...sharedBuildOptions,
  });

  const depContentFunc = (dep: string) =>
    `module.exports = ${capitalCase(dep)}`;

  const builder = await build({
    entryPoints: ['./src/index.tsx'],
    outdir: 'public',
    watch: true,
    plugins: [
      PreserveExternalPlugin({
        depsToExtract: [
          {
            dep: 'react',
            // in simple case, we can use content processor to handle result generation
            contentFunc: depContentFunc,
          },
          {
            dep: 'react-dom',
            content: 'module.exports = ReactDOM',
          },
        ],
      }),
    ],
    external: ['react', 'react-dom'],
    loader: {
      '.html': 'text',
      '.svg': 'dataurl',
    },
    tsconfig: 'tsconfig.json',
    ...sharedBuildOptions,
  });

  start({
    port: 8080,
    root: path.resolve(__dirname, './public'),
    open: true,
  });
}

(async () => {
  await main();
})();
