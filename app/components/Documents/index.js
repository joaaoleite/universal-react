import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDocuments } from '../../actions/document'

import NotFoundPage from '../NotFoundPage'
import Document from './Document'

@connect((store)=>{
	return {
		docs : store.document.documents
	}
})
export default class Documents extends Component {
	componentWillMount(){
		this.props.dispatch(fetchDocuments())
	}
	render() {
		const doc = this.props.docs.find(d => d._id==this.props.params.id)

		if(!doc) return <NotFoundPage/>

    	return <List celled>
			{this.props.docs.map((d,i)=><Document key={i} {...d} />)}
    	</List>
  	}
}
