const path = require('path')
const webpack = require('webpack')
const devMode = process.env.NODE_ENV !== 'production';
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    library:'vue-notification',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader','css-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  externals: {
    vue: 'vue'
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true
  },

  performance: {
    hints: false
  },

  devtool: '#source-map',

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'vueup.css',
      disable: process.env.NODE_ENV === 'development'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
