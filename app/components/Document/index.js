import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDocuments } from '../../actions/document'

import NotFoundPage from '../NotFoundPage'

@connect((store)=>{
	return {
		docs : store.document.documents
	}
})
export default class Document extends Component {
	componentWillMount(){
		this.props.dispatch(fetchDocuments())
	}
	render() {
		const doc = this.props.docs.find(d => d._id==this.props.params.id)

		if(!doc) return <NotFoundPage/>

    	return <div className="document-page">
			<h2>{doc.title}</h2>
			<span>{doc.id}</span>
			<p>{doc.content}</p>
      	</div>
  	}
}
