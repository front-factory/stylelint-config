export default {
    plugins: [
        '@stylistic/stylelint-plugin'
    ],
    extends: [
        'stylelint-config-recommended-scss'
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
        '@stylistic/indentation': 4,
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/dollar-variable-pattern': null,
        'scss/selector-no-redundant-nesting-selector': true
    }
};
