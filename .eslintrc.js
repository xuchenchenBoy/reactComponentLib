module.exports = {
  extends: ['eslint:recommended'],
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      modules: true
    }
  },
  globals: {
    PropTypes: true,
    ReactDOM: true,
    React: true,
    antd: true,
  },
  rules: {
    'no-debugger': ['off'],
    'react/no-find-dom-node': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-script-url': 'off',
    'semi': ["warn"]
  }
};