module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint', 'workspaces', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // alwaysTryTypes: true, // ? todo
        project: [
          'tsconfig.json',
          'apps/*/tsconfig.json',
          'components/*/tsconfig.json',
          'libs/*/tsconfig.json',
          'tools/*/tsconfig.json',
        ],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',

    'max-depth': ['error', 3],
    'max-len': ['error', 100, 2, { ignoreComments: true }],
    'max-nested-callbacks': [2, 3],
    'max-params': ['error', 5],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'padded-blocks': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    /* prettier */
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',

    /* import */
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        // "js": "never",
        // "jsx": "never",
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    /* react */
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': [
      'error',
      {
        reset: true,
      },
    ],
    'react/no-danger': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    /* react-hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: 'useLegacyEffect',
      },
    ],

    /* disable normal and reenable in TS */
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    semi: 'off',
    '@typescript-eslint/semi': 'error',
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

    /* workspaces */
    'workspaces/no-absolute-imports': 'error',
    'workspaces/no-relative-imports': 'error',
    'workspaces/require-dependency': 'error',

    /* TS */
    '@typescript-eslint/explicit-module-boundary-types': 'off', // see overrides
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

    /* something ;) */
    /* something ;) */
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-router',
            message: 'Please use react-router-dom instead.',
          },
          // {
          //   name: 'react-router-dom',
          //   importNames: ['useHistory', 'useLocation'],
          //   message: 'Please use typed useAppHistory/useAppLocation from @boldpl/common/hooks.',
          // },
          // {
          //   name: 'react-redux',
          //   importNames: ['useSelector', 'useDispatch'],
          //   message: 'Please use typed useAppSelector/useDispatch from @boldpl/common/hooks/state.',
          // },
        ],
        patterns: [
          {
            group: ['apps/*'],
            caseSensitive: true,
            message: 'Please use @tf/… or relative paths instead.',
          },
        ],
      },
    ],

    /* jsx-a11y */
    // 'jsx-a11y/anchor-is-valid': [
    //   'error',
    //   {
    //     components: ['Link'],
    //     specialLink: ['hrefLeft', 'hrefRight', 'to'],
    //     aspects: ['noHref', 'invalidHref', 'preferButton'],
    //   },
    // ],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  overrides: [
    {
      files: ['*.ts(x)'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          { allowHigherOrderFunctions: true },
        ],
        'react/require-default-props': 'off',
      },
    },
  ],
};
