import fs from 'fs-extra';
import path from 'path';

import { CLIUtils, Constants } from './utils';

export class CLIHooks {
  public static pre() {
    fs.ensureDirSync(CLIUtils.resolvedPackageRootDir);
    const existPackages = CLIUtils.existPackages;

    for (const p of existPackages.slice(0)) {
      const projectSrcPath = CLIUtils.resolvePackageDir(p);

      const projectDestPath = CLIUtils.resolveCachePackageDir(p);

      if (fs.existsSync(projectDestPath)) continue;

      fs.copySync(projectSrcPath, projectDestPath, {
        recursive: true,
        filter: (src, dest) => {
          const filtered = ['node_modules', 'dist', 'tmp'].every(
            (pattern) => !src.includes(pattern)
          );

          return filtered;
        },
      });
    }
  }
}
