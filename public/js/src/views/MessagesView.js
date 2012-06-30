define(['jquery', 'backbone' ], function ($, Backbone) {

	var MessagesView = Backbone.View.extend({

		initialize: function (options) {
			if (!(options && options.messageHub)) {
				throw new Error('MessagesView: messageHub is required');
			}

			_.bindAll(this);

			this.messageHub = options.messageHub;			
		},

		render: function () {
			this.$el.html('MessagesView view');
			
			return this;
		}

	});

	return MessagesView;
});