define(['jquery', 'backbone' ], function ($, Backbone) {

	var StatusView = Backbone.View.extend({

		template: _.template('\
			<span class="status"></span>\
		'),

		initialize: function (options) {
			if (!(options && options.messageHub)) {
				throw new Error('StatusView: messageHub is required');
			}

			_.bindAll(this);

			this.hub = options.messageHub;

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