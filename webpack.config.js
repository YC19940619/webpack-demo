const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,'dist'),
    publicPath: "./"
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
      use:['style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
}
