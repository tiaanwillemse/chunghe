
var through = require('through');
var tr = through(function (buf) {
  this.queue(buf.toString().toUpperCase());
}, function () {
  //console.log('__END__');
})

  


process.stdin.pipe(tr).pipe(process.stdout);
