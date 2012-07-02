define(function (require) {

	var LoginView = require('../views/loginview');

	var LoginApp = {
		run: function (viewManager) {
			viewManager.show(new LoginView());
		}
	};

	return LoginApp;

});