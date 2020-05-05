import update from 'immutability-helper';

import { CHATS_LOAD, CHAT_ADD } from 'actions/chats';

const dataBackend = {
    '1': {
        'name': 'Чат 1',
    },
    '2': {
        'name': 'Чат 2',
    },
    '3': {
        'name': 'Чат 3',
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
        default:
            return state;
    }
};
