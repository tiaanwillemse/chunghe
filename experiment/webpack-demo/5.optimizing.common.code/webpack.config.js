
// webpack.config.js

var webpack = require('webpack');

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    profile: './profile.js',
    feed: './feed.js'
  },
  output: {
    path: 'build',
    filename: '[name].js' // Template based on keys in entry above
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }  
    ]       
  },
  plugins: [commonsPlugin]
};
