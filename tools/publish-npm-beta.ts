import { npmBeta, npmPublishBeta } from './lib/npm';
import { getBranchName } from './lib/git';
import { removeBuilds, buildLib } from './lib/builds';

const { log } = console;

async function main() {
  const newVersion = npmBeta(getBranchName());

  log(newVersion);

  removeBuilds();

  log('Building...');

  buildLib();

  log('Built.');

  npmPublishBeta(newVersion);
}

main();
