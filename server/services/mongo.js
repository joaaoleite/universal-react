var connection = null

module.exports.init = function(done = ()=>{}){
	if(connection) return done(null,connection)

	const mongo = require('mongodb').MongoClient
	const config = require('../config/mongo.json')
	const url = 'mongodb://'+config.host+':'+config.port+'/'+config.database;

	mongo.connect(url, function(err, db){
		if(err) return done(err,null);
		connection = db
		done(null,connection)
	})
}

module.exports.collection = function(name){
	return connection.collection(name);
}
