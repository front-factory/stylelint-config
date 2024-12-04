export default {
    plugins: [
        '@stylistic/stylelint-plugin'
    ],
    rules: {
        'alpha-value-notation': 'number',
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
        'custom-property-pattern': null,
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': null,
        '@stylistic/string-quotes': 'double',
        '@stylistic/indentation': 4
    }
};
