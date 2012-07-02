define(function (require) {

	var Backbone = require('backbone');

	BaseView = function (options) {
		Backbone.View.apply(this, [options]);
	}

	_.extend(BaseView.prototype, Backbone.View.prototype, {

		dispose: function () {
			this.unbind();
			this.remove();
		},

		disposeViews: function (views) {
			_.invoke(views, 'dispose');
		}

	});

	BaseView.extend = Backbone.View.extend;

	return BaseView;

});