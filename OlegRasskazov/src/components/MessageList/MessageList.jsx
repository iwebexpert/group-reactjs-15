import React from 'react';

import {Message} from "Components/Message";
import './MessageList.css';

export class MessageList extends React.Component {
	render() {
		return (
				<div className='message-list'>
					{this.props.messages.map(
							(message, index) =>
									<Message text={message.text} author={message.author} timestamp={message.timestamp} key={index}/>
					)}
				</div>
		);
	}
}