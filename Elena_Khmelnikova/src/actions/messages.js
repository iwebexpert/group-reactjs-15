import { createAction } from 'redux-api-middleware';

export const MESSAGE_SEND = 'MESSAGE_SEND';
export const MESSAGE_DELETE = 'MESSAGE_DELETE';
export const CHAT_DELETE = 'CHAT_DELETE';

export const MESSAGES_REQUEST = 'MESSAGES_REQUEST';
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const MESSAGES_FAILURE = 'MESSAGES_FAILURE';

export const messagesLoadApi = () => createAction({
    endpoint: '/api/messages.json',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    types: [
        MESSAGES_REQUEST,
        MESSAGES_SUCCESS,
        MESSAGES_FAILURE,
    ],
});

export const messageSend = (message) => ({
    type: MESSAGE_SEND,
    payload: message,
});

export const messageDelete = (data) => ({
   type: MESSAGE_DELETE,
   payload: data,
});

export const chatDelete = (chatId) => ({
    type: CHAT_DELETE,
    payload: chatId,
});
