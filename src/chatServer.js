module.exports = function (app, io) {

	var _ = require('../public/js/libs/underscore');

	var tables = [];

	io.sockets.on('connection', function (socket) {

		socket.emit('connected', { message: 'welcome to Canteen' });

		socket.on('join', function (tableName) {
			var table = getTable(tableName);

			if (!table) {
				table = { name: tableName, messages: [] };
				tables.push(table);
			}

			socket.set('table', tableName, function () {
				socket.join(tableName);
				socket.emit('joined');
				socket.emit('messages', { messages: table.messages });
			});
		});

		socket.on('set nick', function (nick) {
			socket.set('nick', nick, function () {
				socket.emit('ready');
			});
		});

		socket.on('say', function (what) {
			socket.get('nick', function (err, nick) {
				socket.get('table', function (err, tableName) {
					var table = getTable(tableName);
					var message = nick + ': ' + what;
					table.messages.push(message);
					io.sockets.in(tableName).emit('message', { message: message });
				});
			});
		});
	});

	function getTable(tableName) {
		return _.find(tables, function (table) { return table.name == tableName; } );
	}
};