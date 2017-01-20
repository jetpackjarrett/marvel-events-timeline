module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: [
    'import',
    'jsx-a11y',
    'react'
  ],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jasmine: true,
    jest: true,
    node: true
  },

  // globals: mapValues(globals, () => true),

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      modules: true,
      classes: true,
      experimentalObjectRestSpread: true
    }
  },

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$',
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },

  rules: {
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/jsx-pascal-case': 1,
    'react/jsx-closing-bracket-location': [1, {
      selfClosing: 'after-props',
      nonEmpty: 'after-props'
    }],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [1, { maximum: 3 }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-bind': [2, { ignoreRefs: true }],
    'react/jsx-no-target-blank': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 1,
    'react/no-danger': [1],
    'react/no-string-refs': [1],
    'react/no-deprecated': 1,
    'react/no-is-mounted': 2,
    'react/no-set-state': 0,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': [2, 'always'],
    'react/react-in-jsx-scope': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': ['error'],
    'react/sort-comp': [1],
    'react/sort-prop-types': 1,
    'camelcase': 'error',
    'no-case-declarations': 0,
    'new-cap': ['error', { properties: false }],
    'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
    'dot-location': ['error', 'property'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-dupe-args': ['error'],
    'no-console': [1, { allow: ['info', 'error'] }],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'object-shorthand': ['error', 'always'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-array-constructor': ['error'],
    'no-new-object': ['error'],
    'array-callback-return': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'arrow-parens': ['error', 'always'],
    'no-iterator': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-self-compare': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'no-nested-ternary': 'error',
    'no-useless-constructor': 'error',
    'no-duplicate-imports': 'error',
    'import/imports-first': 'error',
    'operator-assignment': ['error', 'always'],
    'yoda': 'error',
    'no-use-before-define': 'error',
    'import/no-unresolved': 'error',
    'import/export': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
    'import/order': ['error', {
      'newlines-between': 'never',
      'groups': [
        'builtin',
        'external',
        'parent',
        'sibling',
        'internal',
        'index'
      ]
    }],
    'one-var': ['error', {
      var: 'never',
      let: 'never',
      const: 'never'
    }],
    'no-alert': ['error'],
    'comma-style': ['error', 'last'],
    'padded-blocks': ['error', 'never'],
    'no-lonely-if': 'error',
    'no-negated-condition': 1,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-whitespace-before-property': 'error',
    'space-infix-ops': ['error', { int32Hint: false }],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': ['error', { before: true }],
    'eqeqeq': ['error', 'smart'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'quotes': ['error', 'single'],
    'callback-return': 'error',
    'no-mixed-requires': 'error',
    'block-spacing': 'error',
    'max-len': ['error', 120, {
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true
    }]
  }
};
