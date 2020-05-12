import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import {Link} from 'react-router-dom';

import './Chat.scss';

/**
 * Возвращает единичный экземпляр класса Чат (1 чат в чат-лист)
 */
export class Chat extends React.Component {
	render() {
		const {chatId, name, lastTimestamp, handleRedirect, fire} = this.props;
		const chatUrl = "/chats/" + chatId;
		let listItemClass = '';

		if (fire) {
			listItemClass = 'chat-fire';
		}

		return (
				<Link to={chatUrl}>
					{/*<div onClick={() => handleRedirect(chatId)}>*/}
						<ListItem className={listItemClass}>
							<ListItemAvatar>
								<Avatar>
									<ImageIcon/>
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={name} secondary={lastTimestamp}/>
						</ListItem>
					 {/*</div>*/}
				</Link>
		);
	}
}