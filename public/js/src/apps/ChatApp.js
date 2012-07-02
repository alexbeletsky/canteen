define(function (require) {

	var ChatView = require('../views/chatview');

	var LoginApp = {
		run: function (viewManager) {
			viewManager.show(new ChatView());
		}
	};

	return LoginApp;	

});