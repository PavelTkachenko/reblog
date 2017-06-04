const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, './'),

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        }
      }, {
        test: /\.(ttf|eot|svg)$/,
        use: {
          loader: 'file-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
