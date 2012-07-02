define(function (require) {
	
	// Socket.io message hub
	var hub = Hub = require('../hub');
	var chatView = ChatView = require('../views/ChatView');

	return {
		run: function () {
			// connect to message hub
			hub.connect();
		}
	}
});