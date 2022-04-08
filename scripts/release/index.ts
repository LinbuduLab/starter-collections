import { CAC } from 'cac';
import fs from 'fs-extra';
import path from 'path';
import enquirer from 'enquirer';
import chalk from 'chalk';
import ora from 'ora';
import consola from 'consola';
import pacote from 'pacote';
import execa from 'execa';
import { CLIUtils, Constants } from '../utils';
import { ReleaseType, inc, compare } from 'semver';
import simpleGit from 'simple-git';
import { PackageJson } from 'type-fest';

interface ReleaseCommandOptions {
  dry: boolean;
  quick: boolean;
}

const RELEASE_TYPE_LIST: ReleaseType[] = [
  'major',
  'minor',
  'patch',
  'premajor',
  'preminor',
  'prepatch',
  'prerelease',
];

/**
 *
 * TODO: ChangeLog Generator
 *
 * What'll be included:
 *
 * - release-it
 * - changesets
 * - git-cz
 * - changelog related
 * - simple mode
 *
 * @param cli
 */
export default function useReleaseProject(cli: CAC) {
  cli
    .command('release [project] [releaseType]', 'release project')
    .alias('r')
    .option('--no-dry', 'donot execute in dry run mode')
    .option('--dry', 'execute in dry run mode')
    .option(
      '-q,--quick',
      'perform a quick patch release without any checks or confirmation'
    )
    .action(
      async (
        project?: string,
        releaseType?: ReleaseType,
        options?: Partial<ReleaseCommandOptions>
      ) => {
        const { dry = false, quick = false } = options ?? {};

        if (quick) releaseType = 'patch';

        const dryRunInfoLogger = (msg: MaybeArray<string>) =>
          dry
            ? consola.info(
                `${chalk.white('DRY RUN MODE')}: ${ensureArray(msg).join(' ')}`
              )
            : consola.info(msg);

        const dryRunSuccessLogger = (msg: MaybeArray<string>) =>
          dry
            ? consola.success(
                `${chalk.white('DRY RUN MODE')}: ${ensureArray(msg).join(' ')}`
              )
            : consola.success(msg);

        let projectToRelease: string;
        let projectReleaseType: ReleaseType;

        if (quick) {
          projectReleaseType = 'patch';
        }

        if (project) {
          const { existPackages } = CLIUtils;
          if (!existPackages.includes(project)) {
            consola.error(`Project ${chalk.green(project)} not found.`);
            process.exit(1);
          } else {
            projectToRelease = project;
          }
        } else {
          projectToRelease = (
            await enquirer.prompt<{ project: string }>({
              name: 'project',
              message: 'Select project to release:',
              type: 'select',
              choices: CLIUtils.existPackages,
              muliple: false,
            })
          ).project;
        }

        if (releaseType) {
          if (!RELEASE_TYPE_LIST.includes(releaseType)) {
            consola.error(
              `Release type ${chalk.green(releaseType)} not valid.`
            );
            process.exit(1);
          } else {
            projectReleaseType = releaseType;
          }
        } else {
          projectReleaseType = (
            await enquirer.prompt<{ type: ReleaseType }>({
              name: 'type',
              message: 'Select release type:',
              type: 'select',
              choices: RELEASE_TYPE_LIST.reverse(),
              muliple: false,
            })
          ).type;
        }

        const projectDirPath = CLIUtils.resolvePackageDir(projectToRelease);
        const projectPackageJsonPath = path.join(
          projectDirPath,
          'package.json'
        );

        consola.info(`Release Type: ${chalk.cyan(projectReleaseType)}`);

        const { version: rawVersion, name: packageName } =
          CLIUtils.readJsonSync<PackageJson>(projectPackageJsonPath);

        const bumpedVersion = inc(rawVersion, projectReleaseType);

        let remoteVersion: string | null = null;

        try {
          const { version } = await pacote.manifest(packageName);

          remoteVersion = version;
        } catch (error) {
          consola.warn(`Package ${chalk.cyan(packageName)} not published yet.`);
        }

        consola.info(
          `Current version: ${chalk.green(rawVersion)}, Remote version: ${
            remoteVersion ? chalk.cyan(remoteVersion) : chalk.red('NOT FOUND')
          }, Bump to: ${chalk.green(bumpedVersion)}`
        );

        const releaseTag = `${projectToRelease}@${bumpedVersion}`;

        dryRunInfoLogger(`Release ${chalk.cyan(releaseTag)}?`);

        const confirmVersion = quick
          ? true
          : await CLIUtils.createConfirmSelector('Confirm?');

        if (!confirmVersion) {
          consola.info('Release aborted.');
          process.exit(1);
        } else {
          consola.info('Executing release flow...');
        }

        dryRunInfoLogger(
          `Updating ${chalk.cyan(packageName)} version to ${chalk.green(
            bumpedVersion
          )}`
        );

        !dry &&
          CLIUtils.modifyPackageJSON(
            projectPackageJsonPath,
            'version',
            bumpedVersion
          );

        dryRunSuccessLogger(
          `Bumped version info in ${chalk.green(projectPackageJsonPath)}`
        );

        consola.info(`Building project...`);

        await CLIUtils.useChildProcess(
          `pnpm run build --filter=${packageName}`,
          {
            cwd: process.cwd(),
          }
        );

        consola.success(
          `Package ${chalk.white(projectToRelease)}(${chalk.green(
            packageName
          )}) built successfully.`
        );

        if (quick) {
          consola.info(`Quick release mode. Skipping git flow.`);
        } else {
          const { stdout } = await execa('git', ['diff'], {
            stdio: 'pipe',
            cwd: projectDirPath,
          });

          if (!stdout) {
            consola.error('No commit changes found, exit.');
            process.exit(0);
          }

          await CLIUtils.useChildProcess(
            `git add ${projectDirPath} --verbose --dry-run`
          );

          const gitCZCommandArgs = [
            '--type=release',
            `--scope=${projectToRelease.split('-')[0]}`,
            `--subject=Release ${releaseTag}`,
            '--non-interactive',
          ];

          dry
            ? consola.info(
                `${chalk.white('DRY RUN MODE')}: Executing >>> ${chalk.cyan(
                  `git-cz ${gitCZCommandArgs.join(' ')}`
                )}`
              )
            : await CLIUtils.useChildProcess(
                `git-cz --${gitCZCommandArgs.join('')}`
              );

          dry
            ? consola.info(
                `${chalk.white('DRY RUN MODE')}: Executing >>> ${chalk.cyan(
                  `git tag ${releaseTag}`
                )}`
              )
            : await CLIUtils.useChildProcess(`git tag ${releaseTag}`);

          dry
            ? consola.info(
                `${chalk.white('DRY RUN MODE')}: Executing >>> ${chalk.cyan(
                  `git push origin refs/tags/${releaseTag} --verbose --progress`
                )}`
              )
            : await CLIUtils.useChildProcess(
                `git ${[
                  'push',
                  'origin',
                  `refs/tags/${releaseTag}`,
                  '--verbose',
                  '--progress',
                ].join(' ')}`
              );
        }

        dryRunInfoLogger('Pubishing package...');

        const { stdout: logAs } = await execa(
          'npm',
          ['whoami', `--registry=${Constants.releaseRegistry}`],
          {
            cwd: projectDirPath,
            stdio: 'pipe',
            shell: true,
            preferLocal: true,
          }
        );

        consola.info(`You're now logged as ${chalk.bold(chalk.white(logAs))}`);

        await execa(
          'pnpm',
          [
            'publish',
            `--registry=${Constants.releaseRegistry}`,
            '--access=public',
            '--no-git-checks',
          ].concat(dry ? ['--dry-run'] : []),
          {
            cwd: projectDirPath,
            stdio: 'inherit',
            shell: true,
            preferLocal: true,
          }
        );

        dryRunSuccessLogger('Package published.');
      }
    );
}

type MaybeArray<T> = T | T[];

export const ensureArray = <T>(value: MaybeArray<T>): T[] => {
  return Array.isArray(value) ? value : [value];
};
