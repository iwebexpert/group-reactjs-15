export const CHAT_LOAD = 'CHAT_LOAD';
export const CHAT_SEND = 'CHAT_SEND';

export const chatLoad = () => ({
	type: CHAT_LOAD,
});

export const chatSend = (message, chatList) => ({
	type: CHAT_SEND,
	payload: {message, chatList},
});