
const path 			= require('path')
const express 		= require('express')
const ejs 			= require('ejs')
const {createStore} = require('redux')
const {Provider}	= require('react-redux')

import React 				 from 'react'
import { renderToString } 	 from 'react-dom/server'
import {match,RouterContext} from 'react-router'

import store 		from '../../app/store'
import routes 		from '../../app/routes'
import NotFoundPage from '../../app/components/NotFoundPage'

const root = path.join(__dirname,'../','../','dist')

module.exports = function(server){

	server.use(express.static(root))

	server.set('view engine', 'html')
	server.engine('html', ejs.renderFile)
	server.set('views', root)

	server.get('*', (req, res) => {
		match(
		{ routes, location: req.url },
	    (err, redirect, renderProps) => {

			if (err) return res.status(500).send(err.message)

	      	if (redirect) return res.redirect(302,redirect.pathname+redirect.search)

			let markup
	      	if (renderProps)
				markup = renderToString(<Provider store={store}>
					<RouterContext {...renderProps}/>
				</Provider>)
	      	else {
		        markup = renderToString(<Provider store={store}><NotFoundPage/></Provider>)
		        res.status(404)
	      	}

	      	return res.render('view', { markup })
	    })
	})

}
