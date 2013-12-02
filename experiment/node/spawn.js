

 var spawn   = require('child_process').spawn;
 var ls    = spawn('ls', ['-lh', '/']);

 ls.stdout.setEncoding('utf8');
 ls.stdout.on('data', function( data) {
   console.log('ls result: \n\n', data);
 });

