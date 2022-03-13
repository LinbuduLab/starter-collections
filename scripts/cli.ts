import cac from 'cac';
import consola from 'consola';

const cli = cac('LinbuduLab-Starter');

consola.info('Preparing CLI App...');

cli.help();
cli.parse();
