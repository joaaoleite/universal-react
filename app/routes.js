import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Layout from './components/Layout'

import Home from './components/Home'
import Doc from './components/Document'
import Admin from './components/Admin'

import NotFoundPage from './components/NotFoundPage'

import { requireAuth } from './actions/user'

const routes = <Route path="/" component={Layout}>
	<IndexRoute component={Home} />
	<Route path="docs/:id" component={Doc} />
	<Route path="admin" component={Admin} onEnter={requireAuth}>
		<IndexRoute component={Home} />
		<Route path="docs" component={Home} >
			<Route path=":id" component={Doc} />
		</Route>
	</Route>
	<Route path="*" component={NotFoundPage} />
</Route>

export default routes
