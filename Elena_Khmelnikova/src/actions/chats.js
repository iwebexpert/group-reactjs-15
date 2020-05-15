import { createAction } from 'redux-api-middleware';

export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_DELETE = 'CHAT_DELETE';
export const CHAT_HIGHLIGHTING = 'CHAT_HIGHLIGHTING';
export const CHAT_UNHIGHLIGHT = 'CHAT_UNHIGHLIGHT';

export const CHAT_REQUEST = 'CHAT_REQUEST';
export const CHAT_SUCCESS = 'CHAT_SUCCESS';
export const CHAT_FAILURE = 'CHAT_FAILURE';

export const chatsLoadApi = () => createAction({
    endpoint: '/api/chats.json',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    types: [
        CHAT_REQUEST,
        CHAT_SUCCESS,
        CHAT_FAILURE,
    ],
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
