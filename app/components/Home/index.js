import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router'

import { fetchDocuments } from '../../actions/document'

@connect((store)=>{
	return {
		docs : store.document.documents
	}
})
export default class Home extends Component {
	componentWillMount(){
		this.props.dispatch(fetchDocuments())
	}
	render() {
    	return <div>
			Home
    	</div>
  	}
}
