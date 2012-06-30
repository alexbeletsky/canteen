define(['jquery', 'backbone' ], function ($, Backbone) {

	var MessagesView = Backbone.View.extend({

		initialize: function (options) {
			_.bindAll(this);

			if (!(options && options.hub)) {
				throw new Error('SayView: hub is required');
			}

			this.messageHub = options.messageHub;
		},

		render: function () {
			this.$el.html('MessagesView view');
			
			return this;
		}

	});

	return MessagesView;
});