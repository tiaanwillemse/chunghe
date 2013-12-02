
var express = require('express'),
    http = require('http');


var app = express()

/* 

route: http://localhost:3000/node/1..100
response: [1, 100]

route: http://localhost:3000/node/1234
response: [1234, null]

*/
app.get(/^\/node?(?:\/(\d+)(?:\.\.(\d+))?)?/, function(req, res){ 
  console.log(req.params);
  res.send(req.params); 
});

/*
route: http://localhost:3000/content/
response: [""]

route: http://localhost:3000/content/foo
response: ["foo"]
*/
app.get('/content/*', function (req, res) {
  // req.params is an array, res.send will convert array to json with appropriate header
  // req.write not accept array as first parameter
  res.send(req.params);                   
  res.end();
});

http.createServer(app).listen(3000);
