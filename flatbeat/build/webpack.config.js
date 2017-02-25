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
        loader: 'babel-loader',
        test: /\.jsx?$/,
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /(node_modules|bower_components)/
      }
      // ,
      // {
      //   loader: 'pug-html-loader',
      //   // pass options to pug as a query ('pug-html-loader?pretty')
      //   include: /\.pug/,
      // },
      // {
      //   test: /\.js$/,
      //   loader: 'jsx',
      //   exclude: /node_modules/
      // }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
  //,

  //,
  //plugins: [
  //  new webpack.optimize.UglifyJsPlugin({ minimize: true })
  //]
};
