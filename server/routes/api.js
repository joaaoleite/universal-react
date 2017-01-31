
const bodyParser = require('body-parser')
const Document = require('../services/mongo').collection('documents')
const { auth } = require('../services/util')

module.exports = function(server){

	server.use(bodyParser.json());

	server.get('/api/me', auth, (req,res)=>{
		res.json(req.user)
	})

	server.get('/api/documents', (req,res)=>{
		Document.find().toArray((err,docs)=>{
			if(err) res.json({error:'fail to get documents'})
			else res.json(docs)
		})
	})

	server.post('/api/documents', auth, (req,res)=>{

		let doc = req.body['content']

		if(content) Document.insert(doc, (err, created)=>{
			if(!err && created) return res.json(created)
			else res.json({error:'fail to create document'})
		})
		else res.json({error:'content cannot be null'})
	})
}
