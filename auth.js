var User = require('./server/models/user');

module.exports = function(req, res, next) {

	console.log('auth.js');
	// if(req.session.userID) {
	// 	User.find({ _id: req.session.userID }).exec(function(err, users) {

	// 		if(!err && users.length) {
	// 			req.oUser = users[0];
	// 		}			
			
	// 		next();
	// 	});
	// } else {
		next();
	// }
}