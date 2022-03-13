import { CAC } from 'cac';
import fs from 'fs-extra';
import enquirer from 'enquirer';
import chalk from 'chalk';
import { CLIUtils, Constants } from './utils';

export default function useInitWorkspaceAfterInstall(cli: CAC) {
  cli
    .command('init', 'pick starter to init minimal workspace', {
      allowUnknownOptions: true,
    })
    .action(async () => {
      const existPackages = CLIUtils.existPackages;

      const { preserveStarter } = await enquirer.prompt<{
        preserveStarter: string[];
      }>({
        type: 'multiselect',
        choices: existPackages.map((p) => {
          const color = CLIUtils.findInfoFromKeywords(p)?.color ?? null;

          return {
            name: p,
            value: p,
            message: color ? chalk.hex(color)(p) : p,
          };
        }),
        muliple: true,
        sort: true,
        scroll: true,
        name: 'preserveStarter',
        message: 'Choose starters you want to use for this time!',
      });

      const excluded = preserveStarter.includes(Constants.noneIdentifier)
        ? existPackages
        : existPackages.filter((p) => !preserveStarter.includes(p));

      for (const project of excluded) {
        const projectSrcPath = CLIUtils.resolvePackageDir(project);

        fs.removeSync(projectSrcPath);
      }
    });
}
