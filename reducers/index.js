// reducers/index.js

import { combineReducers } from 'redux';
import todos from './todos.js';

const todoApp = combineReducers({ todos });

export default todoApp;