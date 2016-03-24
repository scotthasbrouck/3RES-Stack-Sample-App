// socket-listeners/todos.js
import io from 'socket.io-client';
const socket = io.connect('/');

export default function(store) {
	socket.on('todo:insert', (todo) => {
		store.dispatch({
			type: 'todo:insert',
			todo: todo
		});
	});

	socket.on('todo:update', function (todo) {
		store.dispatch({
			type: 'todo:update',
			todo: todo
		});
	});

	socket.on('todo:delete', function (todo) {
		store.dispatch({
			type: 'todo:delete',
			todo: todo
		});
	});
}
