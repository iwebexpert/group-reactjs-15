import React from "react";
import {connect} from "react-redux";

import {Messenger} from "components/Messenger";
import {chatLoad, chatSend} from "actions/chats";

class MessengerContainer extends React.Component {
	componentDidMount() {
		const {loadChats} = this.props;
		loadChats(); // Получаем чаты после загрузки Messenger
	}

	/**
	 * Вставляет новое сообщение в массив и перерисовывает
	 * @param message передается из MessageForm
	 */
	handleSendMessage = (message) => {
		const {sendMessage, chatId, chatList} = this.props;
		const index = getChatIndex(chatList, chatId);
		console.log(chatList);
		chatList[index].lastTimestamp = this.getTimestamp();
		console.log(chatList);

		sendMessage({...message, chatId, timestamp: this.getTimestamp()}, chatList);
	};

	getTimestamp() {
		return (new Date()).toLocaleString();
	};

	render() {
		const {chatList, messages} = this.props;

		return (
				<Messenger sendMessage={this.handleSendMessage} messages={messages} chatList={chatList}/>
		);
	}
}

/**
 * Получаем индекс чата из массива чатов
 * @param chatList
 * @param chatId
 * @returns {*}
 */
function getChatIndex(chatList, chatId) {
	let chatIndex = null;

	chatList.map((chat, index) => {
		if (chat.id === chatId) {
			chatIndex = index;
		}
	});

	return chatIndex;
}

/**
	 * Проверить есть ли среди чатов в ChatList переданный в параметрах id
	 * Если есть - найти среди сообщений сообщения с данным id
	 * @returns {[]} отдать массив полученных сообщений
	 */
function getMessagesArray (chatId, messages) {
	let messagesArray = null;

	if (chatId) {
		messagesArray = [];
		messages.map(message => {
			if (message.chatId === chatId) {
				messagesArray.push(message);
			}
		});
	}

	return messagesArray;
}

/**
 * Трансформируем Store в props
 * @param state - текущее состояние Store
 * @param ownProps - дополнительные пропсы
 * @returns {{chatId: (*|null), chats: [], messages: null}}
 */
function mapStateToProps(state, ownProps) {
	const chatList = state.chats.entries.chatList;
	const messages = state.chats.entries.messages;
	const {match} = ownProps;
	const chatId = +match.params.id;
	let index, messagesArrayForShow = null;

	if (chatList && chatId) {
		if(getChatIndex(chatList, chatId) !== null){
			messagesArrayForShow = getMessagesArray(chatId, messages);
		}
	}

	console.log(chatList);

	let chatsArrayForShow = [];
	for (let key in chatList){
		if(chatList.hasOwnProperty(key)){
			chatsArrayForShow.push({
				id: chatList[key].id,
				name: chatList[key].name,
				lastTimestamp: chatList[key].lastTimestamp,
			})
		}
	}

	return {
		chatList: chatsArrayForShow,
		messages: messagesArrayForShow,
		chatId: chatId ? chatId : null,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadChats: () => dispatch(chatLoad()),
		sendMessage: (message, chatList) => dispatch(chatSend(message, chatList)),
	}
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);