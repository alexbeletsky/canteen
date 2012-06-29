define(['io'], function (io) {

	io = io || window.io;

	var Hub = (function () {
		var socket;

		return {

			connect: function () {
				socket = io.connect();
			},

			send: function (event, data) {
				if (!socket) {
					throw new Error ('socket has not been intitiazed');
				}

				socket.emit(event, data);
			},

			recieve: function (event, callback) {
				if (!socket) {
					throw new Error ('socket has not been intitiazed');
				}

				socket.on(event, callback);
			}

		};

	})();

	return Hub;

});