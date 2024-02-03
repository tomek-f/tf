import { execSync } from 'node:child_process';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { detect } from 'detect-package-manager';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import type { PackageJson } from 'type-fest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const currentDirectory = process.cwd();
const isDevelopment = process.env.NODE_ENV === 'development';
const nodeModulesDirectory =
    __dirname.split(isDevelopment ? '/out' : '/node_modules')[0] +
    '/node_modules';
const cacheDirectory = nodeModulesDirectory + '/.cache/@tf/run-script'; // TODO ? pass this
const cacheFilePath = cacheDirectory + '/cache.json';

const mainGradient = gradient('#bada55', 'hotpink');
const redGradient = gradient('red', 'hotpink');

// debug
// console.log({
//     __dirname,
//     cwd: currentDirectory,
//     isDevelopment,
//     nodeModulesDirectory,
// });

async function main() {
    // const t1 = Date.now();
    let packageJson: string;
    let packageJsonData: PackageJson;
    let cache: Record<string, string> = {};

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

    try {
        await mkdir(cacheDirectory, { recursive: true });
    } catch (error) {
        console.log(redGradient('Error creating cache directory'));
        console.error(error);
        process.exitCode = 5;

        return;
    }

    try {
        await stat(cacheFilePath);
    } catch {
        try {
            await writeFile(cacheFilePath, JSON.stringify({}));
        } catch (error) {
            console.log(redGradient('Error getting/creating cache directory'));
            console.error(error);
            process.exitCode = 6;

            return;
        }
    }

    try {
        const cacheFileData = await readFile(cacheFilePath, 'utf8');

        cache = JSON.parse(cacheFileData) as Record<string, string>;
    } catch (error) {
        console.log(redGradient('Error getting and parsing cache file'));
        console.error(error);
        process.exitCode = 7;

        return;
    }

    // debug
    // console.log({ cache });

    const questions = [
        {
            choices: keys,
            default: cache[currentDirectory] || keys[0],
            message: 'Choose a script to run',
            name: 'script',
            type: 'list',
        },
    ];

    const pm = await detect();

    console.log(mainGradient(`run script using ${pm}`));

    process.stdin.on('keypress', (ch, key) => {
        if (key && key.name === 'escape') {
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(0);
        }
    });

    // console.log(Date.now() - t1);

    const answers = await inquirer.prompt(questions, {});

    cache[currentDirectory] = answers.script;

    try {
        await writeFile(cacheFilePath, JSON.stringify(cache));
    } catch (error) {
        console.log(redGradient('Error writing to cache file'));
        console.error(error);
        process.exitCode = 8;

        return;
    }

    execSync(`${pm} run ${answers.script}`, {
        // cwd: process.cwd(),
        stdio: [process.stdin, process.stdout, process.stderr],
    });
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main();
