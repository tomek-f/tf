import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

import { detect } from 'detect-package-manager';
import gradient from 'gradient-string';
import inquirer from 'inquirer';

interface PackageJson {
    scripts: Record<string, string>;
    // eslint-disable-next-line typescript-sort-keys/interface
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

const pm = await detect();

console.log(gradient('#bada55', 'hotpink')(`run script using ${pm}`));

const answers = await inquirer.prompt(questions);

execSync(`${pm} run ${answers.script}`, {
    // cwd: process.cwd(),
    stdio: [process.stdin, process.stdout, process.stderr],
});
