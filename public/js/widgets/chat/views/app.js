define(['core', 'backbone'], function (core, Backbone) {

	var AppView = Backbone.View.extend({
		template: _.template(
			'<div class="chat-in">\
				<input type="text" id="message" />\
				<input type="submit" id="send" />\
				<div class="messages"></div>\
			</div>'
		),

		events: {
			'click #send': 'send'
		},

		initialize: function () {

		},

		render: function() {
			var content = this.template();
			this.$el.html(content);

			return this;
		},

		send: function () {
			alert('sent');
		}
	});

	return AppView;

});