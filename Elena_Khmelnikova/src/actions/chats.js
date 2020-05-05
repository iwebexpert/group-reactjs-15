export const CHATS_LOAD = 'CHATS_LOAD';
export const CHAT_ADD = 'CHAT_ADD';

export const chatsLoad = () => ({
   type: CHATS_LOAD,
});

export const chatAdd = (chat) => ({
    type: CHAT_ADD,
    payload: chat,
});
