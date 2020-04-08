module.exports = {
  root: true, 
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true,
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/name-property-casing': ['error', 'kebab-case']
  }
}