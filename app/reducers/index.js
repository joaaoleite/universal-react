import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import document from './document'
import user from './user'

export default combineReducers({
    user,
    document,
	routing: routerReducer
})
