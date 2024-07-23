/* eslint-disable sort-keys */

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
// eslint-disable-next-line import/default, import/no-named-as-default-member
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
// eslint-disable-next-line import/extensions
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import workspaces from 'eslint-plugin-workspaces';
import globals from 'globals';

const isProductionBuild = process.env.NODE_ENV === 'production';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const config = [
    js.configs.recommended,
    ...fixupConfigRules(
        compat.extends(
            'eslint:recommended', // same as js.configs.recommended?
            'plugin:import/recommended',
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/stylistic',
            'plugin:import/typescript',
            'prettier',
        ),
    ),
    {
        plugins: {
            import: fixupPluginRules(_import),
            '@typescript-eslint': fixupPluginRules(typescriptEslint),
            workspaces,
            'typescript-sort-keys': typescriptSortKeys,
            prettier,
        },
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        settings: {
            react: { version: 'detect' },
            'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
            'import/resolver': {
                typescript: {
                    project: [
                        'tsconfig.json',
                        'apps/*/tsconfig.json',
                        'components/*/tsconfig.json',
                        'libs/*/tsconfig.json',
                        'pocs/*/tsconfig.json',
                        'sites/*/tsconfig.json',
                        'tools/*/tsconfig.json',
                    ],
                },
            },
        },
        rules: {
            'no-console': isProductionBuild ? 'off' : 'off',
            'no-debugger': isProductionBuild ? 'error' : 'warn',
            'max-depth': ['error', 3],
            'max-nested-callbacks': [2, 3],
            'max-params': ['error', 5],

            'padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: ['const', 'let', 'var'],
                    next: '*',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: ['const', 'let', 'var'],
                },
                {
                    blankLine: 'any',
                    prev: ['const', 'let', 'var'],
                    next: ['const', 'let', 'var'],
                },
                { blankLine: 'always', prev: '*', next: 'return' },
            ],
            'padded-blocks': 'off',
            'no-multiple-empty-lines': [
                'error',
                { max: 1, maxBOF: 0, maxEOF: 0 },
            ],
            'object-shorthand': [
                'error',
                'always',
                { ignoreConstructors: false, avoidQuotes: true },
            ],
            'id-denylist': [
                'error',
                'e',
                'ev',
                '_',
                '__',
                '___',
                '____',
                '_____',
                'cb',
            ],
            'no-restricted-imports': [
                'error',
                {
                    paths: [
                        {
                            name: 'react-router',
                            message: 'Please use react-router-dom instead.',
                        },
                    ],

                    patterns: [
                        {
                            group: ['apps/*', 'sites/*'],
                            caseSensitive: true,
                            message:
                                'Please use @tf/… or relative paths instead.',
                        },
                    ],
                },
            ],
            'sort-keys': [
                'error',
                'asc',
                {
                    allowLineSeparatedGroups: true,
                    caseSensitive: true,
                    natural: false,
                    minKeys: 2,
                },
            ],
            'prettier/prettier': 'error',
            'arrow-body-style': 'off',
            'prefer-arrow-callback': 'off',
            'import/no-useless-path-segments': [
                'error',
                { noUselessIndex: true },
            ],
            'import/prefer-default-export': 'off',
            'import/namespace': 'off',
            'import/no-named-as-default': 'off',
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    mjs: 'always',
                    cjs: 'always',
                    jsx: 'never',
                    tsx: 'never',
                    ts: 'never',
                },
            ],
            'import/no-extraneous-dependencies': [
                'error',
                { devDependencies: true },
            ],
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': 'error',
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'error',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',
            'workspaces/no-absolute-imports': 'error',
            'workspaces/no-relative-imports': 'error',
            'workspaces/require-dependency': 'error',
            '@typescript-eslint/member-delimiter-style': 'error',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/consistent-type-definitions': [
                'error',
                'interface',
            ],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports' },
            ],
            'typescript-sort-keys/interface': 'error',
            'typescript-sort-keys/string-enum': 'error',
        },
    },
    {
        files: [
            'pocs/next-playground/**/*.{js,jsx,ts,tsx,cjs,mjs}',
            'pocs/react-playground/**/*.{js,jsx,ts,tsx,cjs,mjs}',
            'sites/internety/**/*.{js,jsx,ts,tsx,cjs,mjs}',
        ],
        ...reactRecommended,
        plugins: { react, 'react-hooks': fixupPluginRules(reactHooks) },
        rules: {
            'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-sort-props': 'error',
            'react/jsx-fragments': 'error',
            'react/jsx-props-no-spreading': 'off',
            'react/button-has-type': ['error', { reset: true }],
            'react/no-danger': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': [
                'error',
                { additionalHooks: 'useLegacyEffect' },
            ],

            '@typescript-eslint/consistent-type-assertions': 'off',
        },
    },
    {
        files: ['pocs/react-playground/**/*.{js,jsx,ts,tsx,cjs,mjs}'],
        ...reactRecommended,
        plugins: { 'react-refresh': reactRefresh },
        rules: { 'react-refresh/only-export-components': 'warn' },
    },
    // {
    //     files: [
    //         'pocs/next-playground/**/*.{js,jsx,ts,tsx,cjs,mjs}',
    //         'sites/internety/**/*.{js,jsx,ts,tsx,cjs,mjs}',
    //     ],
    //     plugins: {
    //         '@next/next': next, // does it work?
    //     },
    //     rules: {
    //         '@next/next/no-html-link-for-pages': 'error',
    //         '@next/next/no-head-element': 'error', // should return error
    //     },
    // },
    {
        ignores: ['**/dist/*', '**/tmp/*', '**/.next/*', '**/out/*'],
    },
];

export default config;
