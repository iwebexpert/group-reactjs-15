export const CHAT_LOAD = 'CHAT_LOAD';
export const CHAT_SEND = 'CHAT_SEND';
export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_FIRE = 'CHAT_FIRE';
export const CHAT_UNFIRE = 'CHAT_UNFIRE';

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

export const chatFire = (chatId, chatList) => ({
	type: CHAT_FIRE,
	payload: {chatId, chatList},
});

export const chatUnfire = (chatId, chatList) => ({
	type: CHAT_UNFIRE,
	payload: {chatId, chatList},
});