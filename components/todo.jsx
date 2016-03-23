import React from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';


export default class Todo extends React.Component {
	render() {
		return (<TableRow>
			<TableRowColumn>Completed</TableRowColumn>
			<TableRowColumn>Name</TableRowColumn>
		</TableRow>)
	}
}