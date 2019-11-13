const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin/dist/clean-webpack-plugin');
module.exports = {
  entry: {
    main:'./src/index.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname,'../dist'),
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
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: "vendors.js"
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename: "main2.js"
        }
      }
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
}
