import {chatFire, chatUnfire} from "../actions/chats";

/**
 * Если в неактивный в данный момент чат пришло сообщение - подсветить его. Если выбран - убрать подсветку.
 * @param store
 * @returns {function(*): function(*=): *}
 */
export function fireChat(store) {
	return function wrapDispatch(next) {
		return function dispatchAndFire(action) {

			const path = store.getState().router.location.pathname;
			const {chatList} = store.getState().chats.entries;

			if (action.type === "CHAT_SEND") {
				const urlChatId = path ? +path.match(/(\/chats\/)(\d*)/)[2] : null;

				if(action.payload.message.chatId !== urlChatId){
					const {chatId} = action.payload.message;

					store.dispatch(
							chatFire(chatId, chatList)
					);
				}
			} else if (action.type === "@@router/LOCATION_CHANGE" && (/chats/).test(action.payload.location.pathname)) {
				const chatId = +action.payload.location.pathname.match(/(\/chats\/)(\d*)/)[2];
				store.dispatch(
						chatUnfire(chatId, chatList)
				);
			}

			return next(action);
		}
	}
}