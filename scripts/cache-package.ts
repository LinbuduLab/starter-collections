import { CAC } from 'cac';
import fs from 'fs-extra';
import enquirer from 'enquirer';

import chalk from 'chalk';
import { CLIUtils } from './utils';
import consola from 'consola';

export default function useCachePackage(cli: CAC) {
  cli
    .command('cache', 'cache current workspace packages to cache directory')
    .action(async () => {
      fs.ensureDirSync(CLIUtils.resolvedPackageRootDir);
      const existPackages = CLIUtils.existPackages;

      for (const p of existPackages) {
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

        consola.success(`Package ${chalk.green(p)} cached.`);
      }
    });
}
