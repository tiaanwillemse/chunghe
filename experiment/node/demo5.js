
var net = require('net')

var sockets = [];

var server = net.createServer(function (socket) {
  sockets.push(socket);
  socket.on('data', function (data) {
    for (var i = 0 ; i < sockets.length ; i += 1) {
      if (sockets[i] == socket) continue;
      sockets[i].write(data);
    }
  });
  // prevent dead socket, if this happen, cannot write data to dead socket
  socket.on('end', function (data) {
    var i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  });
});

server.listen(8124);
