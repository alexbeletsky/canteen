module.exports = {

	authenticateUser: function (req, res, email, callback) {

		if (emailValid(email)) {
			if (req.session && req.session.user) {
				req.session.user.name = email;
				req.session.user.auth = true;
				console.log('-- user authorized');	
			}
		}

		return callback();	

		function emailValid(email) {
		    if (email.length == 0) return false;
		    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
		    return re.test(email);
		}
	}
}