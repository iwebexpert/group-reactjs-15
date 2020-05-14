import React from "react";
import {connect} from "react-redux";
import {push} from 'connected-react-router';

import {Messenger} from "components/Messenger";
import {chatLoad, chatLoad2, chatSend, chatAdd} from "actions/chats";

class MessengerContainer extends React.Component {
	/**
	 * Получаем чаты после загрузки Messenger
	 */
	componentDidMount() {
		const {loadChats, loadChats2} = this.props;
		if (!this.props.chatList.length) {
			// loadChats();
			loadChats2();
		}
	}

	getTimestamp() {
		return (new Date()).toLocaleString();
	};

	/**
	 * Вставляет новое сообщение в массив и перерисовывает
	 * @param message передается из MessageForm
	 */
	handleSendMessage = (message) => {
		const {sendMessage, chatId, chatList} = this.props;
		const index = getChatIndex(chatList, chatId);

		chatList[index].lastTimestamp = this.getTimestamp();

		sendMessage({...message, chatId, timestamp: this.getTimestamp()}, chatList);
	};

	/**
	 * Добавляем новый чат в ChatList
	 */
	handleAddChat = () => {
		const {addChat, newChatId, redirect} = this.props;
		const chatName = prompt('Введите имя чата');

		addChat(newChatId, chatName);
		redirect(newChatId);
	};

	handleRedirect = (chatId) => {
		const {redirect} = this.props;
		redirect(chatId);
	};


	render() {
		const {chatList, messages, isLoading, isError} = this.props;

		return (
				<Messenger
						addChat={this.handleAddChat}
						sendMessage={this.handleSendMessage}
						messages={messages}
						chatList={chatList}
						handleRedirect={this.handleRedirect}
						isLoading={isLoading}
						isError={isError}
				/>
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
	const {chatList, messages} = state.chats.entries;
	const chatId = +ownProps.match.params.id;
	let messagesArrayForShow = null;

	if (chatList && chatId) {
		if(getChatIndex(chatList, chatId) !== null){
			messagesArrayForShow = getMessagesArray(chatId, messages);
		}
	}

	return {
		chatList: chatList ? chatList : [],
		messages: messagesArrayForShow,
		chatId: chatId ? chatId : null,
		newChatId: chatList ? +chatList[chatList.length - 1].id + 1 : 1,
		isLoading: state.chats.loading,
		isError: state.chats.error,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// loadChats: () => dispatch(chatLoad()),
		loadChats2: () => dispatch(chatLoad2()),
		sendMessage: (message, chatList) => dispatch(chatSend(message, chatList)),
		addChat: (newChatId, chatName) => dispatch(chatAdd(newChatId, chatName)),
		redirect: (chatId) => dispatch(push(`/chats/${chatId}`)),
	}
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);