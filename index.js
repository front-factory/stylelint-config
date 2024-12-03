export default {
    plugins: [
        '@stylistic/stylelint-plugin'
    ],
    rules: {
        'at-rule-empty-line-before': [
            'always',
            {
                'except': [
                    'blockless-after-same-name-blockless',
                    'first-nested'
                ],
                'ignore': [
                    'after-comment'
                ],
                'ignoreAtRules': [
                    'else'
                ]
            }
        ],
        'block-no-empty': null,
        '@stylistic/string-quotes': 'double',
        '@stylistic/indentation': 4
    }
};
