import fs from 'fs';
import { promisify } from 'util';
import childProcess from 'child_process';
import rimraf from 'rimraf';

import { removeBuilds } from './lib/builds';

const { log } = console;

const exec = promisify(childProcess.exec);

function copyPackageJSON() {
  const packageJSON = require('../package.json');

  delete packageJSON.scripts;
  delete packageJSON.devDependencies;

  fs.writeFileSync('build/package.json', JSON.stringify(packageJSON, null, 2), { encoding: 'utf8' });
}

function createLightPackageJSONForTreeShaking() {
  const content = {
    main: 'index.js',
    sideEffects: ['*.css'],
  };

  fs.writeFileSync('build/icons/package.json', JSON.stringify(content, null, 2), { encoding: 'utf8' });

  fs.writeFileSync('build/components/package.json', JSON.stringify(content, null, 2), { encoding: 'utf8' });
}

async function main() {
  removeBuilds();

  await exec('cp -r src/lib build');

  ['ts', 'tsx'].forEach(extension => {
    rimraf.sync(`build/**/*.${extension}`);
  });

  await Promise.all([exec('tsc --project tsconfig.lib.json')]);

  copyPackageJSON();

  createLightPackageJSONForTreeShaking();
}

try {
  main();
} catch (err) {
  log(err);

  process.exit(1);
}
