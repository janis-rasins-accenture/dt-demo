const nx = require('@nx/eslint-plugin');
const reactHooks = require('eslint-plugin-react-hooks');
const prettierConfig = require('./.prettierrc.js');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': ['error', prettierConfig],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];
