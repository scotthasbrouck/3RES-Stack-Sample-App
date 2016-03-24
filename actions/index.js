// actions/index.js

// Socket triggered actions
// These map to socket-events.js on the server
export const newTodo = (todo) => {
	return {
		type: 'todo:new',
		todo: todo
	}
}

export const updateTodo = (todo) => {
	return {
		type: 'todo:update',
		todo: todo
	}
}

export const deleteTodo = (todo) => {
	return {
		type: 'todo:delete',
		todo: todo
	}
}