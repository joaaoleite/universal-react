import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class Document extends Component {
	render() {
    	return <List.Item>
			<Link to={'/docs/'+this.props._id}>
  			<List.Content>
    			<List.Header>{this.props.title}</List.Header>
    			{this.props.content}
  			</List.Content>
			</Link>
		</List.Item>
  	}
}
