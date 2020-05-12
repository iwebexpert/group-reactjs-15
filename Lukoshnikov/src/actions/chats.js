import {createAction} from 'redux-api-middleware';

export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_FLASH = 'CHAT_FLASH';
export const CHAT_DELETE = 'CHAT_DELETE';
//redux api middleware
export const CHATS_REQUEST = 'CHATS_REQUEST';
export const CHATS_SUCCESS = 'CHATS_SUCCESS';
export const CHATS_FAILTURE = 'CHATS_FAILTURE';

export const chatsLoad = () => createAction({
	endpoint: '/api/chats.json',
	method: 'GET',
	headers: {
		'Content-Type': 'application-json'
	},
	types: [
		CHATS_REQUEST,
		CHATS_SUCCESS,
		CHATS_FAILTURE
	]
});
export const chatsSend = (message) => ({
	type: CHATS_SEND,
	payload: message
});
export const chatAdd = (chatId, name) => ({
	type: CHAT_ADD,
	payload: {chatId, name}
})
export const chatFlash = (chatId, flashState) => ({
	type: CHAT_FLASH,
	payload: {chatId, flashState}
});
export const deleteChat = (chatId) => ({
	type: CHAT_DELETE,
	payload: chatId
})