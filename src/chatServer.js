module.exports = function (app, io) {

	var messages = [];

	io.sockets.on('connection', function (socket) {

		socket.emit('connected', { message: 'welcome to Canteen' });
		socket.emit('messages', { messages: messages });

		socket.on('say', function (what) {
			messages.push(what);

			socket.broadcast.emit('message', { message: what });
		});


	});

};