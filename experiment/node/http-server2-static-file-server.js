
var http = require('http'),
  fs = require('fs');


var server = http.createServer(function (req, res) {
    pathname = __dirname + req.url;
    console.log(pathname);

    fs.exists(pathname, function (exists) {
      if (exists) {
        fs.readFile(pathname, function (err, data) {
          res.end(data);
        });
      } else {
        res.writeHead(404);
        res.write('file not found: ' + pathname + '\n');
        res.end();
      }
      
    });
});
server.listen(8124);
