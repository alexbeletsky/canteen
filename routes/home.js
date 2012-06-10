
module.exports = function (app) {

	app.get('/', function (req, res) {
		res.sendfile('views/index.html');
	});

	app.get('/chat', function (req, res) {
		res.sendfile('views/chat.html');
	});

};