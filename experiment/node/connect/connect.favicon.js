
var connect = require('connect'),
    http = require('http');
      
var app = connect()
  .use(connect.favicon('favicon.ico'))
  .use(connect.logger())
  .use(function (req, res) {
    res.end('Hello World\n'); 
  }).listen(8124);
