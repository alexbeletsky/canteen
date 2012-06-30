define(['jquery', 'backbone' ], function ($, Backbone) {

	var StatusView = Backbone.View.extend({

		initialize: function (options) {
			if (!(options && options.messageHub)) {
				throw new Error('StatusView: messageHub is required');
			}

			_.bindAll(this);

			this.messageHub = options.messageHub;			
		},

		render: function () {
			this.$el.html('status view');
			
			return this;
		}

	});

	return StatusView;

});