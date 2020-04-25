import { removeBuilds, buildLib } from './lib/builds';
import { npmMinor, npmPublishLatest } from './lib/npm';

const { log } = console;

function main() {
  removeBuilds();

  log('Updating version...');

  const newVersion = npmMinor();

  log(newVersion);

  log('Building...');

  buildLib();

  npmPublishLatest();
}

main();
