import { prompt } from 'inquirer';

export async function askForComponentName() {
  const answers = await prompt([
    {
      type: 'input',
      name: 'componentName',
      message: 'Enter your new component name',
      validate: input => typeof input === 'string' && input.length > 2,
    },
  ]);

  return answers.componentName;
}
