import fs from 'fs';
import path from 'path';

const { log } = console;

export function generateComponent(newComponentName: string) {
  const appendEmptyLine = (str: string) => `${str.trim()}\n`;
  const capitalizeName = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

  const componentName = capitalizeName(newComponentName);

  const componentFolder = `src/lib/components/${componentName}`;

  if (fs.existsSync(componentFolder)) {
    log('Already exists.');

    process.exit(1);
  }

  fs.mkdirSync(componentFolder);

  // index

  const indexContent = `export * from './${componentName}';`;

  fs.writeFileSync(path.resolve(componentFolder, 'index.ts'), appendEmptyLine(indexContent), {
    flag: 'a+',
    encoding: 'utf8',
  });

  // component

  const componentContent = `
import React from 'react';

export const ${componentName}: React.FC<{}> = () => {
    return (
        <div>Great component "${componentName}"</div>
    );
};
`;

  fs.writeFileSync(path.resolve(componentFolder, `${componentName}.tsx`), appendEmptyLine(componentContent), {
    flag: 'a+',
    encoding: 'utf8',
  });

  // stories

  const storiesContent = `
import React from 'react';

import { initTheme } from 'src/lib/tools/initTheme';

import { ${componentName} } from './${componentName}';

initTheme();

export default {
    component: ${componentName},
    title: '__dev__/${componentName}',
};

export const Default = () => {
    return (
        <${componentName} />
    );
};
`;

  fs.writeFileSync(path.resolve(componentFolder, `${componentName}.stories.tsx`), appendEmptyLine(storiesContent), {
    flag: 'a+',
    encoding: 'utf8',
  });
}
