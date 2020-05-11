export const CHAT_LOAD = 'CHAT_LOAD';
export const CHAT_SEND = 'CHAT_SEND';
export const CHAT_ADD = 'CHAT_ADD';

export const chatLoad = () => ({
	type: CHAT_LOAD,
});

export const chatSend = (message, chatList) => ({
	type: CHAT_SEND,
	payload: {message, chatList},
});

export const chatAdd = (chatId, name) => ({
	type: CHAT_ADD,
	payload: {chatId, name},
});