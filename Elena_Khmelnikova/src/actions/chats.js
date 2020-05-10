export const CHATS_LOAD = 'CHATS_LOAD';
export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_DELETE = 'CHAT_DELETE';
export const CHAT_HIGHLIGHTING = 'CHAT_HIGHLIGHTING';
export const CHAT_UNHIGHLIGHT = 'CHAT_UNHIGHLIGHT';

export const chatsLoad = () => ({
   type: CHATS_LOAD,
});

export const chatAdd = (chat) => ({
    type: CHAT_ADD,
    payload: chat,
});

export const chatDelete = (chatId) => ({
    type: CHAT_DELETE,
    payload: chatId
});

export const chatHighlighting = (chatId) => ({
    type: CHAT_HIGHLIGHTING,
    payload: chatId
});

export const chatUnhighlight = (chatId) => ({
    type: CHAT_UNHIGHLIGHT,
    payload: chatId
});
