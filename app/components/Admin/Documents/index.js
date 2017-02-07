import React, {Component} from 'react'
import {Dropdown, Header, Input, Icon, Grid, Segment, List, Button, Image } from 'semantic-ui-react'
import Datetime from 'react-datetime'

export default class Documents extends Component {
	constructor(props){
		super(props)
		this.state = {
			datepicker : false,
		}
	}
	openDatepicker(){
		if(!this.state.datepicker)
			this.setState({ datepicker : true })
	}
	render(){
		let publishing = [
			{
			key: 1,
			text: 'Public',
			value: 1,
			content: <Header icon='world' content='Public' />,
			},
			{
			key: 2,
			text: 'Scheduled',
			value: 2,
			content: <Header icon='time' content='Scheduled' />,
			},
			{
			key: 3,
			text: 'Private',
			value: 3,
			content: <Header icon='lock' content='Private' />,
			},
		]
		let item = <List.Item class='doc-item'>
			<List.Content floated='right'>
				<Button basic color='blue' size='tiny'>Edit</Button>
				<Button basic color='red' size='tiny'>Remove</Button>
			</List.Content>
			<Image src='http://www.aviatorcameragear.com/wp-content/uploads/2012/07/placeholder_2.jpg' />
			<List.Content verticalAlign='top'>
				<List.Header as='h4'>Example document title</List.Header>
				<List horizontal>
	    			<List.Item icon='calendar' content='27/02/2017' />
					<List.Item icon='user' content='Person Name' />
					<List.Item icon='lock' content='Private' />
				</List>
			</List.Content>
		</List.Item>

		let items = []
		for(let i=0; i<10; i++)
			items.push(item)

		return <div class='documents'>
			<Segment raised>
				<Grid>
					<Grid.Column computer={5} tablet={7} mobile={11}>
						<Input style={{width:'100%'}} icon='search' placeholder='Filter documents...' />
					</Grid.Column>
					<Grid.Column computer={3} only='tablet'>
						<div class='ui icon input'>
							<Datetime style={{position:'relative'}} timeFormat={false} dateFormat='YYYY/MM/DD' inputProps={{placeholder:'Start date'}} style={{width:'100%'}} />
							<i aria-hidden="true" class="calendar icon"></i>
						</div>
					</Grid.Column>
					<Grid.Column computer={3} only='tablet'>
						<div class='ui icon input'>
							<Datetime timeFormat={false} dateFormat='YYYY/MM/DD' inputProps={{placeholder:'End date'}} style={{width:'100%'}} />
							<i aria-hidden="true" class="calendar icon"></i>
						</div>
					</Grid.Column>
					<Grid.Column only='computer' larg computer={3}>
						<Dropdown selection fluid options={publishing} placeholder='State' />
					</Grid.Column>
					<Grid.Column verticalAlign='middle' textAlign='right' computer={2} tablet={3} mobile={5}>
						<Button size='tiny' icon='plus' content='New' color='green' />
					</Grid.Column>
				</Grid>
			</Segment>
			<List selection divided verticalAlign='middle'>
				{items}
			</List>
		</div>
	}
}
