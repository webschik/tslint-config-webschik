const path = require('path');

module.exports = {
  'extends': 'tslint:recommended',
  'rulesDirectory': [
      path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules')
  ],
  'rules': {
    'eofline': false,
    'ordered-imports': false,
    'interface-name': false,
    'member-ordering': [
      true,
      {
        'order': [
          'private-instance-field',
          'protected-instance-field',
          'public-instance-field',
          'constructor',
          'private-instance-method',
          'protected-instance-method',
          'public-instance-method',
          'private-static-method',
          'protected-static-method',
          'public-static-method'
        ]
      }
    ],
    'member-access': [true, 'no-public'],
    'object-literal-sort-keys': false,
    'no-shadowed-variable': false,
    'no-var-requires': false,
    'no-internal-module': true,
    'no-namespace': [
      true,
      'allow-declarations'
    ],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      },
      {
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        'parameter': 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace'
      }
    ],
    'switch-default': true,
    'triple-equals': [
      true,
      'allow-null-check'
    ],
    'forin': true,
    'no-arg': true,
    'no-switch-case-fall-through': true,
    'no-duplicate-variable': true,
    'no-unused-expression': true,
    'variable-name': [
      true,
      'ban-keywords',
      'allow-pascal-case'
    ],
    'no-trailing-whitespace': true,
    'no-var-keyword': true,
    'jsdoc-format': true,
    'new-parens': true,
    'one-variable-per-declaration': [
      true,
      'ignore-for-loop'
    ],
    'one-line': [
      true,
      'check-catch',
      'check-finally',
      'check-else',
      'check-open-brace'
    ],
    'whitespace': [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-separator',
      'check-type',
      'check-preblock'
    ],
    'quotemark': [
      true,
      'single',
      'jsx-double'
    ],
    'semicolon': [
      true,
      'always'
    ],
    'max-line-length': [true, 120],
    'space-before-function-paren': [true, {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'never'
    }],
    'no-constant-condition': true,
    'trailing-comma': [
      true,
      {
        'multiline': 'never',
        'singleline': 'never'
      }
    ],
    'no-control-regex': true,
    'no-duplicate-case': true,
    'no-empty': true,
    'no-empty-character-class': true,
    'no-extra-semi': true,
    'no-invalid-regexp': true,
    'no-inner-declarations': true,
    'no-irregular-whitespace': true,
    'no-regex-spaces': true,
    'no-unexpected-multiline': true,
    'no-sparse-arrays': true,
    'use-isnan': true,
    'valid-jsdoc': [
      true,
      {
        'prefer': {
          'return': 'returns'
        },
        'requireReturn': false,
        'requireReturnDescription': false,
        'requireParamDescription': false
      }
    ],
    'valid-typeof': true,
    'curly': true,
    'no-eval': true,
    'radix': true,
    'array-bracket-spacing': [
      true,
      'never'
    ],
    'block-spacing': [
      true,
      'never'
    ],
    'brace-style': [
      true,
      '1tbs'
    ],
    'indent': [
      true,
      4
    ]
  }
};
