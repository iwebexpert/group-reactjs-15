import React from 'react';

import './ChatList.sass';
import { styled } from '@material-ui/core/styles';
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';

const ChatListEl = styled(List)({
	flexBasis: 0,
	flexGrow: 3,
	width: '30%'
});

export class ChatList extends React.Component{
	
	render(){
		const {chats, id} = this.props;
		console.log('cats', id);
		return (
			<ChatListEl 
				component="nav">
					{
						chats.map((chatName, index) => {
							return (
								<ListItem
									key={index}
									selected={index === id - 1}
									button>
									<ListItemText>
										{chatName}
									</ListItemText>
								</ListItem>
							)
						})
					}
			</ChatListEl>
		);
	}
}