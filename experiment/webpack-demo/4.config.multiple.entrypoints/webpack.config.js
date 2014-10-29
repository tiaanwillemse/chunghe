
module.exports = {
  entry: {
    profile: './profile.js',
    feed: './feed.js'
  },
  output: {
    path: 'build',
    filename: '[name].js'
    //filename: '[name]-[hash].js' // Template based on keys in entry above
  }
};
