import React from 'react';

import {MessageForm} from "components/MessageForm";
import {MessageList} from "components/MessageList";
import {ChatList} from "components/ChatList";
import './Messenger.scss';

export class Messenger extends React.Component {
	state = {
		chatList: [
			{
				id: 1,
				name: "Чат 1",
				lastTimestamp: this.getTimestamp(),
			},
			{
				id: 2,
				name: 'Чат 2',
				lastTimestamp: this.getTimestamp(),
			},
			{
				id: 3,
				name: 'Чат 3',
				lastTimestamp: this.getTimestamp(),
			},
		],
		messages: [
			{
				chatId: 1,
				author: 'Oleg',
				text: 'Сообщение 1',
				timestamp: this.getTimestamp(),
			},
			{
				chatId: 2,
				author: 'Oleg',
				text: 'Это чат нашей тусовки. Вас поприветствует наш бот',
				timestamp: this.getTimestamp(),
			},
			{
				chatId: 3,
				author: 'Oleg',
				text: 'Просто напишите любое сообщение и ждите ответа',
				timestamp: this.getTimestamp(),
			},
		],
		botTimer: null,
	};

	/**
	 * Вставляет новое сообщение в массив и перерисовывает
	 * @param message передается из MessageForm
	 */
	handleMessageSend = (message) => {
		const chatId = +this.props.chatId;

		message.timestamp = this.getTimestamp();
		message.chatId = chatId;

		this.setState({
			messages: this.state.messages.concat(message),
		});

		this.updateChatTimestamp(chatId, message.timestamp);

		//TODO обновлять lastTimestamp в нужном чате ChatList
		// ChatList.setState({
		// 	// chatList[index]: lastTimestamp;
		// });
	};

	updateChatTimestamp(chatId, timestamp) {
		const index = this.getChatIndex(chatId); // почему тут возвращается undefined????
		const {chatList} = this.state;

		chatList[index].lastTimestamp = timestamp;

		this.setState({
			chatList: chatList,
		});
	}

	getTimestamp() {
		return (new Date()).toLocaleString();
	};

	/**
	 * Если чат обновляется, делаем:
	 * Если последнее сообщение не от бота - добавляем приветствие ботом автора последнего сообщения
	 * Обновляем последний таймстамп в чатлисте
	 */
	componentDidUpdate() {
		const {messages} = this.state;
		const lastAuthor = messages[messages.length - 1].author;

		if (lastAuthor !== 'bot') {
			this.sendBotMessage(lastAuthor);
		}
	}

	/**
	 * Отправляем сообщение от бота
	 * @param lastAuthor - кому отвечает бот
	 */
	sendBotMessage(lastAuthor) {
		const botMessage = {
			author: 'bot',
			text: 'Привет ' + lastAuthor + '! Добро пожаловать в чат. Для начала прочти правила чата в закрепленном посте',
		};

		clearInterval(this.state.botTimer);
		this.state.botTimer = '';

		this.state.botTimer = setTimeout(() => {
			this.handleMessageSend(botMessage);
		}, 3000);
	}

	/**
	 * Получаем индекс чата из массива чатов
	 * @param chatId
	 * @returns {*}
	 */
	getChatIndex = (chatId) => {
		const {chatList} = this.state;

		chatList.map((chat, index) => {
			if (chat.id === chatId) {
				return index;
			}
		})
	};


	/**
	 * Проверить есть ли среди чатов в ChatList переданный в параметрах id
	 * Если есть - найти среди сообщений сообщения с данным id
	 * @returns {[]} отдать массив полученных сообщений
	 */
	get messages() {
		const chatId = +this.props.chatId;
		const chatIndex = this.getChatIndex(chatId);

		let messages = [];

		if (chatId && !chatIndex) {
			this.state.messages.map((message, index) => {
				if (message.chatId === chatId) {
					messages.push(message);
				}
			});
		}

		return messages;
	}


	render() {
		return (
				<div className="messenger">
					<ChatList chatList={this.state.chatList}/>
					<div className='messenger-messages'>
						{this.messages ? <MessageList messages={this.messages}/> : 'Выберите чат'}
						{this.messages && <MessageForm onSend={this.handleMessageSend}/>}
					</div>
				</div>
		);
	}
}