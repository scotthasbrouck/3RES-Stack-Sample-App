import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import TodoList from './todoList.jsx';
import AddTodo from './addTodo.jsx';

// Needed for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Main extends React.Component {
	render() {
		return (<div>
			<AppBar title="3RES Todo" iconClassNameRight="muidocs-icon-navigation-expand-more" />
			<TodoList />
			<AddTodo />
		</div>);
	}
}

ReactDOM.render(<Main/>, document.getElementById('main'));
