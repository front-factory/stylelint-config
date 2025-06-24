export default {
    plugins: [
        '@stylistic/stylelint-plugin'
    ],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss'
    ],
    rules: {
        'alpha-value-notation': 'number',
        'at-rule-empty-line-before': [
            'always',
            {
                'except': [
                    'after-same-name',
                    'blockless-after-same-name-blockless',
                    'first-nested',
                    'inside-block'
                ],
                'ignore': [
                    'after-comment'
                ],
                'ignoreAtRules': [
                    'at-root',
                    'include',
                    'function',
                    'mixin',
                    'if',
                    'each',
                    'return'
                ]
            }
        ],
        'block-no-empty': null,
        'color-function-notation': 'modern',
        'color-hex-length': 'short',
        'custom-property-pattern': null,
        'declaration-no-important': true,
        'import-notation': 'string',
        'selector-attribute-quotes': 'always',
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': null,
        'shorthand-property-no-redundant-values': true,
        '@stylistic/at-rule-name-space-after': 'always',
        '@stylistic/at-rule-semicolon-space-before': 'never',
        '@stylistic/indentation': 4,
        '@stylistic/string-quotes': 'double',
        '@stylistic/max-line-length': null,
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/at-mixin-argumentless-call-parentheses': 'never',
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/comment-no-loud': true,
        'scss/double-slash-comment-empty-line-before': [
            'always',
            {
                'ignore': [
                    'between-comments',
                    'stylelint-commands'
                ]
            }
        ],
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/dollar-variable-pattern': null,
        'scss/no-global-function-names': true,
        'scss/selector-no-redundant-nesting-selector': true
    }
};
