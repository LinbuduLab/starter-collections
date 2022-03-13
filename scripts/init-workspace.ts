// choose the project you want to preserve
/**
 * choose the package you want to preserve
 * move left projects to /preserved
 *
 */

import { CAC } from 'cac';

export default function useInitWorkspaceAfterInstall(cli: CAC) {
  cli.command('init', 'pick starter to init minimal workspace', {
    allowUnknownOptions: true,
  });
}
