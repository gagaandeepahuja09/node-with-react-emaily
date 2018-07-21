const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');	//Model Instance

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback',
	proxy: true   
	},
	async(accessToken, refreshToken, profile, done) => {
		// Create an instance of user and then save it to the database
		const existingUser = await User.findOne({ googleID: profile.id });
		if(exisitingUser) {
			//User already exists
			return done(null, exisitingUser);
		}
		// New Model Instance
		const user = await new User({	googleID: profile.id }).save();	
		done(null, user);
		console.log(profile.id);
	}
));