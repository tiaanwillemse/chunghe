#!/usr/local/bin/node

var http = require('http');

var q = process.argv[2];

http.get('http://finance.yahoo.com/q?s=' + q, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('chunk', chunk);
    });
});
