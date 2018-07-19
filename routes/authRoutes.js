const passport = require('passport');

module.exports = app => {
	// When user has to be directed to google
	app.get(
		'/auth/google', 
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	// When user goes to this callback, he will have the code available
	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/logout', (req,res) => {
		req.logout();
		res.send(req.user);
	});

	// Route handler to test our authentication
	app.get('/api/current_user', (req,res) => {
		// res.send(req.session);
		res.send(req.user);
	});
}; 