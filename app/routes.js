import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'

import Layout from './components/Layout'
	import Home from './components/Home'
	import Documents from './components/Documents'
		import Document from './components/Documents/Document'
	import NotFoundPage from './components/NotFoundPage'

import Admin from './components/Admin'
	import Dashboard from './components/admin/Dashboard'
	import AdminDocs from './components/admin/Documents'

import { requireAuth } from './actions/user'

const routes = <Route path="/">
	<Redirect from="/admin" to="/admin/dashboard" />
	<Route path="admin" component={Admin} onEnter={requireAuth}>
		<Route path="dashboard" component={Dashboard} />
		<Route path="docs" component={AdminDocs} />
	</Route>
	<Route component={Layout}>
		<IndexRoute component={Home} />
		<Route path="docs" component={Documents} >
			<Route path=":id" component={Document} />
		</Route>
		<Route path="*" component={NotFoundPage} />

	</Route>
</Route>

export default routes
