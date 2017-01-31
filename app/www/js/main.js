import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from '../../routes'
import store from '../../store'

const history = syncHistoryWithStore(browserHistory, store)

window.onload = () => {
 	ReactDOM.render(
		<Provider store={store} key='provider'>
			<Router
				history={history}
				routes={routes}
				onUpdate={() => window.scrollTo(0, 0)}
			/>
		</Provider>,
		document.getElementById('main')
	)
}
