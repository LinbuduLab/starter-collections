import { CAC } from 'cac';
import fs from 'fs-extra';
import enquirer from 'enquirer';

import chalk from 'chalk';
import { CLIUtils, Constants } from './utils';
import consola from 'consola';

// raw, renamed
type Raw2RenamedTuple = [string, string];

export default function useCopyPackageFromCacheDir(cli: CAC) {
  cli
    .command('copy', 'copy removed packages to workspace packages', {
      allowUnknownOptions: true,
    })
    .action(async () => {
      const cachedPackages = CLIUtils.cachedPackages;

      const { packagesToCopy } = await enquirer.prompt<{
        packagesToCopy: string[];
      }>({
        type: 'multiselect',
        choices: cachedPackages.filter(
          (p) => !Constants.demoOnlyPackages.includes(p)
        ),
        muliple: true,
        sort: true,
        scroll: true,
        name: 'packagesToCopy',
        message: 'Choose starters you want to copy into workspace',
      });

      console.log('packagesToCopy: ', packagesToCopy);

      const tasks: Array<Raw2RenamedTuple> = [];

      for (const pkg of packagesToCopy) {
        const { renamed } = await enquirer.prompt<{ renamed: string }>({
          type: 'input',
          name: 'renamed',
          message: `Rename package ${chalk.bold.green(pkg)}`,
        });

        tasks.push([pkg, renamed]);
      }

      if (!tasks.length) {
        consola.error('No copy tasks available.');
      }

      for (const [raw, renamed] of tasks) {
        const source = CLIUtils.resolveCachePackageDir(raw);
        const dest = CLIUtils.resolvePackageDir(renamed);

        console.info(
          `Copying template ${chalk.bold.green(
            raw
          )} to workspace ${chalk.bold.white(renamed)}`
        );

        fs.copySync(source, dest);
      }
    });
}
