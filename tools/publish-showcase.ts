import path from 'path';
import fs from 'fs';
import { publish } from 'gh-pages';

const { log, error } = console;

const link = 'https://pages.github.com/volkov97/components-web/';

const showcasePath = path.resolve(process.cwd(), '.out');

const { BRANCH_NAME } = process.env;

const repo = 'https://github.com/tech-notes/components-web.git';

log(BRANCH_NAME, repo);

if (fs.existsSync(showcasePath)) {
  publish(
    showcasePath,
    {
      dest: BRANCH_NAME || 'default',
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
