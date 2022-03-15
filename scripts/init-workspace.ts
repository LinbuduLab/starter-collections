import { CAC } from 'cac';
import fs from 'fs-extra';
import { CLIUtils, Constants } from './utils';

export default function useInitWorkspaceAfterInstall(cli: CAC) {
  cli
    .command('init', 'pick starter to init minimal workspace', {
      allowUnknownOptions: true,
    })
    .action(async () => {
      const existPackages = CLIUtils.existPackages;

      const chosedStarters = await CLIUtils.createPackageMultiSelector(
        'chosedStarters',
        'Pick starters to initialize workspace',
        true
      );

      const excluded = chosedStarters.includes(Constants.noneIdentifier)
        ? existPackages
        : existPackages.filter((p) => !chosedStarters.includes(p));

      for (const project of excluded) {
        const projectSrcPath = CLIUtils.resolvePackageDir(project);

        fs.removeSync(projectSrcPath);
      }
    });
}
