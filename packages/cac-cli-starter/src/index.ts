import cac from 'cac';
import consola from 'consola';
import useSubCommand from './sub-command';

const cli = cac('LinbuduLab-CAC-CLI-Starter');

useSubCommand(cli);

consola.info('Preparing Your CLI App...');

cli.help();
cli.parse();
