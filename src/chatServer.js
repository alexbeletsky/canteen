module.exports = function (app, io) {

	var messages = [];

	io.sockets.on('connection', function (socket) {

		socket.emit('connected', { message: 'welcome to Canteen' });
		socket.emit('messages', { messages: messages });

		socket.on('set nick', function (nick) {
			socket.set('nick', nick);
		});

		socket.on('say', function (what) {
			socket.get('nick', function (err, nick) {
				var message = nick + ': ' + what;
				messages.push(message);
				socket.broadcast.emit('message', { message: message });
			});
		});


	});

};