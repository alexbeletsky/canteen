define(function (require) {
	
	// Socket.io message hub
	var hub = Hub = require('../hub');

	// Views
	var SayView = require('../views/SayView');
	var StatusView = require('../views/StatusView');
	var MessagesView = require('../views/MessagesView');

	return {
		run: function () {
			// connect to message hub
			hub.connect();

			// run all widgets here..
			new SayView({ el: $('#say'), hub: Hub }).render(); 
			new StatusView({ el: $('#status'), hub: Hub }).render();
			new MessagesView({ el: $('#messages'), hub: Hub }).render();
		}
	}
});