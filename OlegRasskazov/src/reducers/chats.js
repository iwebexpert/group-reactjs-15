import update from 'react-addons-update';
import {
	CHAT_LOAD,
	CHAT_SEND,
	CHAT_ADD,
	CHAT_FIRE,
	CHAT_UNFIRE,
	CHAT_REQUEST,
	CHAT_SUCCESS,
	CHAT_FAIL} from "actions/chats";

const getTimestamp = () => {
	return (new Date()).toLocaleString();
};

const dataBackend = {
	chatList: [
		{
			id: 1,
			name: "Чат 1",
			lastTimestamp: getTimestamp(),
			fire: false,
		},
		{
			id: 2,
			name: 'Чат 2',
			lastTimestamp: getTimestamp(),
			fire: false,
		},
		{
			id: 3,
			name: 'Чат 3',
			lastTimestamp: getTimestamp(),
			fire: false,
		},
	],
	messages: [
		{
			chatId: 1,
			author: 'Oleg',
			text: 'Сообщение 1',
			timestamp: getTimestamp(),
		},
		{
			chatId: 2,
			author: 'Oleg',
			text: 'Это чат нашей тусовки. Вас поприветствует наш бот',
			timestamp: getTimestamp(),
		},
		{
			chatId: 3,
			author: 'Oleg',
			text: 'Просто напишите любое сообщение и ждите ответа',
			timestamp: getTimestamp(),
		},
	],
};

const initialState = {
	loading: false, // для экрана ожидания загрузки данных
	error: false, // для экрана ошибки
	entries: {}, // сюда лягут сущности - данные из state. Пока их нет - объект пустой
};

export const chatsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHAT_LOAD:
			return {
				...state,
				entries: dataBackend,
			};

		case CHAT_SEND: {
			const {message} = action.payload;
			const newChatList = action.payload.chatList;

			return update(state, {
				entries: {
					chatList: {$set: newChatList},
					messages: {$push: [message]},
				}
			});
		}

		case CHAT_ADD: {
			const {name, chatId} = action.payload;

			return update(state, {
				entries: {
					chatList: {
						$push: [{id: chatId, name, lastTimestamp: getTimestamp(), fire: false}]
					},
				}
			});
		}

		case CHAT_FIRE: {
			const {chatId, chatList} = action.payload;
			chatList.map((chat, index) => {
				if (chat.id === chatId) {
					chat.fire = true;
				}
			});

			return update(state, {
				entries: {
					chatList: {
						$set: chatList
					},
				}
			});
		}

		case CHAT_UNFIRE: {
			const {chatId, chatList} = action.payload;
			if (chatList && chatList.length){
				chatList.map((chat, index) => {
					if (chat.id === chatId) {
						chat.fire = false;
					}
				});
			}

			return update(state, {
				entries: {
					chatList: {
						$set: chatList
					},
				}
			});
		}

		case CHAT_REQUEST: {
			return {
				...state,
				loading: true,
				error: false,
			}
		}

		case CHAT_SUCCESS: {
			let data = action.payload;
			data.chatList.map((item, index) => {
				item.lastTimestamp = getTimestamp();
			});
			data.messages.map((item, index) => {
				item.timestamp = getTimestamp();
			});
			return {
				...state,
				loading: false,
				entries: data,
			}
		}

		case CHAT_FAIL: {
			return {
				...state,
				loading: false,
				error: true,
			}
		}

		default:
			return state;
	}
};

