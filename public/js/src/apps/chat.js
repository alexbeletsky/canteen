define(['../views/chat'], function (ChatView) {
	return {
		run: function () {
			var view = new ChatView();
			$('#chat').append(view.render().el);
		}
	}
});