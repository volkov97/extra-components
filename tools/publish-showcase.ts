import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

const { error } = console;

const showcasePath = path.resolve(process.cwd(), '.out');

if (fs.existsSync(showcasePath)) {
  try {
    execSync(`now`, { cwd: process.cwd() });
  } catch (err) {
    error(err);
  }
} else {
  throw new Error('.out folder does not exist');
}
