import React from 'react';
import {Link} from 'react-router-dom';

import './ChatList.sass';
import { styled } from '@material-ui/core/styles';
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';

const ChatListEl = styled(List)({
});

export class ChatList extends React.Component{
	
	state = {
		selected: null
	}
	UNSAFE_componentWillMount(){
		this.setState({selected: parseInt(this.props.id)});
	}
	selectListItem = (e) => {
		// //console.log('safsg',e.currentTarget.dataset.id);
		const selectedItemIndex = parseInt(e.currentTarget.dataset.id);
		this.setState({selected: selectedItemIndex});
	}
	render(){
		const {chats, id} = this.props;
		const {selected} = this.state;
		// //console.log('cats', this.state.selected);
		return (
			<div className="chat__list">
				<ChatListEl 
					component="nav">
						{
							chats.map((chat, index) => {
								return (
									<Link
										to={chat.link}
										key={index}>
										<ListItem
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
									</Link>
								)
							})
						}
				</ChatListEl>
			</div>
		);
	}
}