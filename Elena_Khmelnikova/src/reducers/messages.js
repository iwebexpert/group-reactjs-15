import update from 'immutability-helper';

import { MESSAGES_LOAD, MESSAGE_SEND, MESSAGES_SEND_IN_NEW_CHAT } from 'actions/messages';

const dataBackend = {
    '1': [
        {
            'text': 'Первое сообщение в чате 1',
            'author': 'Игорь',
        },
    ],
    '2': [
        {
            'text': 'Первое сообщение в чате 2',
            'author': 'Игорь',
        },
    ],
    '3': [
        {
            'text': 'Первое сообщение в чате 3',
            'author': 'Игорь',
        },
    ],
};

const initialState = {
    loading: false,
    entries: dataBackend,
};

export const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGES_LOAD:
            return {
                ...state,
                entries: dataBackend,
            };
        case MESSAGE_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {$push: [{text: action.payload.text, author: action.payload.author}]},
                },
            });
        case MESSAGES_SEND_IN_NEW_CHAT:
            return update(state, {
                entries: {$merge: action.payload.data},
            });
        default:
            return state;
    }
};
