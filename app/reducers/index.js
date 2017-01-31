import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import document from './document'

export default combineReducers({
    document,
	routing: routerReducer
})
