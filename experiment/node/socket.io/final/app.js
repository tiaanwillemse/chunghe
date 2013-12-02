
var app = require('express')(),
    server = require('http').createServer(app),
    _ = require('underscore'),
    io = require('socket.io').listen(server);

server.listen(8124);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

users = [];

io.sockets.on('connection', function (socket) {

    socket.on('join', function(id, username, position) {
      socket.tuple = {id: id, username: username, position: position};  
      users.push(socket.tuple);
      // for sender, send all users cordinate
      socket.emit('join', users);
      // for others, send the new comer's cordinate
      socket.broadcast.emit('join', socket.tuple);
    });

    socket.on('move', function(id, position) {
      socket.broadcast.emit('move', id, position)
    });

    socket.on('disconnect', function () {
      var index = users.indexOf(socket.tuple);
      console.log ('disconnect', index);
      io.sockets.emit('remove', users[index]);
      users.splice(index, 1);
    });

    setInterval(function () {
      var point = Math.round(Math.random()*9);
      var position = [Math.random()*500, Math.random()*500];
      io.sockets.emit('point', point, position);
    }, 10000);
});
