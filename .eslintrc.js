module.exports = {
  root: true, // 确保 ESLint 不会向上查找配置文件
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  parserOptions: {
    ecmaVersion: 2020, // 支持 ES2020 语法
    sourceType: 'module', // 支持 ES 模块
    ecmaFeatures: {
      jsx: true, // 支持 JSX
    },
  },
  env: {
    browser: true, // 浏览器环境
    node: true, // Node.js 环境
    es6: true, // ES6+ 语法支持
  },
  extends: [
    'eslint:recommended', // ESLint 推荐规则
    'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
    'plugin:react/recommended', // React 推荐规则
    'plugin:react/jsx-runtime', // 支持 React 17+ 的 JSX 运行时
    'plugin:prettier/recommended', // Prettier 推荐规则
    'prettier', // 禁用与 Prettier 冲突的 ESLint 规则
  ],
  plugins: [
    'react', // React 插件
    'prettier', // Prettier 插件
    '@typescript-eslint', // TypeScript ESLint 插件
  ],
  rules: {
    // ESLint 规则
    'no-unused-vars': 'warn', // 允许未使用的变量，但发出警告
    'no-console': 'warn', // 允许 console，但发出警告
    'react/react-in-jsx-scope': 'off', // React 17+ 不需要此规则
    'react/jsx-uses-react': 'off', // React 17+ 不需要此规则
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }], // 允许在 JSX 文件中使用 TS/JS

    // Prettier 规则
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
        semi: true, // 使用分号
        trailingComma: 'all', // 在对象或数组的最后一个元素后添加逗号
        printWidth: 80, // 每行的最大字符数
        tabWidth: 2, // 缩进宽度
        useTabs: false, // 不使用制表符缩进
        endOfLine: 'auto', // 自动处理换行符
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // 自动检测 React 版本
    },
  },
}