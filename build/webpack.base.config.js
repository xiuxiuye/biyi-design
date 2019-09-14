const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugins = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 入口js路径，注意这里是./而不是../，下面HtmlWebpackPlugins的template属性也一样，我理解的是这里的路径都是相对于项目根目录
  entry: {
    main: './src/main.js'
  },
  // 配置编译文件输出路径
  output: {
    // 以原始文件名的输出文件名
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      // 它会应用到普通的 `.css` 文件以及 `.vue` 文件中的 `<style>` 块，因为魔法插件VueLoaderPlugin
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      // 图片文件处理
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 0,
            outputPath: 'images'
          }
        }
      },
      // 音频文件
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      },
      // 字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      },
      // ejs文件
      {
        test: /\.ejs$/,
        use: ['ejs-loader']
      }
    ]
  },
  plugins: [
    // 自动清空dist文件夹
    new CleanWebpackPlugin(),
    // 设置html模板生成路径
    new HtmlWebpackPlugins({
      filename: 'index.html', // 输出的html文件名，默认index.html
      template: './public/index.ejs', // html模板路径，注意这里也是./而不是../
      chunks: ['main', 'vendor'], // 指定在html自动引入的js打包文件
    }),
    // 将定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          priority: 1, // 优先级配置，优先匹配优先级更高的规则，不设置的规则优先级默认为0
          test: /node_modules/, // 匹配对应文件
          chunks: 'initial',
          name: 'vendor',
          minSize: 0, // 当模块大于minSize时，进行代码分割
          minChunks: 1
        },
        commons:{
          priority: 0,
          chunks: 'initial',
          name:'commons', // 打包后的文件名
          minSize: 0, 
          minChunks: 2 // 重复2次才能打包到此模块
        }
      }
    }
  }
}