const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  rules: {
    /* possible errors */
    'no-console': isProd ? 'error' : 'warn',
    'no-debugger': isProd ? 'error' : 'warn',

    /* TS */
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-var-requires': 'error',
  },
};
