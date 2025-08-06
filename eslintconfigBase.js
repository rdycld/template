import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import reactPlugin from 'eslint-plugin-react';

export const eslintConfigBase = [
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
      react: reactPlugin,
    },
    rules: {
      'unicorn/no-lonely-if': ['error'],
      'unicorn/no-array-for-each': ['error'],
      'unicorn/no-abusive-eslint-disable': ['error'],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'no-restricted-exports': [
        'error',
        {
          restrictDefaultExports: {
            direct: true,
          },
        },
      ],
    },
  },
];
