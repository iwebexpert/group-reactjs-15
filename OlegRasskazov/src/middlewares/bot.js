import update from "react-addons-update";
import {CHAT_SEND, chatSend} from "../actions/chats";

const botTimers = [];

export function botAnswer(store) {
	return function wrapDispatch(next) {
		return function dispatchAndAnswer(action) {

			if (action.type === "CHAT_SEND" && action.payload.message.author !== "bot") {
				const {message, chatList} = action.payload;
				const {author, chatId} = message;

				if (botTimers.length > 0) {
					if (!updateBotTimer(store, chatId, author, chatList)) {
						pushBotTimer(chatId, setBotTimer(store, chatId, author, chatList)); // если в botTimers не найден - пушим
					}
				} else {
					pushBotTimer(chatId, setBotTimer(store, chatId, author, chatList)); // если botTimers еще пуст - пушим
				}
			}

			console.log('botTimers', botTimers);

			return next(action);
		}
	}
}

/**
 * Устанавливает в botTimer счетчик на отправку сообщения бота
 * @param store
 * @param chatId
 * @param author
 * @param chatList
 * @returns {number} - возвращает id счетчика, который потом можно будет обнулить
 */
function setBotTimer(store, chatId, author, chatList) {
	return setTimeout(() => {
		store.dispatch(
				chatSend(getBotMessage(chatId, author), chatList)
		);
	}, 3000);
}

/**
 * Запихивает в массив таймеров новый объект
 * @param chatId
 * @param botTimer
 */
function pushBotTimer(chatId, botTimer) {
	botTimers.push({
		chatId,
		botTimer,
	});
}

/**
 * Обновляет таймер в уже существующей записи
 * @param store
 * @param chatId
 * @param author
 * @param chatList
 */
function updateBotTimer(store, chatId, author, chatList) {
	let result = false;

	botTimers.map((item, index) => {
				if (item.chatId && item.chatId === chatId) {
					clearInterval(item.botTimer);
					item.botTimer = '';
					item.botTimer = setBotTimer(store, chatId, author, chatList);
					result = true; // если в botTimers найден таймер текущего чата - заменяем его и выходим из функции
				}
			}
	);

	return result;
}

function getTimestamp() {
	return (new Date()).toLocaleString();
}

/**
 * Отдает сообщение бота
 * @param chatId
 * @param author - автор, которому отвечает бот
 * @returns {{chatId: *, author: string, text: string, timestamp: *}}
 */
function getBotMessage(chatId, author) {
	return {
		author: 'bot',
		text: 'Эй, ' + author + '! Последнее слово за мной😜',
		chatId: chatId,
		timestamp: getTimestamp(),
	};
}