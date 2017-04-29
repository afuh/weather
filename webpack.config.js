const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require("path");

const isProd = process.env.NODE_ENV === "production";
const cssDev = ['style-loader', 'css-loader','postcss-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader','postcss-loader', 'sass-loader'],
                publicPath: '/dist'
              });


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      },
      {
        test: /\.(s+(a|c)ss|css)$/,
        use: isProd ? cssProd : cssDev
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=images/[hash:6].[ext]'
        // use: 'file-loader?name=[hash:6].[ext]&publicPath=dist/&outputPath=images/' //html bien
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: false,
    overlay: true,
    port: 3000,
    hot: false
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Nuevo Proyecto',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.html',
        // filename: isProd ? './../index.html' : 'index.html'
      }),
      new ExtractTextPlugin({
         filename: 'main.css',
         disable: !isProd,
         allChunks: true
       }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
  ]
};
