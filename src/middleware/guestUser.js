module.exports = function guestUser() {

	return function guestUser(req, res, next) {
		if (req.session && req.session.user == undefined) {
			req.session.user = { name: 'guest', auth: false };
		}

		next();
	}

}