import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TodoList from './todoList.jsx';
import AddTodo from './addTodo.jsx';

import { connect } from 'react-redux';

class Main extends React.Component {
	render() {
		return (<div>
			<AppBar title="3RES Todo" iconClassNameRight="muidocs-icon-navigation-expand-more" />
			<TodoList store={this.props} />
			<AddTodo />
		</div>);
	}
}

function mapStateToProps(todos) {
	return { todos: todos };
}

export default connect(mapStateToProps)(Main);
