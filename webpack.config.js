const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  mode:'development',
  entry: {
    main:'./src/index.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname,'dist'),
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist",
    compress: true,
    open:true,
    port: 9000,
    hot:true,
    hotOnly: true
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath:'image/',
          limit:204800
        }
      }
    },{
      test: /\.(svg|woff|eot|ttf)$/,
      use: {
        loader: 'file-loader'
      }
    },{
      test: /\.(css|less)$/,
      use:[
        'style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
}
