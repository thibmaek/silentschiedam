'use strict';

let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');

let config = require('./_config');

let NODE_ENV = '\'development\'';

process.argv.forEach(arg => {
  if(arg === '-p' || arg === '-d') NODE_ENV = '\'production\'';
});

module.exports = {
  entry: [
    config.build('js', 'src'), //JavaScript entry point
    config.build('css', 'src') //CSS entry point
  ],
  output: {
    path: config.js.dest.path,
    filename: config.js.dest.file //JavaScript end point
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          babelrc: path.join(__dirname, '.babelrc')
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass?outputStyle=expanded')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url-loader?limit=5000&name=../img/img-[hash:6].[ext]']
      }
    ]
  },
  postcss: function(){
    return [
      require('postcss-will-change'),
      require('postcss-cssnext')({
        browsers: ['IE >= 10', 'last 2 version'],
        features: {autoprefixer: {cascade: false}}
      })
    ];
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin(
      config.build('css', 'dest') //extract CSS into seperate file
    ),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: NODE_ENV} //react smaller build
    })
  ],
  eslint: {
    configFile: path.join(__dirname, '.eslintrc'),
    ignorePath: path.join(__dirname, '.eslintignore'),
    formatter: require('eslint-formatter-pretty'),
    fix: true
  },
  resolve: {
    extensions: ['', '.json', '.js', '.css', '.jsx'],
    fallback: path.join(__dirname, 'node_modules')
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules')
  }
};
