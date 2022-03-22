#!/usr/bin/env zx

// https://github.com/google/zx#__filename--__dirname
const content = await fs.readFile(
  path.resolve(__dirname, '../../package.json'),
  'utf-8'
);

const { devDependencies } = JSON.parse(content);

const composed = Object.entries(devDependencies)
  .reduce((prev, curr) => {
    const withVersion = curr[0] + '@' + curr[1];
    prev.push(withVersion);
    return prev;
  }, [])
  .filter((p) => !p.startsWith('@types'));

await $`pnpm install ${composed} --workspace-root --registry=https://registry.npmmirror.com`;
