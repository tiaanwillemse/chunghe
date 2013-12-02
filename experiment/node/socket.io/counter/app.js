
var app = require('express')()
  , server = require('http').createServer(app)
   , io = require('socket.io').listen(server);

server.listen(8124);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// Socket#send should be seen as a low-level api (for custom protocols development, or cases where maximum messages per second speed is crucial), and Socket#emit a higher-level interface (for app development).
var counter = 0; // every connection will share this global variable
io.sockets.on('connection', function (socket) {
    socket.emit('counter_update', {counter: 0});
    socket.on('echo', function (data) {
      if (counter <= 50) {
        setTimeout(function () {
          socket.emit('counter_update', {counter: counter})
        }, 250)
        counter += 1;
      }
    });
});
