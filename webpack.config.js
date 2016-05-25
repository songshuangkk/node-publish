const path = require('path');

const webpack = require('webpack');
const webpack_validator = require('webpack-validator');

var config = {
  entry: {
    app: path.join(__dirname, 'src/app')
  },
  output: {
    path: path.join(__dirname, 'bundle'),
    sourceMapFilename: '[name].map',
    filename: '[name].js'
  },
  // 使用了inline-source-map的时候，编译结果会比较的大
  // devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx?$/,loader:'babel', exclude: /node_modules/}
    ]
  }
}

module.exports = webpack_validator(config);
