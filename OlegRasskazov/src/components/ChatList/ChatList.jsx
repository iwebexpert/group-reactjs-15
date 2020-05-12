import React from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import './ChatList.scss';
import {Chat} from "components/Chat";

export class ChatList extends React.Component {
	render() {
		const {chatList, addChat, handleRedirect} = this.props;

		return (
					<List className="chatlist">
						{chatList.map(
								(chat) =>
										<Chat
												chatId={chat.id}
												name={chat.name}
												lastTimestamp={chat.lastTimestamp}
												key={chat.id}
												handleRedirect={handleRedirect}
												fire={chat.fire}
										/>
						)}
						<Button onClick={addChat}>
							<ListItemText primary="Create chat"/>
						</Button>
					</List>
		);
	}
}