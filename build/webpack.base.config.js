const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugins = require('html-webpack-plugin')

module.exports = {
    // 入口js路径，注意这里是./而不是../，下面HtmlWebpackPlugins的template属性也一样，我理解的是这里的路径都是相对于项目根目录
    entry: './src/main.js',
    // 配置编译文件输出路径
    output: {
        // 以原始文件名的输出文件名
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        // 自动清空dist文件夹
        new CleanWebpackPlugin(),
        // 设置html模板生成路径
        new HtmlWebpackPlugins({
            filename: 'index.html', // 输出的html文件名，默认index.html
            template: './public/index.html', // html模板路径，注意这里也是./而不是../
            chunks: ['main'] // 指定在html自动引入的js打包文件
        })
    ]
}
