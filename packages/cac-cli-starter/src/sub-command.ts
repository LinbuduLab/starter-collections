import { CAC } from 'cac';
import chalk from 'chalk';
import consola from 'consola';

export default function useSubCommand(cli: CAC) {
  cli.command('sub', 'sub-command description', {}).action(async () => {
    consola.success(chalk.green('Sub command successfully executed!'));
  });
}
