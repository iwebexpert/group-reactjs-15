import update from 'immutability-helper';

import { MESSAGES_LOAD, MESSAGE_SEND } from 'actions/messages';

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
            const { chatId, text, author} = action.payload;

            if (!state.entries.hasOwnProperty(chatId)){
                return update(state, {
                    entries: {$merge: {[chatId]: [{text, author}]}},
                });
            }

            return update(state, {
                entries: {
                    [chatId]: {$push: [{text, author}]},
                },
            });
        default:
            return state;
    }
};
