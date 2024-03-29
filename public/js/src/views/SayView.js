define(function (require) {

	var BaseView = require('../baseview');

	var SayView = BaseView.extend({

		template: _.template('\
			<input type="text" class="say-what" />\
			<input type="submit" class="say" value="Say..." />\
		'),

		events: {
			'click .say': 'onSayClicked',
			'keydown .say-what': 'onSayWhatKeyDown'
		},

		initialize: function (options) {
			_.bindAll(this);

			if (!(options && options.hub)) {
				throw new Error('SayView: hub is required');
			}

			this.messageHub = options.messageHub;
		},

		render: function () {
			this.$el.html(this.template());
			return this;
		},

		onSayClicked: function (e) {
			this.pushMessage();
		},

		onSayWhatKeyDown: function (e) {
			if (e.keyCode == 13) {
				this.pushMessage();
				e.preventDefault();
			}
		},

		pushMessage: function (message) {
			var message = this.$('.say-what').val();
			if (!_.isEmpty(message)) {
				alert(message);
			}
		}	
	});

	return SayView;
});