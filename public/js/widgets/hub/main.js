define(['core', './apps/messageHub'], function (core, MessageHub) {
	core.subscribe('hub', function() {
		new MessageHub().init();
	});
});