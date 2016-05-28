import React from 'react';
import Popover from 'material-ui/Popover';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Import socket and connect
import io from 'socket.io-client';
const socket = io.connect('/');

export default class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	};

	handlePopoverTap = (event) => {
		this.setState({
			open: true,
			anchor: event.currentTarget
		});
	};

	handlePopoverClose = () => {
		this.setState({ open: false });
	};

	handleNewTaskInput = (event) => {
		if (event.keyCode === 13) {
			if (event.target.value && event.target.value.length > 0) {

				// Emit socket event for new todo
				socket.emit('todo:client:insert', {
					completed: false,
					name: event.target.value
				});

				this.handlePopoverClose();
			}
			else {
				this.setState({ error: 'Tasks must have a name'});
			}
		}
	};

	render() {
		return (<div>
			<Popover
				open = { this.state.open }
				anchorEl = { this.state.anchor }
				anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
				targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
				onRequestClose={this.handlePopoverClose}>
				<TextField
					style={{ margin: 20 }}
					hintText="new task"
					errorText={ this.state.error }
					onKeyDown={this.handleNewTaskInput} />
			</Popover>
			<FloatingActionButton onTouchTap={this.handlePopoverTap} style={{ position: 'fixed', bottom: 20, right: 20 }}>
				<ContentAdd />
			</FloatingActionButton>
		</div>)
	};
}
