var restrictedGlobals = []; // 全局关键字
module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
    env: {
        browser: true,
        amd: true,
        jquery: true
    },
    rules: { // 定义审查规则 https://eslint.org/docs/rules/
        // https://eslint.org/docs/rules/#possible-errors
        'no-compare-neg-zero': 'error', // 禁用-0 ==> if(-0)
        'no-cond-assign': 'error', // 条件判断中赋值 ==> if(a=1)
        'no-console': 'off', // 调用console输出信息() 发布中需要设置为'warn'
        'no-constant-condition': 'off', // 条件判断中的常量 ==> if(true)
        'no-control-regex': 'warn', // 控制正则表达式字符
        'no-debugger': 'off', // debugger断点 发布中需要设置为'warn'
        'no-dupe-args': 'warn', // 函数参数重复 function foo(a, b, a)
        'no-dupe-keys': 'warn', // 对象属性重复 { bar: 'baz', bar: 'qux' }
        'no-duplicate-case': 'warn', // switch语句出现重复case判断
        'no-empty': [
            'warn', {
                'allowEmptyCatch': true
            }
        ], // 空块 ==> if(a){}
        'no-empty-character-class': 'warn', // 正则表达式中的空 ==> /^abc[]/
        'no-ex-assign': 'warn', // catch中的空e被重新赋值 ==> try {} catch (e) {e = 10;}
        'no-extra-boolean-cast': 'warn', // 不必要的布尔转化 if(!!foo)
        'no-extra-parens': 'off', // 这个规则限制只在必要的地方使用括号
        'no-extra-semi': 'warn', // 多余的分号 ==> ;;
        'no-func-assign': 'warn', // 给函数赋值
        'no-inner-declarations': 'warn', // 在块里定义函数
        'no-invalid-regexp': 'warn', // 无效的正则表达式
        'no-irregular-whitespace': 'off', // 无效的空白
        'no-obj-calls': 'warn', // 不允许调用全局对象属性作为函数
        'no-prototype-builtins': 'warn', // 不允许直接使用Object.prototypes内建的
        'no-regex-spaces': 'warn', // 禁止在正则表达式文字中使用多个空格 ==> var re = /foo   bar/;  var re = /foo {3}bar/;
        'no-sparse-arrays': 'warn', // 不允许稀疏数组  var items = [,]; var colors = [ 'red',, 'blue' ];
        'no-template-curly-in-string': 'warn', // 禁止使用常规字符串的模板文字占位符语法 ==> 避免跟模板字符混淆
        'no-unexpected-multiline': 'warn', // 不要混淆多行表达式
        'no-unreachable': 'warn', // 不可达的代码
        'no-unsafe-finally': 'warn', // 在finally块中禁止控制流程语句
        'no-unsafe-negation': 'warn', // 不允许否定关系运算符的左操作数
        'use-isnan': 'warn', // 在检查NaN时需要调用isNaN（）
        'valid-jsdoc': 'off', // 有效的JSDoc注释
        'valid-typeof': 'warn', // 强制将typeof表达式与有效字符串进行比较
        // https://eslint.org/docs/rules/#best-practices
        'accessor-pairs': 'off', // 在对象中强制执行getter / setter对d
        'array-callback-return': 'warn', // 在数组方法的回调中强制返回语句
        'block-scoped-var': 'off', // 将var作为块作用域
        'class-methods-use-this': 'off', //
        'complexity': 'off', // 限制逻辑负责性
        'consistent-return': 'off', // 限制return必须有确定返回值
        'curly': 'off', // 限制语句必须有花括号 ==> if (foo) foo++;
        'default-case': [
            'warn', {
                'commentPattern': '^no default$'
            }
        ], // 限制switch必须有default 除非使用注释// no default
        'dot-location': ['warn', 'property'], // 点之后强制换行
        'dot-notation': 'off', // 强制使用.访问 []会报错
        'eqeqeq': ['off', 'allow-null'], // 强制使用=== 和 !==
        'guard-for-in': 'off', // 使用Object.prototype.hasOwnProperty.call(foo, key)保护 for in
        'no-alert': 'off', // alert, confirm, and prompt不允许使用
        'no-caller': 'warn', // 不允许使用caller/callee
        'no-case-declarations': 'off', // 在case / default子句中不允许使用词法声明
        'no-div-regex': 'off', // else之前不允许返回
        'no-empty-function': 'off', // 禁止空function
        'no-empty-pattern': 'warn', // 不允许空的解构模式
        'no-eq-null': 'off', // 不允null比较
        'no-eval': 'warn', // 不允使用eval
        'no-extend-native': 'warn', // 禁止扩展本地对象
        'no-extra-bind': 'warn', // 禁止不必要的function bind
        'no-extra-label': 'warn', // 禁止不必要的标签
        'no-fallthrough': 'warn', // 禁止case语句的漏判
        'no-floating-decimal': 'warn', // 禁止浮点数简写 ==> var num = .5
        'no-global-assign': 'warn', // 禁止给原生对象或者全局对象赋值
        'no-implicit-coercion': 'off', // 禁止给原生对象或者全局对象赋值
        'no-implicit-globals': 'warn', // 在全局范围内禁止变量和函数声明
        'no-implied-eval': 'warn', // 禁止隐式的eval  setTimeout('alert('Hi!');', 100);
        'no-invalid-this': 'warn', // 禁止在类或类对象之外使用this
        'no-iterator': 'warn', // 不允许迭代器
        'no-labels': [
            'warn', {
                'allowLoop': true,
                'allowSwitch': false
            }
        ], // 不允labels语法
        'no-lone-blocks': 'warn', // 禁止不必要的嵌套块
        'no-loop-func': 'warn', // 禁止循环中使用function
        'no-magic-numbers': 'off', // 禁止魔术数字 “魔术数字”是代码中多次出现的数字，没有明确的含义。它们应该最好由命名常量替换
        'no-multi-spaces': 'warn', // 禁止多个空格
        'no-multi-str': 'warn', // 不允许多行字符串
        'no-new': 'warn', // 不允使用new不赋值 ==> new Person();   var person = new Person();
        'no-new-func': 'warn', // 不允使用new Function
        'no-new-wrappers': 'warn',
        'no-octal': 'warn', // 禁用八进制
        'no-octal-escape': 'warn', // 禁止字符串文字中的八进制转义序列
        'no-param-reassign': 'off', // 不允许重新分配函数参数
        'no-proto': 'off', // 禁止使用__proto__
        'no-redeclare': 'warn', // 禁止重复定义
        'no-restricted-properties': 'off', // 禁止某些对象属性
        'no-return-assign': 'warn', // 禁止返回一个赋值
        'no-return-await': 'off', // 不允许不必要的返回await
        'no-script-url': 'warn', // 禁止脚本URL ==> location.href = 'javascript:void(0)';
        'no-self-assign': 'warn', // 禁止自我赋值 ==> foo = foo;
        'no-self-compare': 'warn', // 禁止自我比较
        'no-sequences': 'warn', // 禁止使用逗号运算符
        'no-throw-literal': 'warn', // 限制可以抛出的异常
        'no-unmodified-loop-condition': 'off', // 禁止未经修改的循环条件
        'no-unused-expressions': [ // 禁止未被使用的表达式
            'warn', {
                'allowShortCircuit': true,
                'allowTernary': true,
                'allowTaggedTemplates': true,
            },
        ],
        'no-unused-labels': 'warn', // 禁止未使用的label语句
        'no-useless-call': 'warn', // 禁止无效的call apply
        'no-useless-concat': 'warn', // 禁止不必要的字符串连接
        'no-useless-escape': 'warn', // 禁止不必要的字符串转义
        'no-useless-return': 'off', // 禁止多余的返回语句
        'no-void': 'warn', // 禁止void操作符
        'no-warning-comments': 'off', // 禁止警告型注释
        'no-with': 'warn', // 禁用with
        'prefer-promise-reject-errors': 'off', // 要求使用Error对象作为Promise拒绝的原因
        'radix': 'warn', // 要求使用基准参数 var num = parseInt('071', 10);
        'require-await': 'off', //
        'vars-on-top': 'off', // 变量声明放到作用域顶
        'wrap-iife': 'off', // 使用IIFE包装 
        'yoda': 'off', // 禁止Yoda风格 ==> if ( 42 == $value ) { /* ... */ }
        // https://eslint.org/docs/rules/#strict-mode
        'strict': ['off', 'never'],
        // https://eslint.org/docs/rules/#variables
        'init-declarations': ['off', 'always'], // 定义变量是否需要初始化
        'no-catch-shadow': 'warn', // 禁止覆盖catch的变量
        'no-delete-var': 'warn', // 禁止delete
        'no-label-var': 'warn', // 不允许使用label语法变量
        'no-restricted-globals': ['warn'].concat([]), // 禁用的全局变量定义
        'no-shadow': 'warn', // 禁止变量声明覆盖
        'no-shadow-restricted-names': 'warn', // 不允许覆盖关键字
        'no-undef': 'warn', // 禁止未声明的变量
        'no-undef-init': 'warn', // 不允许初始化为undefined
        'no-undefined': 'warn', // 禁止使用undefined
        'no-unused-vars': [
            'warn', {
                'args': 'none',
                'ignoreRestSiblings': true,
            }
        ], // 未使用的变量
        'no-use-before-define': [
            'warn', {
                'functions': false,
                'classes': false,
                'variables': false,
            },
        ], // 定义前未使用
        // https://eslint.org/docs/rules/#stylistic-issues
        'array-bracket-newline': ['warn', 'consistent'], // 在打开和关闭数组括号之前强制换行
        'array-bracket-spacing': ['warn', 'never'], // 禁止或强制方括号内的空格
        'array-element-newline': ['off', 'never'], // 在数组元素之间强制换行
        'block-spacing': ['warn', 'never'], // 强制块之间的空格
        'brace-style': [
            'warn',
            '1tbs', {
                'allowSingleLine': true
            }
        ], // brace风格
        'camelcase': [
            'warn', {
                'properties': 'never'
            }
        ], // camelcase命名
        'capitalized-comments': 'off', // 强制注释首字母大写
        'comma-dangle': ['warn', { // 禁止尾随逗号
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        'comma-spacing': [
            'warn', {
                'before': false,
                'after': true
            }
        ], // 强制逗号间隔
        'comma-style': ['warn', 'last'], // 逗号风格
        'computed-property-spacing': ['warn', 'never'], // 禁止或强制执行属性访问操作中的空格 ==> obj[foo ]
        'consistent-this': ['error', 'me'], // 一致的this命名
        'eol-last': ['warn'], // 文件结尾，保留一个空行
        'func-call-spacing': ['warn', 'never'], // 函数调用空格
        'func-name-matching': ['error', 'never'], // 需要函数名称来匹配它们被赋值的变量或属性的名称
        'func-names': ['warn', 'never'], // 禁止命名的函数表达式
        'func-style': [
            'off',
            'expression', {
                'allowArrowFunctions': true
            }
        ], // 一致的函数声明风格
        'function-paren-newline': ['warn', 'multiline'], // 强制在函数括号内包含换行符
        'id-blacklist': ['off', 'err', 'e', 'cb', 'callback'], // 变量定义黑名单
        'id-length': ['off', { 'min': 2 }], // 变量命名的字数限制
        'id-match': ['off', '^[a-z]+([A-Z][a-z]+)*$'], // 变量命名的规则
        'implicit-arrow-linebreak': ['warn', 'below'], // 定义箭头函数体的返回位置
        'indent': [
            'warn',
            4, {
                'SwitchCase': 1
            }
        ], // 缩进规则
        'jsx-quotes': ['off'], // 在JSX属性中强制使用双引号或单引号
        'key-spacing': [
            'warn', {
                'afterColon': true
            }
        ], // 对象中属性的空格风格
        'keyword-spacing': [
            'warn', {
                'before': true
            }
        ], // 关键字的空格风格
        'line-comment-position': [
            'off', {
                'position': 'above'
            }
        ], // 单行注释的位置
        'linebreak-style': ['off', 'unix'], // 一致的换行样式
        'lines-between-class-members': ['warn', 'never'], // class成员内部的换行
        'max-depth': ['warn', 4], // 块状嵌套最大的数量
        'max-len': [
            'warn', {
                'code': 120,
                'ignoreStrings': true,
                'ignoreUrls': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true
            }
        ], // 代码单行最大字符数
        'max-lines': [
            'off', {
                'max': 300
            }
        ], // 文件最大行数
        'max-nested-callbacks': ['warn', 3], // 强制回调可以嵌套的最大深度
        'max-params': ['warn', 6], // 参数最大个数 由于会对amd报错 因此改成warn
        'max-statements': ['off', 10], // 强制允许在功能块中允许的最大数量的语句
        'max-statements-per-line': [
            'warn', {
                'max': 1
            }
        ], // 强制每行允许的最大数量的语句
        'multiline-comment-style': ['off', 'starred-block'], // 多行注释风格
        'multiline-ternary': ['warn', 'always-multiline'], // 在三元表达式的操作数之间强制或禁止换行
        'new-cap': 'warn', // 需要构造函数名称以大写字母开头
        'new-parens': 'warn', // 调用不带参数的构造函数时需要括号
        'newline-per-chained-call': [
            'warn', {
                'ignoreChainWithDepth': 2
            }
        ], // 在方法链中每次调用之后都需要一个换行符
        'no-array-constructor': 'warn', // 禁用Array构造
        'no-bitwise': 'off', // 禁用位操作
        'no-continue': 'warn', // 禁用continue
        'no-inline-comments': 'off', // 代码后不允许内嵌注释
        'no-lonely-if': 'warn', // if单独出现
        'no-mixed-operators': 'warn', // 禁止混用不同的运算符 可用括号隔开
        'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'], // 禁止混用缩进方式
        'no-multi-assign': 'warn', // 禁止链式赋值
        'no-multiple-empty-lines': [
            'warn', {
                'max': 2
            }
        ], // 定义空行数量
        'no-negated-condition': 'off', // 禁用否定条件
        'no-nested-ternary': 'warn', // 禁止嵌套的三元表达式 
        'no-new-object': 'warn', // 不适用new Object创建对象
        'no-plusplus': 'off', // 禁用++ --操作符
        'no-restricted-syntax': ['warn', 'WithStatement'], // 禁用的语法
        'no-tabs': 'warn', // 禁用tab
        'no-ternary': 'off', // 禁用三元运算符
        'no-trailing-spaces': 'off', // 行尾不加空格
        'no-underscore-dangle': 'off', // 变量声明禁用下划线_
        'no-unneeded-ternary': 'warn', // 禁用不必要的三元操作符
        'no-whitespace-before-property': 'warn', // 在属性之前禁止使用空格
        'nonblock-statement-body-position': ['warn', 'below'], // 单行语句的格式
        'object-curly-newline': [
            'warn', {
                'consistent': true
            }
        ], // 在大括号内的换行符
        'object-curly-spacing': ['off', 'always'], // 在大括号内执行一致的间距 ***
        'object-property-newline': [
            'warn', {
                'allowMultiplePropertiesPerLine': true
            }
        ], // 对象属性独占一行
        'one-var': ['off', 'always'], // 变量在function中声明方式 分开/一起
        'one-var-declaration-per-line': ['warn', 'initializations'], // 变量声明独立一行
        'operator-assignment': 'off', // 是否强制或允许简写运算赋 ==> x += y
        'operator-linebreak': 'off', // 强制运算符换行
        'padded-blocks': 'off', // 块内填充
        'padding-line-between-statements': 'off', // 在语句之间填充行
        'quote-props': 'off', // 属性加引号
        'quotes': 'off', // 引号一致性
        'require-jsdoc': 'off', // jsdoc注释风格
        'semi': ['off', 'always'], // 是否强制句尾分行
        'semi-spacing': [
            'warn', {
                'before': false,
                'after': true
            }
        ], // 分号后面加空格
        'semi-style': ['warn', 'last'], // 分号风格
        'sort-keys': 'off', // 对象属性声明属性排序
        'sort-vars': 'off', // 变量声明属性排序
        'space-before-blocks': ['warn', 'always'], // 块之前的空格
        'space-before-function-paren': ['warn', 'always'], // 参数括号前的空格
        'space-in-parens': ['warn', 'never'], // 括号内的空格
        'space-infix-ops': [
            'warn', {
                'int32Hint': false
            }
        ], // 括号内的空格
        'space-unary-ops': 'off', // 一元运算符之前/之后的空格
        'spaced-comment': ['warn', 'always'], // 注释开始后第一个空格
        'switch-colon-spacing': [
            'off', {
                'after': false,
                'before': false
            }
        ], // switch语句的冒号周围加上间距
        'template-tag-spacing': ['warn', 'always'], // 模板标签及其文字之间的间距
        'unicode-bom': ['off', 'always'], // Unicode BOM
        'wrap-regex': 'off' // 包装正则表达式字面值
    }
}

