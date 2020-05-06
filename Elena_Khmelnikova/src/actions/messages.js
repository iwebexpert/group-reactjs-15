export const MESSAGES_LOAD = 'MESSAGES_LOAD';
export const MESSAGE_SEND = 'MESSAGE_SEND';

export const messagesLoad = () => ({
    type: MESSAGES_LOAD,
});

export const messageSend = (message) => ({
    type: MESSAGE_SEND,
    payload: message,
});
