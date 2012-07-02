define(function (require) {

	var BaseView = require('../baseview');

	// Subviews
	var SayView = require('./sayview');
	var StatusView = require('./statusview');
	var MessagesView = require('./messagesview');

	var ChatView = BaseView.extend({
		template: _.template('\
			<div class="say"></div>\
			<div class="status"></div>\
			<div class="messages"></div>\
		'),

		initialize: function (options) {
			// if (!(options && options.hub)) {
			// 	throw new Error('ChatView: message hub is required');
			// }

			this.hub = {
				recieve: function () {

				},

				send: function () {

				}
			};

			this.childViews = [];

		},

		render: function () {
			// this.sayView = new SayView({ hub: this.hub }).render(); 
			// this.statusView = new StatusView({ hub: this.hub }).render();
			// this.messagesView = new MessagesView({ hub: this.hub }).render();

			var content = this.template();
			this.$el.html(content);

			this.sayView = new SayView({ el: this.$('.say'), hub: this.hub }).render(); 
			this.childViews.push(this.sayView);

			this.statusView = new StatusView({ el: this.$('.status'), hub: this.hub }).render();
			this.childViews.push(this.statusView);
			
			this.messagesView = new MessagesView({ el: this.$('.messages'), hub: this.hub }).render();
			this.childViews.push(this.messagesView);

			return this;
		},

		dispose: function () {
			this.disposeViews(this.childViews);
		}
	});

	return ChatView;
});