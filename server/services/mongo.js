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
	let collection = connection.collection(name)

	/* functions */
	collection.findOrCreate = function(doc,done){
		let id = doc.id
		collection.updateOne({id}, doc, {upsert:true,w:1}, (err)=>{
			if(err) return done(err)
			collection.findOne({id}, (err, item)=>{
				if(err) return done(err)
				done(null,item)
			})
		})
	}

	return collection
}
