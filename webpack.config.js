const webpack = require('webpack');
const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './client/src/app.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs',
            'transform-decorators-legacy',
            'transform-class-properties'
          ],
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/client/js'),
    filename: 'app.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
