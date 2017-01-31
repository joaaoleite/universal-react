import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchDocuments } from '../../actions/document'

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
    	return <div className="home">
        	<div className="doc-item">
          		{this.props.docs.map(doc => <Document key={doc.id} {...doc} />)}
        	</div>
      	</div>
  	}
}
