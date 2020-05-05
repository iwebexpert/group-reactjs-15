import React from 'react';
import List from '@material-ui/core/List';

import './ChatList.scss';
import {Chat} from "components/Chat";

export class ChatList extends React.Component {
	render() {
		const {chatList} = this.props;

		return (
				<List className="chatlist">
					{chatList.map(
							(chat) =>
									<Chat
											chatId={chat.id}
											name={chat.name}
											lastTimestamp={chat.lastTimestamp}
											key={chat.id}
									/>
					)}
				</List>
		);
	}
}