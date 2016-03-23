import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

import Todo from './todo.jsx';

export default class TodoList extends React.Component {
	render() {
		return (<Table>
			<TableHeader>
				<TableRow>
					<TableHeaderColumn>Completed</TableHeaderColumn>
					<TableHeaderColumn>Todo Name</TableHeaderColumn>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableRowColumn>Completed</TableRowColumn>
					<TableRowColumn>Name</TableRowColumn>
				</TableRow>
			</TableBody>
		</Table>);
	}
}