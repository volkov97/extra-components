import { execSync } from 'child_process';
import rimraf from 'rimraf';

export function buildLib() {
  execSync('npm run build:lib');
}

export function removeBuilds() {
  rimraf.sync(process.cwd() + '/build*');
}
