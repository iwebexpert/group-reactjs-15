import {CHAT_LOAD, CHAT_SEND} from "actions/chats";

const getTimestamp = () => {
	return (new Date()).toLocaleString();
};

const dataBackend = {
	chatList: [
		{
			id: 1,
			name: "Чат 1",
			lastTimestamp: getTimestamp(),
		},
		{
			id: 2,
			name: 'Чат 2',
			lastTimestamp: getTimestamp(),
		},
		{
			id: 3,
			name: 'Чат 3',
			lastTimestamp: getTimestamp(),
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
	botTimer: null,
};

const initState = {
	loading: false, // для экрана ожидания загрузки данных
	entries: {}, // сюда лягут сущности - данные из state. Пока их нет - объект пустой
};

export const chatsReducer = (state = initState, action) => {
	switch (action.type) {
		case CHAT_LOAD:
			return {
				...state,
				entries: dataBackend,
			};
		case CHAT_SEND:
			return {

			};
		default:
			return state;
	}
};

