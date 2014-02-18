

var concat = require('concat-stream');
var through =  require('through');

process.stdin.pipe(concat(function (data) {
  var str = data.toString().split('').reverse().join('');
  console.log (str);
}));
