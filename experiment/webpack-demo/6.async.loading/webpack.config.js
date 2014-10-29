
// webpack.config.js

var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: '/Users/Chunghe_Fang/dev/webpack-demo/6.async.loading/build',
    publicPath: '/build/', // This is used to generate URLs, without this, 1.bundle.js won't load from build folder
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }  
    ]       
  },
};
