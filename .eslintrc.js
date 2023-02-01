module.exports = {
    "extends": [
        // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier',
    ],
    "env": {
        "browser": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint/eslint-plugin"
    ],
    "rules": {
        "@typescript-eslint/interface-name-prefix": "off",
    }
}
