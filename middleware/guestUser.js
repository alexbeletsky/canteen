module.exports = function guestUser() {

	return function guestUser(req, res, next) {
		if (req.session && req.session.user == undefined) {
			console.log(' -- guest user created');
			req.session.user = { name: 'guest', auth: false };
		}

		next();
	}

}