module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'node': true,
    'es2020': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'ignorePatterns': ['**/brands/**', '**/docs/**', '**/dist/**'],
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    //Basic formatting stuff
    'operator-linebreak': [2, 'before'],
    'quotes': ['error', 'single'],
    'space-before-function-paren': 0,

    //editor config
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],

    //JS Code Quality
    'semi': ['error', 'always'],
    'no-var': 'error',
    'no-unused-vars': 'error',
    'no-nested-ternary': 'error',

  }
};
