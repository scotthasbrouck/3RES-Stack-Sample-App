import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

// Import socket and connect
import io from 'socket.io-client';
const socket = io.connect('/');

export default class Todo extends React.Component {
	handleCheck(todo) {
		socket.emit('todo:client:update', {
			completed: !todo.completed,
			id: todo.id
		});
	};

	handleDelete(todo) {
		socket.emit('todo:client:delete', todo);
	};

	render() {
		return (<TableRow>
			<TableRowColumn>
				<Checkbox label={this.props.todo.name} checked={this.props.todo.completed} onCheck={this.handleCheck.bind(this, this.props.todo)} />
			</TableRowColumn>
			<TableRowColumn>
				<IconButton iconClassName="fa fa-trash" onFocus={this.handleDelete.bind(this, this.props.todo)} />
			</TableRowColumn>
		</TableRow>)
	}
}
