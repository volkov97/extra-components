import { execSync } from 'child_process';

export function getBranchName() {
  const branch = execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8',
  });

  return branch.trim();
}

export function createBranch(branchName: string) {
  execSync(`git checkout -b ${branchName}`);
}
