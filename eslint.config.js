import reactHooks from 'eslint-plugin-react-hooks';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['dist', 'eslint.config.js'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefreshPlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TypeScript
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];
