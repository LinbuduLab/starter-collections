import { Plugin } from 'vite';

export function vitePluginStarter(options: Record<string, unknown>): Plugin {
  return {
    name: 'vite-plugin-starter',
    enforce: 'pre',
    apply: (config, env) => true,
    config: (config, env) => config,
    configResolved: async (config) => {},
    configureServer: (server) => {},
    // resolveId
    // load
    handleHotUpdate: async (ctx) => {},
    transform: (code: any) => {
      return code;
    },
  };
}
