import React from 'react'
import { Link } from 'react-router'
import { Container, Menu, Icon, Segment} from 'semantic-ui-react'

export default class Layout extends React.Component {
	render() {
    	return <div class='layout-app'>
			<Menu fixed='top'>
        		<Menu.Item>
					<Link to="/">
          				<Icon name='home' />
					</Link>
        		</Menu.Item>
				<Menu.Item>
					<Link to="/admin">
          				Admin
					</Link>
        		</Menu.Item>
			</Menu>

			<Container>
				{this.props.children}
			</Container>

			{ /* footer ... */ }

    	</div>
  	}
}
