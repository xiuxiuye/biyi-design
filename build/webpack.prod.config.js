const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    main: './library/index.js'
  },
  output: {
    // 以原始文件名的输出文件名
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  // 增加一个配置，在iview中定义的，百度说是支持不同的加载方式
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    // 自动清空dist文件夹
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(
      {
        cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
        cssProcessorOptions: { 
          discardComments: { removeAll: true } 
        },
        canPrint: true //是否将插件信息打印到控制台
      }
    )
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true,
  //       }
  //     }
  //   },
  // }
})