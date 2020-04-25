import dotenv from 'dotenv';

import { askForComponentName } from './lib/inquirer';
import { createBranch } from './lib/git';
import { generateComponent } from './lib/generate-component';

const { log } = console;

dotenv.config();

async function main() {
  const componentName = await askForComponentName();

  const branchName = `${componentName}-dev`;

  createBranch(branchName);

  log(`Now on branch ${branchName}, ready for developing!`);

  log('Generating your component template...');

  generateComponent(componentName);

  log(
    `Done!\nYour component template could be found at src/lib/components/${componentName}!\nRun "npm start" to open storybook, go to __dev__ section and start developing!\nHappy coding!`,
  );
}

main();
