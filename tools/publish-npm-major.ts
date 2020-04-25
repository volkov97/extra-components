import { removeBuilds, buildLib } from './lib/builds';
import { npmMajor, npmPublishLatest } from './lib/npm';

const { log } = console;

function main() {
  removeBuilds();

  log('Updating version...');

  const newVersion = npmMajor();

  log(newVersion);

  log('Building...');

  buildLib();

  npmPublishLatest();
}

main();
