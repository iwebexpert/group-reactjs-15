import React from 'react';

import {MessageForm} from "./MessageForm";
import {Message} from "./Message";

export class Messenger extends React.Component {
	state = {
		messages: [
			{
				author: 'Oleg',
				text: 'Сообщение 1',
			}
		],
	};

	/**
	 * Вставляет новое сообщение в массив и перерисовывает
	 * @param props передаются из MessageForm
	 */
	handleMessageSend = (props) => {
		this.setState({
			messages: [...this.state.messages, props],
		});
	};

	/**
	 * Если последнее сообщение не от бота - добавляем приветствие ботом автора последнего сообщения
	 */
	componentDidUpdate() {
		const {messages} = this.state;

		setTimeout(() => {
			const lastAuthor = messages[messages.length - 1].author;

			if (lastAuthor !== 'bot') {
				this.setState({
					messages: [...messages, {author: 'bot', text: 'Привет ' + lastAuthor}],
				});
			}
		}, 1000);
	}

	render()
	{
		const {messages} = this.state;

		return (
				<div>
					<ul>
						{messages.map((message, index) => <Message text={message.text} author={message.author} key={index}/>)}
					</ul>
					<MessageForm onSend={this.handleMessageSend} />
				</div>
		);
	}
}