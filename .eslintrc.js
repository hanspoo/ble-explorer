module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-use-before-define': 'off',
    'react/destructuring-asignment': 'off',
    'react/jsx-filename-extension': 'off',
    'comma-dangle': 'off'
  },
  globals: {
    fetch: false
  }
};
