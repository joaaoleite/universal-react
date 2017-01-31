import React, { Component } from 'react'

import { Link } from 'react-router'

export default class Document extends Component {
	render() {
    	return <Link to={'/docs/'+this.props._id}>
			<div class='doc'>
				<h4>{this.props.title}</h4>
				<p>{this.props.content}</p>
			</div>
		</Link>
  	}
}
