// 3RES Todo Sample App
// index.js

var path = require('path');

// Express
var express = require('express');
var app = express();
var server = require('http').Server(app);

// Socket.io
var io = require('socket.io')(server);

// Rethinkdb
var r = require('rethinkdb');

// Socket.io changefeed events
var changefeedSocketEvents = require('./socket-events.js');

app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

r.connect({ db: '3RES_Todo' })
.then(function(connection) {
	io.on('connection', function (socket) {
		r.table('Todo').changes({ includeInitial: true, squash: true }).run(connection)
		.then(changefeedSocketEvents(socket, 'todo'));
	});
	server.listen(9000);
})
.error(function(error) {
	console.log('Error connecting to RethinkDB!');
	console.log(error);
});
