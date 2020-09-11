const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TeaserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  mode: 'production',
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
      Hooks: path.resolve(__dirname, 'src/hooks'),
      Assets: path.resolve(__dirname, 'assets'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  optimization: {
    minimizer: [new TeaserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: '/node_modules/',
      },
      {
        test: /\.jpg|png|gif|svg$/,
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      title: 'MLB',
      favicon: path.resolve(__dirname, 'assets/mlb-logo.jpg'),
    }),
  ],
}
