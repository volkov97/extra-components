import { removeBuilds, buildLib } from './lib/builds';
import { npmPatch, npmPublishLatest } from './lib/npm';

const { log } = console;

function main() {
  removeBuilds();

  log('Updating version...');

  const newVersion = npmPatch();

  log(newVersion);

  log('Building...');

  buildLib();

  npmPublishLatest();
}

main();
