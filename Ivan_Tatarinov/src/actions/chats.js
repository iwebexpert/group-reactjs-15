export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const ADD_CHAT = 'ADD_CHAT';
export const FIRE_CHAT = 'FIRE_CHAT';

export const chatsLoad = () => ({
    type: CHATS_LOAD,
});

export const chatsSend = (message) => ({
   type: CHATS_SEND,
   payload: message,
});

export const addChat = (chat) => ({
    type: ADD_CHAT,
    payload: chat,
});

export const fireChat = (chat) => ({
    type: FIRE_CHAT,
    payload: chat,
});