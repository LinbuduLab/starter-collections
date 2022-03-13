import { CAC } from 'cac';
import fs from 'fs-extra';

import { CLIUtils, Constants } from './utils';

export default function useResetWorkspacePackages(cli: CAC) {
  cli
    .command('reset', 'reset workspace', {
      allowUnknownOptions: true,
    })
    .action(async () => {
      const cached = fs.readdirSync(Constants.packagesCacheDir);

      for (const p of cached) {
        const projectPreservedSrcPath = CLIUtils.resolveCachePackageDir(p);
        const projectPreservedDestPath = CLIUtils.resolvePackageDir(p);

        if (fs.existsSync(projectPreservedDestPath)) continue;

        fs.moveSync(projectPreservedSrcPath, projectPreservedDestPath);
      }
    });
}
