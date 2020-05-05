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
	sendMessage = (message) => {
		const {chats, messages} = this.props;
		const chatId = +this.props.chatId;
		const index = getChatIndex(chats, chatId);

		message.timestamp = this.getTimestamp();
		message.chatId = chatId;
		chats[index].lastTimestamp = message.timestamp;

		this.setState({
			messages: messages.concat(message),
			chatList: chats,
		});
	};

	getTimestamp() {
		return (new Date()).toLocaleString();
	};

	render() {
		const {chats, messages} = this.props;

		return (
				<Messenger sendMessage={this.sendMessage} messages={messages} chats={chats}/>
		);
	}
}

/**
 * Получаем индекс чата из массива чатов
 * @param chats
 * @param chatId
 * @returns {*}
 */
function getChatIndex(chats, chatId) {
	let chatIndex = null;

	chats.map((chat, index) => {
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
	const chatIndex = getChatIndex(chatId);

	if (chatIndex !== null) {
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
	const chats = state.chats.entries.chatList;
	const messages = state.chats.entries.messages;
	const {match} = ownProps;
	const chatId = +match.params.id;

	if (chatId) {
		let messages = null;
		const index = getChatIndex(chats, chatId);

		if(chats[index]){
			const messagesArrayForShow = getMessagesArray(chatId, messages);
		}
	}


	let chatsArrayForShow = [];
	for (let key in chats){
		if(chats.hasOwnProperty(key)){
			chatsArrayForShow.push({
				id: chats[key].id,
				name: chats[key].name,
				lastTimestamp: chats[key].lastTimestamp,
			})
		}
	}

	return {
		chats: chatsArrayForShow,
		messages: messagesArrayForShow,
		chatId: chatId ? chatId : null,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadChats: () => dispatch(chatLoad()),
	}
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);