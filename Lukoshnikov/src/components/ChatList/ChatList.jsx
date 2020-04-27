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
		const {chats} = this.props;
		return (
			<ChatListEl 
				component="nav">
					{
						chats.map((chatName, index) => {
							return (
								<ListItem
									key={index}
									selected={index === 2}
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