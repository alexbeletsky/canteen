define(function (require) {
	
	// Socket.io message hub
	var messageHub = MessageHub = require('../hub');

	// Views
	var SayView = require('../views/SayView');
	var StatusView = require('../views/StatusView');
	var MessagesView = require('../views/MessagesView');

	return {
		run: function () {
			// run all widgets here..
			new SayView({ el: $('#say'), messageHub: MessageHub }).render(); 
			new StatusView({ el: $('#status'), messageHub: MessageHub }).render();
			new MessagesView({ el: $('#messages'), messageHub: MessageHub }).render();

			// connect to message hub
			messageHub.connect();
		}
	}
});