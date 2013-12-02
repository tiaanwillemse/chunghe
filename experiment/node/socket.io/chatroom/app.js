
var app = require('express')()
  , server = require('http').createServer(app)
   , io = require('socket.io').listen(server);

server.listen(8124);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// Socket#send should be seen as a low-level api (for custom protocols development, or cases where maximum messages per second speed is crucial), and Socket#emit a higher-level interface (for app development).
//io.set('transports', ['xhr-polling', 'jsonp-polling']);
io.sockets.on('connection', function (socket) {

    socket.on('addme', function(username) {
      socket.username = username;  
      socket.emit('chat', 'SERVER', 'You have connected');
      socket.broadcast.emit('chat', 'SERVER', username  + ' joining.');
    });

    socket.on('sendchat', function (text) {
      io.sockets.emit('chat', socket.username, text);
    });

    socket.on('disconnect', function () {
      io.sockets.emit('chat', 'SERVER', socket.username + ' dropped out.');
    });
});
