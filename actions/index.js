// actions/index.js

// Client triggered actions
export const createTodo = (name) => {
	return {
		type: 'todo:create',
		name: name
	}
}

export const toggleTodo = (todo) => {
	return {
		type: 'todo:toggle',
		todo: todo
	}
}

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