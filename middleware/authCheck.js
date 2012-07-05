module.exports = function authCheck() {

	return function authCheck(req, res, next) {
		if (req.session && req.session.user && req.session.user.auth) {
			return next();
		}

		res.send(401);
	}

}