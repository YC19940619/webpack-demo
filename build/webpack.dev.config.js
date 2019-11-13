const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const devConfig = {
  mode:'development',
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist",
    compress: true,
    open:true,
    port: 9000,
    hot:true,
    hotOnly: true
  },
  optimization: {
    usedExports: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
}
module.exports = merge(commonConfig, devConfig)
