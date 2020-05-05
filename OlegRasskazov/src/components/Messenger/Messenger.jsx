import React from 'react';

import {MessageForm} from "components/MessageForm";
import {MessageList} from "components/MessageList";
import {ChatList} from "components/ChatList";
import {Header} from "components/Header";
import {Footer} from "../Footer";
import 'components/Layout/Layout.scss';
import './Messenger.scss';

export class Messenger extends React.Component {
	// state = {
	// 	chatList: [
	// 		{
	// 			id: 1,
	// 			name: "Чат 1",
	// 			lastTimestamp: this.getTimestamp(),
	// 		},
	// 		{
	// 			id: 2,
	// 			name: 'Чат 2',
	// 			lastTimestamp: this.getTimestamp(),
	// 		},
	// 		{
	// 			id: 3,
	// 			name: 'Чат 3',
	// 			lastTimestamp: this.getTimestamp(),
	// 		},
	// 	],
	// 	messages: [
	// 		{
	// 			chatId: 1,
	// 			author: 'Oleg',
	// 			text: 'Сообщение 1',
	// 			timestamp: this.getTimestamp(),
	// 		},
	// 		{
	// 			chatId: 2,
	// 			author: 'Oleg',
	// 			text: 'Это чат нашей тусовки. Вас поприветствует наш бот',
	// 			timestamp: this.getTimestamp(),
	// 		},
	// 		{
	// 			chatId: 3,
	// 			author: 'Oleg',
	// 			text: 'Просто напишите любое сообщение и ждите ответа',
	// 			timestamp: this.getTimestamp(),
	// 		},
	// 	],
	// 	botTimer: null,
	// };

	// /**
	//  * Вставляет новое сообщение в массив и перерисовывает
	//  * @param message передается из MessageForm
	//  */
	// handleMessageSend = (message) => {
	// 	const chatId = this.props.chatId;
	// 	const index = this.getChatIndex(chatId);
	// 	const {chatList} = this.state;
	//
	// 	message.timestamp = this.getTimestamp();
	// 	message.chatId = chatId;
	// 	chatList[index].lastTimestamp = message.timestamp;
	//
	// 	this.setState({
	// 		messages: this.state.messages.concat(message),
	// 		chatList: chatList,
	// 	});
	// };
	//
	// getTimestamp() {
	// 	return (new Date()).toLocaleString();
	// };

	// /**
	//  * Если чат обновляется, делаем:
	//  * Если последнее сообщение не от бота - добавляем приветствие ботом автора последнего сообщения
	//  * Обновляем последний таймстамп в чатлисте
	//  */
	// componentDidUpdate() {
	// 	console.log('componentDidUpdate');
	// 	const {messages} = this.state;
	// 	const lastAuthor = messages[messages.length - 1].author;
	//
	// 	if (lastAuthor !== 'bot') {
	// 		this.sendBotMessage(lastAuthor);
	// 	}
	// }

	// /**
	//  * Отправляем сообщение от бота
	//  * @param lastAuthor - кому отвечает бот
	//  */
	// sendBotMessage(lastAuthor) {
	// 	const botMessage = {
	// 		author: 'bot',
	// 		text: 'Эй, ' + lastAuthor + '! Последнее слово за мной😜',
	// 	};
	//
	// 	clearInterval(this.state.botTimer);
	// 	this.state.botTimer = '';
	//
	// 	this.state.botTimer = setTimeout(() => {
	// 		this.handleMessageSend(botMessage);
	// 	}, 3000);
	// }

	// /**
	//  * Получаем индекс чата из массива чатов
	//  * @param chatId
	//  * @returns {*}
	//  */
	// getChatIndex = (chatId) => {
	// 	const {chatList} = this.state;
	// 	let chatIndex = null;
	//
	// 	chatList.map((chat, index) => {
	// 		if (chat.id === chatId) {
	// 			chatIndex = index;
	// 		}
	// 	});
	//
	// 	return chatIndex;
	// };


	// /**
	//  * Проверить есть ли среди чатов в ChatList переданный в параметрах id
	//  * Если есть - найти среди сообщений сообщения с данным id
	//  * @returns {[]} отдать массив полученных сообщений
	//  */
	// get messages() {
	// 	const chatId = this.props.chatId;
	// 	const chatIndex = this.getChatIndex(chatId);
	//
	// 	let messages = null;
	//
	// 	if (chatId && chatIndex !== null) {
	// 		messages = [];
	// 		this.state.messages.map((message, index) => {
	// 			if (message.chatId === chatId) {
	// 				messages.push(message);
	// 			}
	// 		});
	// 	}
	//
	// 	return messages;
	// }


	render() {
		const {chatList, messages, sendMessage} = this.props;

		return (
				<div className="layout">
					<Header/>
					<div className="messenger">
						<ChatList chatList={chatList}/>
						<div className='messenger-messages'>
							{messages ? <MessageList messages={messages}/> : 'Выберите чат'}
							{messages && <MessageForm onSend={sendMessage}/>}
						</div>
					</div>
					<Footer/>
				</div>
		);
	}
}