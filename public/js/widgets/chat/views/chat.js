define(['core', 'backbone'], function (core, Backbone) {

	var ChatView = Backbone.View.extend({
		template: _.template(
			'<div class="chat-in">\
				<input type="text" id="message" />\
				<input type="submit" id="send" />\
				<div class="messages"></div>\
			</div>'
		),

		events: {
			'click #send': 'onSend'
		},

		initialize: function () {
			_.bindAll(this, 'onSend', 'onRecieve');

			core.subscribe('message/recieved', this.onRecieve);
		},

		render: function() {
			var content = this.template();
			this.$el.html(content);

			return this;
		},

		onSend: function () {
			core.publish('message/sent', { message: 'hi everyone!' });
		},

		onRecieve: function () {

		}
	});

	return ChatView;

});