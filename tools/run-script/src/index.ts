#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

import gradient from 'gradient-string';
import inquirer from 'inquirer';

interface PackageJson {
    scripts: Record<string, string>;
    [x: string]: unknown;
}

const packageJson = JSON.parse(
    readFileSync('./package.json', 'utf8'),
) as PackageJson;
const scripts = packageJson.scripts;
const keys = Object.keys(scripts);
const questions = [
    {
        choices: keys,
        message: 'Choose a script to run',
        name: 'script',
        type: 'list',
    },
];

console.log(gradient('#bada55', 'hotpink')('Hi, welcome to run-script!'));

// TODO ? fix this
// eslint-disable-next-line unicorn/prefer-top-level-await, @typescript-eslint/no-floating-promises
inquirer.prompt(questions).then((answers) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    execSync(`npm run ${answers.script}`, {
        // cwd: process.cwd(),
        stdio: [process.stdin, process.stdout, process.stderr],
    });
});
