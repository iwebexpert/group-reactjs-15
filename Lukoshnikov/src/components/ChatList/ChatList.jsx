import React from 'react';

import './ChatList.sass';
import { styled } from '@material-ui/core/styles';
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';

const ChatListEl = styled(List)({
});

export class ChatList extends React.Component{
	
	render(){
		const {chats, id} = this.props;
		// console.log('cats', id);
		return (
			<div className="chat__list">
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
			</div>
		);
	}
}