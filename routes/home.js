
module.exports = function (app) {

	app.get('/', function (req, res) {
		res.sendfile('views/index.html');
	});

	app.get('/chat', function (req, res) {
		res.sendfile('views/chat.html');
	});

	app.get('/login', function (req, res) {
		res.sendfile('views/login.html');
	});

	app.post('/login', function (req, res) {
		var email = req.body['email'];
		if (emailValid(email)) {

		}

		res.redirect('/', 401);
	});

	function emailValid(email) {
		return false;
	}

};