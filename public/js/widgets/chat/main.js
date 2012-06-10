define(['core'], function (core) {
	core.subscribe('chat', function (element) {
		alert('chat loaded');
	});
});