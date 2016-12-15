const webpack = require('webpack');

module.exports = {
  entry: "./core/app.js",
  output: {
    path: '../',
    library: ['Flatbeat'],
    filename: 'flatbeat.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader?presets[]=es2015',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
};
