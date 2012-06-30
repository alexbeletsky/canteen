define(function (require) {
	
	// Socket.io message hub
	var MessageHub = require('../hub');

	// Views
	var SayView = require('../views/SayView');

	return {
		run: function () {
			// run all widgets here..
			new SayView({ el: $('#say'), messageHub: MessageHub }).render(); 
		}
	}
});