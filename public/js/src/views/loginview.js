define(function (require) {
	
	//var Backbone = require('backbone');

	var BaseView = require('../baseview');

	var LoginView = BaseView.extend({

		render: function () {
			var content = 'Login view';
			this.$el.html(content);

			return this;
		}

	});

	return LoginView;

});