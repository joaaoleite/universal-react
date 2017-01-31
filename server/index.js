
const express = require('express')
const mongo = require('./services/mongo')

const server = express()

mongo.init((err)=>{
	if(err) return console.log('MONGO ERROR',err)

	require('./routes/login')(server)
	require('./routes/api')(server)
	require('./routes/www')(server)

	server.listen(8080, err => {
		console.log('Server running...')
	})
})
