const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
    // 方便追踪源代码错误
    devtool: 'source-map'
})