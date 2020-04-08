const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      // 它会应用到普通的 `.css` 文件以及 `.vue` 文件中的 `<style>` 块，因为魔法插件VueLoaderPlugin
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      // 图片文件处理
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: { loader: 'url-loader' }
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
        test: /\.(eot|ttf|otf|svg|woff2?)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '/fonts/iconfont.[ext]'
          }
        }
      },
      // ejs文件
      {
        test: /\.ejs$/,
        use: ['ejs-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [path.resolve(__dirname, '../lib')], // 指定检查的目录
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
            formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      }
    ]
  },
  plugins: [
    // 将定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    new VueLoaderPlugin(),
    // 提取CSS
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    })
  ]
}
