define(['jquery', 'backbone', './../hub'], function ($, Backbone, hub) {

	return ChatView = Backbone.View.extend({
		template: _.template('\
			<input class="message" type="text" />\
			<input class="say" type="submit" value="say">\
			<span class="status"></span>\
			<div class="chat">\
			</div>\
		'
		),

		events: {
			'click .say': 'onSayClicked'
		},

		initialize: function () {
			_.bindAll(this);

			hub.connect();
			hub.recieve('connected', this.onConnected);
			hub.recieve('joined', this.onJoined);
			hub.recieve('ready', this.onReady);
			hub.recieve('messages', this.onMessages);
			hub.recieve('message', this.onMessage);
		},

		render: function () {
			var content = this.template();
			
			this.$el.html(content);

			this.$chat = this.$('.chat');
			this.$status = this.$('.status');

			return this;
		},

		// Events
		onConnected: function (d) {
			this.$status.html('Connected');
			this.currentTable = 'nodejs';
			hub.send('join', this.currentTable);
		},

		onJoined: function (d) {
			this.$status.html('Joined table ' + this.currentTable);
			this.nick = 'user' + Math.floor((Math.random() * 100) + 1);
			hub.send('set nick', this.nick);			
		},

		onReady: function (d) {
			this.$status.html('Hi ' + this.nick + '! Welcome to ' + this.currentTable + ', start chatting!');
		},

		onMessages: function (d) {
			var messages = d.messages;
			var $chat = this.$chat;

			_.each(messages, function (message) {
				$chat.append('<div class="chat-line">' + message + '</div>');
			});
		},

		onMessage: function (d) {
			this.$chat.append('<div class="chat-line">' + d.message + '</div>');
		},

		onSayClicked: function () {
			var what = this.$('.message').val();
			hub.send('say', what);
			// this.$chat.append('<div class="chat-line">' + this.nick + ': ' + what + '</div>');			
			this.$('.message').val('');
		}
	});

});