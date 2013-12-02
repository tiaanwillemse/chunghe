
var connect = require('connect'),
    http = require('http');
      
var app = connect()
  .use(connect.logger())
  .use(connect.static(__dirname + '/'))
  .use(function (req, res) {
    res.end('Hello World\n'); 
  }).listen(8124);
