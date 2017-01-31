
export function auth(req, res, next) {
	if(req.isAuthenticated()) return next()
	else res.status(403).json({error:'authentication required!'})
}
