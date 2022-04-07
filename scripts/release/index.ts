import { CAC } from 'cac';
import fs from 'fs-extra';
import path from 'path/posix';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import consola from 'consola';
import pacote from 'pacote';
import execa from 'execa';
import { CLIUtils, Constants } from '../utils';
import { ReleaseType, inc, compare } from 'semver';
import simpleGit from 'simple-git';

interface ReleaseCommandOptions {
  dryRun: boolean;
  quick: boolean;
}

/**
 * Workflow:
 *
 * 1. Select release project and release version(if not specified, use prompt)
 * 2. Check current version and registry version
 * 3. Bump version
 * 4. Compose Tag
 * 5. Update version
 * 6. Build with dependencies
 * 7. Run git diff
 * 8. Run git add and git cz
 * 9. Run git tag
 * 10. Run git push
 * 11. Check npm whoami
 * 12. Publish package
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
    .option('-d,--dryRun', 'execute in dry run mode')
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
        console.log(project, releaseType, options);
      }
    );
}
