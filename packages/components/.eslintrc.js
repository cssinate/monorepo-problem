module.exports = {
  root: true,
  env: {
    'node': true,
    'browser': true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    //Basic formatting stuff
    'operator-linebreak': [2, 'before'],
    'quotes': ['error', 'single'],
    'space-before-function-paren': 0,

    //JS Code Quality
    'semi': ['error', 'always'],
    'no-var': 'error',
    'no-unused-vars': 'error',
    'no-nested-ternary': 'error',

    //Vue standards
    'vue/html-quotes': ['error', 'double'],
    //TODO When Supported
    //'vue/component-name-in-template-casing': ['error', 'PascalCase'],

    //eh?
    'generator-star-spacing': 'off',
    'no-fallthrough': 'off',
    'no-return-assign': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
