#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

import gradient from 'gradient-string';
import inquirer from 'inquirer';

interface PackageJson {
  scripts: Record<string, string>;
  [x: string]: unknown;
}

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8')) as PackageJson;
const scripts = packageJson.scripts;
const keys = Object.keys(scripts);
const questions = [
  {
    type: 'list',
    name: 'script',
    message: 'Choose a script to run',
    choices: keys,
  },
];

console.log(gradient('#bada55', 'hotpink')('Hi, welcome to run-script!'));

inquirer.prompt(questions).then((answers) => {
  execSync(`npm run ${answers.script}`, {
    // cwd: process.cwd(),
    stdio: [process.stdin, process.stdout, process.stderr],
  });
});
