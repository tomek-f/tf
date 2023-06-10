#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

import gradient from 'gradient-string';
import inquirer from 'inquirer';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
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
