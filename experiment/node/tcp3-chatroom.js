
var net  = require('net');

var sockets = [];

var server = net.createServer(function(socket) {
    sockets.push(socket);
    
    socket.on('data', function(d) {
      for (var i = 0; i < sockets.length; i += 1) {
        if (sockets[i] == socket) continue;
        sockets[i].write(d);
      }
    });

    socket.on('end', function () {
      var index = sockets.indexOf(socket);
      sockets.splice(index, 1);
    });
});

server.listen(8124);
