import update from 'immutability-helper';

import { CHATS_LOAD, CHAT_ADD, CHAT_DELETE, CHAT_HIGHLIGHTING, CHAT_UNHIGHLIGHT } from 'actions/chats';

const dataBackend = {
    '1': {
        'name': 'Чат 1',
        'newMessage': false
    },
    '2': {
        'name': 'Чат 2',
        'newMessage': false
    },
    '3': {
        'name': 'Чат 3',
        'newMessage': false
    },
};

const initialState = {
    loading: false,
    entries: dataBackend,
};

export const ChatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: dataBackend,
            };

        case CHAT_ADD:
            return update(state, {
                entries: {$merge: {[action.payload.chatId]: {name: action.payload.name}}}
            });

        case CHAT_DELETE:
            return update(state, {
                entries: {$unset: [action.payload.chatId]}
            });

        case CHAT_HIGHLIGHTING:
            return update(state, {
               entries: {
                   [action.payload.chatId] : {'newMessage': {$set: true}}
               }
            });

        case CHAT_UNHIGHLIGHT:
            return update(state, {
                entries: {
                    [action.payload.chatId] : {'newMessage': {$set: false}}
                }
            });

        default:
            return state;
    }
};
