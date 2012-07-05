
module.exports = function (app, middleware) {

	var auth = require('../src/auth');

	app.get('/', function (req, res) {
		res.sendfile('views/index.html');
	});

	app.get('/chat', middleware.authCheck(), function (req, res) {
		res.sendfile('views/chat.html');
	});

	app.get('/login', function (req, res) {
		res.sendfile('views/login.html');
	});

	app.post('/login', function (req, res) {
		var email = req.body['email'];

		auth.authenticateUser(req, res, email, function () {
			res.redirect('/chat');
		});
	});

};