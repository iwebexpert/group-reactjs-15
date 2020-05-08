export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_FLASH = 'CHAT_FLASH';
export const CHAT_DELETE = 'CHAT_DELETE';

export const chatsLoad = () => ({
	type: CHATS_LOAD
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