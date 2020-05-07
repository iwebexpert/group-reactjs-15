import React from 'react';
import {Link} from 'react-router-dom';

import './ChatList.sass';
import { styled } from '@material-ui/core/styles';
import {List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core';

const ChatListEl = styled(List)({
});

export class ChatList extends React.Component{
	
	state = {
		selected: null
	}
	UNSAFE_componentWillMount(){
		this.setState({selected: parseInt(this.props.id)});
	}
	componentDidUpdate(){
		// console.log('update', this.props.id);
		// this.setState({selected: parseInt(this.props.id)});		
	}
	selectListItem = (e) => {
		// //console.log('safsg',e.currentTarget.dataset.id);
		const {redirect} = this.props;
		const selectedItemIndex = parseInt(e.currentTarget.dataset.id);
		this.setState({selected: selectedItemIndex});
		redirect(selectedItemIndex);
	}
	render(){
		const {chats, id, addChat, redirect} = this.props;
		const {selected} = this.state;
		return (
			<div className="chat__list">
				<ChatListEl 
					component="nav">
					{
						chats.map((chat, index) => {
							return (
								// <Link
									// to={chat.link}
									// >
									<ListItem
									key={index}
										selected={selected === (index + 1)}
										data-id={index + 1}
										button
										onClick={this.selectListItem}
										>
										<ListItemText 
											>
											{chat.name}
										</ListItemText>
									</ListItem>
								// </Link>
							)
						})
					}
					<Button onClick={addChat}>
						<ListItemText primary="Create new chat"/>
					</Button>
				</ChatListEl>
			</div>
		);
	}
}