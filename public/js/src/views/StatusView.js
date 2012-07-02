define(function (require) {

	var BaseView = require('../baseview');

	var StatusView = BaseView.extend({

		template: _.template('\
			<span class="status"></span>\
		'),

		initialize: function (options) {
			_.bindAll(this);

			if (!(options && options.hub)) {
				throw new Error('StatusView: hub is required');
			}

			this.hub = options.hub;

			this.hub.recieve('connected', this.onConnected);
			this.hub.recieve('joined', this.onJoined);
			this.hub.recieve('ready', this.onReady);
		},

		render: function () {
			this.$el.html(this.template());

			this.$status = this.$('.status');
			
			return this;
		},

		onConnected: function () {
			this.$status.html('Successfully connected...');
		},

		onJoined: function (d) {
			this.$status.html('Joined the table ' + d.tableName);
		},

		onReady: function (d) {

		}

	});

	return StatusView;

});