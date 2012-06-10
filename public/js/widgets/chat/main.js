define(['core', './views/chat'], function (core, ChatView) {
	core.subscribe('chat', function (element) {
		new ChatView({ el: element }).render();
	});
});