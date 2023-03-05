module.exports = {
  extends: [
    '@anidge/eslint-config',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react
    'react/destructuring-assignment': ['warn', 'always'],
    'react/display-name': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': ['warn', { props: 'always' }],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': [
      'warn',
      { callbacksLast: true, shorthandFirst: true },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
