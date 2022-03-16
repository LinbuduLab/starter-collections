import type { Plugin } from 'esbuild';

export const plugin = (): Plugin => {
  return {
    name: 'plugin:demo',
    setup(build) {
      build.onLoad(
        { filter: new RegExp('') },
        ({ path, namespace, pluginData }) => {
          return null;
        }
      );

      build.onResolve(
        { filter: new RegExp('') },
        ({ path, namespace, resolveDir, importer, kind, pluginData }) => {
          return null;
        }
      );

      build.onStart(() => {
        console.log('Plugin Start!');
      });

      build.onEnd(() => {
        console.log('Plugin End!');
      });
    },
  };
};
