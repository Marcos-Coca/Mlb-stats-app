const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Services: path.resolve(__dirname, 'src/services'),
      Pages: path.resolve(__dirname, 'src/pages'),
      Hooks: path.resolve(__dirname, 'src/Hooks'),
      Assets: path.resolve(__dirname, 'assets'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Utils: path.resolve(__dirname, 'src/utils'),
    },
  },

  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: '/node_modules/',
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jpg|png|gif|svg|woff|eot|ttf|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
}
