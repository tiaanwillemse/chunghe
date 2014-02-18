

var split = require('split');
var through = require('through');

time = 0;
process.stdin
  .pipe(split())
  .pipe(through(function (buf) {
    time += 1;
    if ((time%2) === 0) {
      this.queue(buf.toString().toUpperCase() + '\n');
    }
    else {
      this.queue(buf.toString().toLowerCase() + '\n');
    }
  }))
  .pipe(process.stdout);
