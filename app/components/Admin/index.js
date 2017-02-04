import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect }  from 'react-redux'
import { Button, Container } from 'semantic-ui-react'

import { fetchMe } from '../../actions/user'

import Navbar from './Navbar'

@connect()
export default class Admin extends Component {
	componentWillMount(){
		this.props.dispatch(fetchMe())
	}
	logout(){
		window.location.href = '/logout'
	}
	render() {
    	return <div id="admin">
			<Navbar />
			<Container>
				{this.props.children}
			</Container>
      	</div>
  	}
}
