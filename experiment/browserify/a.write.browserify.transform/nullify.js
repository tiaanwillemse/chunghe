
var through = require('through');
var child_process = require('child_process')

module.exports = function (file) {
  var data = '';
  return through(write, end)
  
  // git rev-parse HEAD
  function write(buf) {data += buf;}
  function end () {
    var self = this;
    child_process.exec('git rev-parse HEAD', function (error ,stdout) {
      
      self.queue('// git version:' + stdout);
      self.queue('// create at: ' + new Date());
      self.queue(null);
    })
  }
  
}
