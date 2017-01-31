const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const session = require('express-session')

const User = require('../services/mongo').collection('users')

passport.use(new GoogleStrategy(
	require('../config/google.json'),
	(accessToken, refreshToken, profile, done)=>{
		User.findOrCreate({ googleId: profile.id }, done)
  	}
))
passport.serializeUser((user, done)=>{
	if(user) if(user.googleId) return done(null, user.googleId)
	return done('Invalid user to serialize.', null)
})
passport.deserializeUser((googleId, done)=>{
	User.findOne(googleId, done)
})

module.exports = function(server){

	server.use(session(require('../config/session.json')))
	server.use(passport.initialize())
	server.use(passport.session())

	server.get('/auth/google', passport.authenticate('google'))

	server.get('/auth/google/callback', passport.authenticate('google', {
		successRedirect: '/admin', failureRedirect: '/auth/google'
	}))

	server.all('*', (req,res,next)=>{
		// redirect authenticated users to previous path if exists
		if(req.path=='/admin' && req.isAuthenticated() && req.session.returnTo)
			if(!req.session.returnTo.includes('favicon') && !req.session.returnTo.includes('/api/'))
				return res.redirect(req.session.returnTo)

		// No authentication needed
		if(req.path.substr(0,6)!='/admin')
			return next()

		// redirect non-authenticated users to login
		if(req.isAuthenticated()) return next()
		req.session.returnTo = req.path;
		return res.redirect('/auth/fenix')
	})
}
