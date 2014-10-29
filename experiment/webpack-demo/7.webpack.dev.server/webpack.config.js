
// webpack.config.js

module.exports = {
  entry: './main.js',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }  
    ]       
  }
};
