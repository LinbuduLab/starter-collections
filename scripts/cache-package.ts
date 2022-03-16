import { CAC } from 'cac';
import fs from 'fs-extra';

import chalk from 'chalk';
import { CLIUtils, Constants } from './utils';
import consola from 'consola';

export default function useCachePackage(cli: CAC) {
  cli
    .command('cache', 'cache current workspace packages to cache directory')
    .option('-p,--preserve', 'preserve when package cache directory exists')
    .option('--no-preserve', 'override exist package cache')
    .action(async (options: { preserve: boolean }) => {
      fs.ensureDirSync(CLIUtils.resolvedPackageRootDir);
      const existPackages = CLIUtils.existPackages;

      for (const p of existPackages) {
        const projectSrcPath = CLIUtils.resolvePackageDir(p);
        const projectDestPath = CLIUtils.resolveCachePackageDir(p);

        if (fs.existsSync(projectDestPath) && options.preserve) {
          consola.info(
            `[Skip]Cached package ${chalk.green(p)} will be preserved.`
          );
          continue;
        }

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
