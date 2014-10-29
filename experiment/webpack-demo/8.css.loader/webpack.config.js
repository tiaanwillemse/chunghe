
// webpack.config.js

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' }  ,
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]       
  }
};
