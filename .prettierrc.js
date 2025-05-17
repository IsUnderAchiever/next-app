module.exports = {
  // 确保 ESLint 不会向上查找配置文件
  root: true,
  // 使用 TypeScript 解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 支持 ES2020 语法
    ecmaVersion: 2020,
    // 支持 ES 模块
    sourceType: 'module',
    ecmaFeatures: {
      // 支持 JSX
      jsx: true,
    },
  },
  env: {
    // 浏览器环境
    browser: true,
    // Node.js 环境
    node: true,
    // ES6+ 语法支持
    es6: true,
  },
  extends: [
    // ESLint 推荐规则
    'eslint:recommended',
    // TypeScript 推荐规则
    'plugin:@typescript-eslint/recommended',
    // React 推荐规则
    'plugin:react/recommended',
    // 支持 React 17+ 的 JSX 运行时
    'plugin:react/jsx-runtime',
    // Prettier 推荐规则
    'plugin:prettier/recommended',
    // 禁用与 Prettier 冲突的 ESLint 规则
    'prettier',
  ],
  plugins: [
    // React 插件
    'react',
    // Prettier 插件
    'prettier',
    // TypeScript ESLint 插件
    '@typescript-eslint',
  ],
  rules: {
    // 允许未使用的变量，但发出警告
    'no-unused-vars': 'warn',
    // 允许 console，但发出警告
    'no-console': 'warn',
    // React 17+ 不需要此规则
    'react/react-in-jsx-scope': 'off',
    // React 17+ 不需要此规则
    'react/jsx-uses-react': 'off',
    // 允许在 JSX 文件中使用 TS/JS
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],

    'prettier/prettier': [
      'error',
      {
        // 使用单引号
        singleQuote: true,
        // 使用分号
        semi: true,
        // 在对象或数组的最后一个元素后添加逗号
        trailingComma: 'all',
        // 每行的最大字符数
        printWidth: 80,
        // 缩进宽度
        tabWidth: 2,
        // 不使用制表符缩进
        useTabs: false,
        // 自动处理换行符
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    react: {
      // 自动检测 React 版本
      version: 'detect',
    },
  },
}