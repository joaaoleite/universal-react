import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

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
			<Link to='/admin'>ADMIN</Link>
        	<div className="doc-item">
          		{this.props.docs.map((doc,i)=><Document key={i} {...doc} />)}
        	</div>
      	</div>
  	}
}
