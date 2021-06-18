module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state']
      }
    ],
    'vue/no-v-html': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    Vue: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue']
      }
    }
  }
};
