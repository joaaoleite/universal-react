
import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect }  from 'react-redux'

import { fetchMe } from '../../actions/user'

@connect((store)=>{
	return {
		user : store.user.user
	}
})
export default class Admin extends Component {
	componentWillMount(){
		this.props.dispatch(fetchMe())
	}
	render() {
		let user
		if(this.props.user)
			user = <div>
				<h3>{this.props.user.name}</h3>
				<a>{this.props.user.email}</a>
			</div>
		else user = <div>no user!</div>

    	return <div>
	        <h1>Admin</h1>
			{user}
			<br />
			{this.props.children}
	        <p>
			  <a href="/logout">LOGOUT</a><br />
	          <Link to="/">Go back to the main page</Link>
	        </p>
      	</div>
  	}
}
