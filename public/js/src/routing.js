define(function (require) {

	var Backbone = require('backbone');
	var ViewManager = require('./viewmanager');

	var apps = {
		'login': require('./apps/loginapp'),
		'app': require('./apps/chatapp')
	};

	var ApplicationRouting = Backbone.Router.extend({
		initialize: function (options) {
			if (!(options && options.appView)) {
				throw new Error('ApplicationRouting: view manager is required');
			}

			this.appView = options.appView;
		},

		routes: {
			//'login': 'login',
			'app': 'app'
		},

		// login: function () {
		// 	apps['login'].run(this.appView);
		// },

		app: function () {
			apps['app'].run(this.appView);
		}
	});

	return {
		startRouting: function () {
			new ApplicationRouting({ appView: new ViewManager() });
			Backbone.history.start();
		}
	};

});