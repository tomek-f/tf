import { execSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';

import { detect } from 'detect-package-manager';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import type { PackageJson } from 'type-fest';

const redGradient = gradient('red', 'hotpink');

async function main() {
    let packageJson: string;
    let packageJsonData: PackageJson;

    try {
        packageJson = await readFile('./package.json', 'utf8');
    } catch (error) {
        console.log(
            redGradient('No package.json found in the current directory'),
        );
        console.error(error);
        process.exitCode = 1;

        return;
    }

    try {
        packageJsonData = JSON.parse(packageJson);
    } catch (error) {
        console.log(redGradient('Error parsing package.json'));
        console.error(error);
        process.exitCode = 2;

        return;
    }

    if (!packageJsonData.scripts) {
        console.log(redGradient('No scripts field found in package.json'));

        process.exitCode = 3;

        return;
    }

    const keys = Object.keys(packageJsonData.scripts);

    if (keys.length === 0) {
        console.log(redGradient('Scripts field empty in package.json'));

        process.exitCode = 4;

        return;
    }

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

    process.stdin.on('keypress', (ch, key) => {
        if (key && key.name === 'escape') {
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(0);
        }
    });

    const answers = await inquirer.prompt(questions);

    execSync(`${pm} run ${answers.script}`, {
        // cwd: process.cwd(),
        stdio: [process.stdin, process.stdout, process.stderr],
    });
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main();
