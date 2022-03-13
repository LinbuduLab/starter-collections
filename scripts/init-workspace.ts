/**
 * initWorkspace Handler
 * @LinbuduLab
 *
 * choose the package you want to preserve
 * move left projects to /preserved
 *
 */

import { CAC } from 'cac';
import fs from 'fs-extra';
import enquirer from 'enquirer';
import path from 'path';
import { CLIUtils, Constants } from './utils';

export default function useInitWorkspaceAfterInstall(cli: CAC) {
  cli
    .command('init', 'pick starter to init minimal workspace', {
      allowUnknownOptions: true,
    })
    .action(async () => {
      const existPackages = CLIUtils.existPackages;

      // TODO: colorful by series
      const { preserveStarter } = await enquirer.prompt<{
        preserveStarter: string[];
      }>({
        type: 'multiselect',
        choices: existPackages.slice().concat([Constants.noneIdentifier]),
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
        const projectDestPath = CLIUtils.resolvePreservePackageDir(project);

        fs.moveSync(projectSrcPath, projectDestPath);
      }
    });
}
