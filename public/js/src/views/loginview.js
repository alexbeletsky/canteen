define(function (require) {
	
	var BaseView = require('../baseview');

	var LoginView = BaseView.extend({
		template: _.template('\
			<form id="login" action="/login" method="post">\
				<label for="email">Please use your email to login</label>\
				<input id="email" name="email" type="text" placeholder="Your email..." />\
				<input id="enter" type="submit" value="Enter" />\
			</form>\
		'),

		render: function () {
			var content = this.template();
			this.$el.html(content);

			return this;
		}

	});

	return LoginView;

});