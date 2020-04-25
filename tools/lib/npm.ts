import path from 'path';
import { execSync } from 'child_process';

export function npmPatch() {
  const newVersion = execSync('npm version patch', { encoding: 'utf8' });

  return newVersion.trim();
}

export function npmMinor() {
  const newVersion = execSync('npm version minor', { encoding: 'utf8' });

  return newVersion.trim();
}

export function npmMajor() {
  const newVersion = execSync('npm version major', { encoding: 'utf8' });

  return newVersion.trim();
}

export function npmPublishLatest() {
  execSync('npm publish', {
    cwd: path.resolve(process.cwd(), 'build'),
  });
}

export function npmPublishBeta(version: string) {
  execSync(`npm publish --tag version-${version}`, {
    cwd: path.resolve(process.cwd(), 'build'),
  });
}

export function getCurrentVersion() {
  const { version } = require(path.resolve(process.cwd(), 'package.json'));

  return version;
}

export function npmBeta(branchName: string) {
  const preid = 'beta';
  const version = getCurrentVersion();

  if (!branchName) {
    throw new Error('You need to specify branch name.');
  }

  const newVersion = execSync(`npm version prerelease${version.includes(preid) ? '' : ` --preid=beta.${branchName}`}`, {
    encoding: 'utf8',
  });

  return newVersion.trim();
}
