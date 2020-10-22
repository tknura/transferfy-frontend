module.exports = {
  root: true,
  ignorePatterns: ['**/node_modules/', '**/serviceWorker.js', '**/generated/**'],
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'global-require': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__REDUX_DEVTOOLS_EXTENSION__',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
        ],
      },
    ],
    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'arrow-parens': 'off',
    'no-confusing-arrow': 'off',
  },

};
