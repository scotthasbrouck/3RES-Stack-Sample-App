// 3RES Todo Sample App
// index.js

// Express
var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');

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

		// insert new todos
		socket.on('todo:client:insert', function(todo) {
			r.table('Todo').insert(todo).run(connection);
		});

		// update todo
		socket.on('todo:client:update', function(todo) {
			var id = todo.id;
			delete todo.id;
			r.table('Todo').get(id).update(todo).run(connection);
		});

		// delete todo
		socket.on('todo:client:delete', function(todo) {
			var id = todo.id;
			delete todo.id;
			r.table('Todo').get(id).delete().run(connection);
		});

		// emit events for changes to todos
		r.table('Todo').changes({ includeInitial: true, squash: true }).run(connection)
		.then(changefeedSocketEvents(socket, 'todo'));
	});
	server.listen(9000);
})
.error(function(error) {
	console.log('Error connecting to RethinkDB!');
	console.log(error);
});
