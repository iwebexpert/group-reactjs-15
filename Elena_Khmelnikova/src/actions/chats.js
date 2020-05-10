export const CHATS_LOAD = 'CHATS_LOAD';
export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_HIGHLIGHTING = 'CHAT_HIGHLIGHTING';

export const chatsLoad = () => ({
   type: CHATS_LOAD,
});

export const chatAdd = (chat) => ({
    type: CHAT_ADD,
    payload: chat,
});

export const chatHighlighting = (chatId) => ({
    type: CHAT_HIGHLIGHTING,
    payload: chatId
});
