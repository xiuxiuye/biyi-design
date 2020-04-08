const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const HtmlWebpackPlugins = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  // 入口js路径，注意这里是./而不是../，下面HtmlWebpackPlugins的template属性也一样，我理解的是这里的路径都是相对于项目根目录
  entry: {
    main: './examples/main.js'
  },
  plugins: [
    // 设置html模板生成路径
    new HtmlWebpackPlugins({
      filename: 'index.html', // 输出的html文件名，默认index.html
      template: './public/index.ejs', // html模板路径，注意这里也是./而不是../
      chunks: ['main', 'vendor'], // 指定在html自动引入的js打包文件
    })
  ],
  devServer: {
    contentBase: './dist', //指定需要提供给本地服务的内容的路径，默认加载index.html文件，可根据需要修改
    port: 8886, // 端口设置，默认8080
    hot: true // 开启热更新，浏览器自动刷新
  }
})
