// stores/todos.js

import { createStore } from 'redux';
import todos from '../reducers/todos.js';
export default createStore(todos)
