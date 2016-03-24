// Socket.io events for changefeed
// socket-events.js

module.exports = function(socket, entityName) {
	return function(rows) {
		rows.each(function(err, row) {
			if (err) { return console.log(err); }
			else if (row.new_val && !row.old_val) {
				socket.emit(entityName + ":insert", row.new_val);
			}
			else if (row.new_val && row.old_val) {
				socket.emit(entityName + ":update", row.new_val);
			}
			else if (row.old_val && !row.new_val) {
				socket.emit(entityName + ":delete", { id: row.old_val.id });
			}
		});
	};
};
