define(['core', './views/app'], function (core, AppView) {
	core.subscribe('chat', function (element) {
		new AppView({ el: element }).render();
	});
});