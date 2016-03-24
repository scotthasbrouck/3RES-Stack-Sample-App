// reducers/todos.js

// todos reducer
const todos = (state = [], action) => {
	// return index of action's todo within state
	const todoIndex = () => {
		return state.findIndex(thisTodo => {
			return thisTodo && thisTodo.id === action.todo.id;
		});
	};

	switch(action.type) {
		case 'todo:insert':
			// append todo at end if not already found in state
			return todoIndex() < 0 ? [...state, action.todo] : state;

		case 'todo:update':
			// Merge props to update todo if matching id
			var index = todoIndex();
			if (index > -1) {
				var updatedTodo = Object.assign({}, state[index], action.todo);
				return [...state.slice(0, index), updatedTodo, ...state.slice(index + 1)]
			}
			else {
				return state;
			}

		case 'todo:delete':
			// remove matching todo
			var index = todoIndex();
			if (index > -1) {
				return [...state.slice(0, index), ...state.slice(index + 1)];
			}
			else {
				return state;
			}

		default:
			return state;
	}
};

export default todos;
