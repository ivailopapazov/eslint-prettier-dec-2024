import js from '@eslint/js'
import globals from 'globals'
// import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
// import stylistic from '@stylistic/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    {
        // plugins: {
        //     '@stylistic': stylistic,
        // },
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            'indent': ['warn', 4],
            // '@stylistic/indent': ['warn', 4],
        },
    },
    // eslintConfigPrettier, // eslintPluginPrettier set this up
    eslintPluginPrettier,
]
