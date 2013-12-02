
var net = require('net');
// tcp only has a socket
var server = net.createServer(function (socket) {
  socket.write('hello\n');
  socket.end('world\n');
});

server.listen(8124);

