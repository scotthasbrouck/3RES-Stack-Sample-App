import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import Todo from './todo.jsx';

export default class TodoList extends React.Component {
	render() {
		return (<Table>
			<TableBody>
				{this.props.todos.map(todo => <Todo key={todo.id} todo={todo} /> )}
			</TableBody>
		</Table>);
	}
}
