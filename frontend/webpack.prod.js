const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
require('dotenv').config()

module.exports = {
  devtool: false,
  entry: {
    main: [
      '@babel/polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',

  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel', 'emotion'],
          },
        }],
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          'img-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'assets/images' },
    ]),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
    }),
  ],
  externals: {
    config: JSON.stringify({
      apiUrl: process.env.API_URL
    })
  },
  node: {
    fs: 'empty'
  }
}
