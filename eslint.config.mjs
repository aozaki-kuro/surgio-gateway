import { FlatCompat } from '@eslint/eslintrc'

import prettierConfigRecommended from 'eslint-plugin-prettier/recommended'
import eslint from '@eslint/js'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: eslint.configs.recommended,
})

const eslintConfig = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
  },
  ...compat.extends('@surgio/eslint-config-surgio'),
  prettierConfigRecommended,
  {
    ignores: ['**/node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
  },
]

export default eslintConfig
