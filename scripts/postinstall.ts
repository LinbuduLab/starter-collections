import chalk from 'chalk';
import consola from 'consola';

console.log('');
consola.success(
  `Your workspace has been successfully created, now run ${chalk.bold.cyan(
    '\n\npnpm cli init\n\n'
  )}to initialize workspace projects!`
);
