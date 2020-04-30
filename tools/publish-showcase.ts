import path from 'path';
import fs from 'fs';
import { publish } from 'gh-pages';

const { log, error } = console;

const link = 'https://pages.github.com/volkov97/extra-components/';

const showcasePath = path.resolve(process.cwd(), '.out');

const repo = 'https://github.com/volkov97/extra-components.git';

if (fs.existsSync(showcasePath)) {
  publish(
    showcasePath,
    {
      dest: 'default',
      repo,
    },
    err => {
      if (err) {
        error(err);

        return;
      }

      log(`Published to ${link}`);
    },
  );
}
