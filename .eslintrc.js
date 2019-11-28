module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        Promise: true,
        sails: true,
        _: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        'block-scoped-var': ['error'],
        'callback-return': [
            'error',
            ['done', 'proceed', 'next', 'onwards', 'callback', 'cb'],
        ],
        camelcase: ['warn', { properties: 'always' }],
        'comma-style': ['warn', 'last'],
        curly: ['warn'],
        eqeqeq: ['error', 'always'],
        'eol-last': ['warn'],
        'handle-callback-err': ['error'],
        indent: [
            'warn',
            2,
            {
                SwitchCase: 1,
                MemberExpression: 'off',
                FunctionDeclaration: { body: 1, parameters: 'off' },
                FunctionExpression: { body: 1, parameters: 'off' },
                CallExpression: { arguments: 'off' },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ignoredNodes: ['ConditionalExpression'],
            },
        ],
        'linebreak-style': ['error', 'unix'],
        'no-dupe-keys': ['error'],
        'no-duplicate-case': ['error'],
        'no-extra-semi': ['warn'],
        'no-labels': ['error'],
        'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
        'no-redeclare': ['warn'],
        'no-return-assign': ['error', 'always'],
        'no-sequences': ['error'],
        'no-trailing-spaces': ['warn'],
        'no-undef': ['off'],
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // ^^Note: If this "no-undef" rule is enabled (set to `["error"]`), then all model globals
        // (e.g. `"Organization": true`) should be included above under "globals".
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        'no-unexpected-multiline': ['warn'],
        'no-unreachable': ['warn'],
        'no-unused-vars': [
            'warn',
            {
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^unused($|[A-Z].*$)',
                argsIgnorePattern: '^unused($|[A-Z].*$)',
                varsIgnorePattern: '^unused($|[A-Z].*$)',
            },
        ],
        'no-use-before-define': ['error', { functions: false }],
        'one-var': ['warn', 'never'],
        'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
        quotes: [
            'warn',
            'single',
            { avoidEscape: false, allowTemplateLiterals: true },
        ],
        semi: ['warn', 'always'],
        'semi-spacing': ['warn', { before: false, after: true }],
        'semi-style': ['warn', 'last'],
    },
};
