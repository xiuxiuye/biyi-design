const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const path = require('path')

module.exports = merge(baseConfig, {
  // 配置编译文件输出路径
  output: {
    // 以原始文件名的输出文件名
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: './dist', //指定需要提供给本地服务的内容的路径，默认加载index.html文件，可根据需要修改
    port: 8080, // 端口设置，默认8080
    hot: true // 开启热更新，浏览器自动刷新
  }
})