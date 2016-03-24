// reducers/todos.js

const todo = (thisTodo, action) => {
	switch(action.type) {
		case 'todo:update':
			if (thisTodo.id === action.todo.id) {
				return Object.assign({}, thisTodo, action.todo);
			}
			else {
				return thisTodo;
			}
		default:
			return thisTodo;
	}
};


const todos = (state = [], action) => {
	const findIndex = () => {
		return state.findIndex(thisTodo => {
			return thisTodo && thisTodo.id === action.todo.id;
		});
	};

	switch(action.type) {
		case 'todo:insert':
			return findIndex() < 0 ? [...state, action.todo] : state;
		case 'todo:update':
			return state.map(thisTodo => todo(thisTodo, action));
		case 'todo:delete':
			var index = findIndex();
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
