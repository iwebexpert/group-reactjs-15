import React from 'react';

import {MessageForm} from "Components/MessageForm";
import {MessageList} from "Components/MessageList";
import './Messenger.css';

export class Messenger extends React.Component {
	state = {
		messages: [
			{
				author: 'Oleg',
				text: 'Сообщение 1',
				timestamp: this.getTimestamp(),
			},
			{
				author: 'Oleg',
				text: 'Это чат нашей тусовки. Вас поприветствует наш бот',
				timestamp: this.getTimestamp(),
			},
			{
				author: 'Oleg',
				text: 'Просто напишите любое сообщение и ждите ответа',
				timestamp: this.getTimestamp(),
			},
		],
		botTimer: '',
	};

	/**
	 * Вставляет новое сообщение в массив и перерисовывает
	 * @param message передается из MessageForm
	 */
	handleMessageSend = (message) => {
		message.timestamp = this.getTimestamp();
		this.setState({
			messages: this.state.messages.concat(message),
		});
	};

	getTimestamp() {
		return (new Date()).toLocaleString();
	};

	/**
	 * Если последнее сообщение не от бота - добавляем приветствие ботом автора последнего сообщения
	 */
	componentDidUpdate() {
		const {messages} = this.state;
		const lastAuthor = messages[messages.length - 1].author;
		const botMessage = {
			author: 'bot',
			text: 'Привет ' + lastAuthor + '! Добро пожаловать в чат. Для начала прочти правила чата в закрепленном посте',
			timestamp: '',
		};

		clearInterval(this.state.botTimer);
		this.state.botTimer = '';

		this.state.botTimer = setTimeout(() => {
			if (lastAuthor !== 'bot') {
				botMessage.timestamp = this.getTimestamp();
				this.setState({
					messages: this.state.messages.concat(botMessage),
				});
			}
		}, 3000);
	}

	render() {
		const {messages} = this.state;

		return (
				<div className='messenger'>
					<MessageList messages={messages}/>
					<MessageForm onSend={this.handleMessageSend}/>
				</div>
		);
	}
}