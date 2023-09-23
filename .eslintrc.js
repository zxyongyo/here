module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended', // https://eslint.bootcss.com/docs/rules/
    'plugin:vue/vue3-recommended' // https://eslint.vuejs.org/
  ],
  plugins: ['vue'],
  // 全局变量
  globals: {
    uni: 'readonly', // 'writable'-允许重写  'readonly'-只读  'off'-禁用
    getCurrentPages: 'readonly',
    WeixinJSBridge: 'readonly',
    wx: 'readonly'
  },
  /**
     * "off" or 0 - 关闭规则
     * "warn" or 1 - 将规则视为一个警告（不会导致程序退出）
     * "error" or 2 - 将规则视为一个错误 (当被触发的时候，程序会退出)
     */
  rules: {
    'vue/v-on-event-hyphenation': ['warn', 'always', {
      autofix: true,
      ignore: []
    }],
    // 限制每行的最多属性数
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 10 // 单行最多10个属性
      },
      multiline: {
        max: 1 // 多行每行最多1个属性
      }
    }],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
    // 单行元素内容前后需要换行
    'vue/singleline-html-element-content-newline': ['off', {
      ignoreWhenNoAttributes: true, // 当元素没有属性时忽略
      ignoreWhenEmpty: true // 当元素没有内容时忽略
    }],
    // {{}} 插值前后必须有空格
    'vue/mustache-interpolation-spacing': ['warn', 'always'],
    // 多行元素的内容前后需要换行
    'vue/multiline-html-element-content-newline': 'off',
    // 禁止使用v-html
    'vue/no-v-html': 'off',
    // 标签关闭
    'vue/html-self-closing': 'warn',
    // 属性顺序
    'vue/attributes-order': ['warn', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      alphabetical: false
    }],
    // 组件名  PascalCase | kebab-case
    'vue/component-name-in-template-casing': ['warn', 'PascalCase', {
      registeredComponentsOnly: true,
      ignores: []
    }],

    // 对象键只在必须时加引号
    'quote-props': ['warn', 'as-needed'],
    // 强制 setter 和 getter 成对出现
    'accessor-pairs': 'warn',
    // 箭头函数的参数使用圆括号
    'arrow-parens': ['warn', 'as-needed'],
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': ['warn', {
      before: true,
      after: true
    }],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['warn', 'always'],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': ['warn', '1tbs', {
      allowSingleLine: true // 允许开括号和闭括号在同一行
    }],
    // 强制使用驼峰命名
    camelcase: 'off',
    // 强制或禁止末尾逗号
    'comma-dangle': ['warn', 'never'],
    // 强制在逗号前后使用一致的空格
    'comma-spacing': ['warn', {
      before: false,
      after: true
    }],
    // 强制使用一致的逗号风格
    'comma-style': ['warn', 'last'],
    // ts 不允许使用 ！
    'constructor-super': 'warn',
    curly: ['warn', 'multi-line'],
    'dot-location': ['warn', 'property'],
    'eol-last': 'warn',
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'generator-star-spacing': ['warn', {
      before: true,
      after: true
    }],
    'handle-callback-err': ['warn', '^(err|error)$'],
    indent: ['warn', 2, {
      SwitchCase: 1
    }],
    'jsx-quotes': ['warn', 'prefer-single'],
    'key-spacing': ['warn', {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': ['warn', {
      before: true,
      after: true
    }],
    'new-cap': ['warn', {
      newIsCap: true,
      capIsNew: false
    }],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-console': 'off',
    'no-class-assign': 'warn',
    'no-cond-assign': 'warn',
    'no-const-assign': 'warn',
    'no-control-regex': 'off',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-extra-parens': ['warn', 'functions'],
    'no-fallthrough': 'warn',
    'no-floating-decimal': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-inner-declarations': ['warn', 'functions'],
    'no-invalid-regexp': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', {
      allowLoop: false,
      allowSwitch: false
    }],
    'no-lone-blocks': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    // 禁止连续空行
    'no-multiple-empty-lines': ['warn', {
      max: 2 // 最多空 2 行
    }],
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-object': 'warn',
    'no-new-require': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-path-concat': 'warn',
    'no-proto': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-return-assign': ['warn', 'except-parens'],
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-spaced-func': 'warn',
    'no-sparse-arrays': 'off',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'off',
    'no-undef-init': 'warn',
    'no-unexpected-multiline': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unneeded-ternary': ['warn', {
      defaultAssignment: false
    }],
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'warn',
    'no-unused-vars': 'off',
    'no-useless-call': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'off',
    'no-whitespace-before-property': 'warn',
    'no-with': 'warn',
    'one-var': ['warn', {
      initialized: 'never'
    }],
    'operator-linebreak': ['warn', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': ['warn', 'never'],
    quotes: ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    semi: ['warn', 'never'], // 加不加分号
    'semi-spacing': ['warn', {
      before: false,
      after: true
    }],
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': ['warn', {
      anonymous: 'always', // function () {}
      named: 'never', // function foo () {}
      asyncArrow: 'always' // async () => {}
    }],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': ['warn', {
      words: true,
      nonwords: false
    }],
    'spaced-comment': ['warn', 'always', {
      markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',', '/']
    }],
    'template-curly-spacing': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'wrap-iife': ['warn', 'any'],
    'yield-star-spacing': ['warn', 'both'],
    yoda: ['warn', 'never'],
    'prefer-const': 'warn',
    'object-curly-spacing': ['warn', 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': ['warn', 'never']
  }
}

