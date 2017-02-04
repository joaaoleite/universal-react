import React, {Component} from 'react'
import { Container, Header, Menu, Grid, Icon } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

@connect((store)=>{
    return {
        login : store.user.fetched,
		pathname: store.routing.locationBeforeTransitions.pathname,
    }
})
export default class Navbar extends Component {

	constructor(props){
		super(props)
		this.state = {
			hidden : this.isMobile(),
			mobile : this.isMobile()
		}
		this.menu = [
			{ label: 'Dashboard',	path: '/admin/dashboard' },
			{ label: 'Documents', 	path: '/admin/docs' },
		]
	}
	go(path){
		browserHistory.push(path)
		if(this.state.mobile) this.setState({hidden:true})
	}
	refresh(path){
		window.location.href = path
	}
	toggleMenu(){
		this.setState({ hidden : !this.state.hidden })
	}
	isMobile(){
		return window.innerWidth < 770
	}
	componentDidMount(){
		window.addEventListener('resize',()=>{
			this.setState({
				mobile: this.isMobile(),
				hidden: this.isMobile()
			})
		})
	}

	render(){
		let logo = 'ADMIN'

		let items = []
		if(this.props.login){
			items = this.menu.map((i)=>{
				return <Menu.Item active={this.props.pathname.includes(i.path)} key={i.path} content={i.label} onClick={this.go.bind(this,i.path)} />
			})
			items.push(<Menu.Item key='logout' content='Logout' onClick={this.refresh.bind(this,'/logout')} />)
		}
		else items.push(<Menu.Item key='login' content='Login' onClick={this.refresh.bind(this,'/auth/fenix')} />)

		items.push(<Menu.Item position='right' key='site' icon='external share' content='Return to site' onClick={this.refresh.bind(this,'/')} />)

		return <Menu style={{zIndex:99999}} fixed='top' size='massive' stackable>
			<Menu.Item
				style={{display:this.state.mobile?'block':'none'}}
				onClick={this.toggleMenu.bind(this)} >
				<Icon style={{marginRight:17}} name='align justify' />
				{logo}
			</Menu.Item>
			<Menu.Item style={{display:this.state.mobile?'none':'block'}}>
				{logo}
			</Menu.Item>
			{this.state.hidden?'':items}
		</Menu>

	}
}
