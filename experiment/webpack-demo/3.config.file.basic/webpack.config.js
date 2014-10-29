
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.coffee$/, loader: 'coffee-loader'},
      {test: /\.js$/, loader: 'jsx-loader?harmony'}
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee'],
    modulesDirectories: ['node_modules', 'bower_components']
  }
}
