import fs from 'fs-extra';

import { CLIUtils, Constants } from './utils';

export class CLIHooks {
  public static pre() {
    const existPackages = CLIUtils.existPackages;

    if (fs.existsSync(Constants.packagesCacheDir)) return;

    for (const p of existPackages) {
      const projectSrcPath = CLIUtils.resolvePackageDir(p);
      const projectDestPath = CLIUtils.resolveCachePackageDir(p);

      // TODO: mark dir as immutable

      fs.copySync(projectSrcPath, projectDestPath);
    }
  }
}
