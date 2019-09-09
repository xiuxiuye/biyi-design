const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
    devServer: {
        contentBase: './dist', //指定需要提供给本地服务的内容的路径，默认加载index.html文件，可根据需要修改
        port: 8080, // 端口设置，默认8080
        hot: true // 开启热更新，浏览器自动刷新
    }
})