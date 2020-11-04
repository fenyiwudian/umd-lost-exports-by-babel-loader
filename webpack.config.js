const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require('path');

module.exports = () => {
  return {
    devServer: {
      writeToDisk: true,
      contentBase: path.resolve(__dirname, 'dist'),
      headers: { "Access-Control-Allow-Origin": "*" },
      host: '0.0.0.0',
      port: 8080,
      hot: true,
    },
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve('./dist')
    },
    module: {
      rules: [
        // my codes and umd packages codes are ES6 mode
        // using babel-loader for umd package result in the loss of umd exported objects
        // remove comment below to try
        {
          test: /(src|lib)[\\/].+\.js$/,
          use: [
            { loader: 'babel-loader' },
          ]
        }
      ]
    },
    optimization: {
      minimize: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
      }),
      new CleanWebpackPlugin()
    ],
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        "umd-module": path.join(__dirname, "lib/umd.js")
      }
    },
  };
};