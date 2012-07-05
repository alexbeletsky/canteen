module.exports = function redirectToLogin(url) {
	url = url || '/';

	return function redirectToLogin(req, res, next) {
		var end = res.end;
		res.end = function (data, encoding) {
			res.end = end;
			if (res.statusCode == 401) {
				return res.redirect(url);
			}

			res.end(data, encoding);
		};

		next();
	}
}