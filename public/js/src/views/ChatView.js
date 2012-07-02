define(function (require) {

	// Subviews
	var SayView = require('SayView');
	var StatusView = require('StatusView');
	var MessagesView = require('MessagesView');

	var ChatView = Backbone.Views.extend({
		initialize: function (options) {
			if (!(options && options.hub)) {
				throw new Error('ChatView: message hub is required');
			}

			this.hub = options.hub;
		},

		render: function () {
			this.sayView = new SayView({ el: $('#say'), hub: this.hub }).render(); 
			this.statusView = new StatusView({ el: $('#status'), hub: this.hub }).render();
			this.messagesView = new MessagesView({ el: $('#messages'), hub: this.hub }).render();
		}
	});

	return ChatView;
});