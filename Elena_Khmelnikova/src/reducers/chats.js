import update from 'immutability-helper';

import {
    CHAT_REQUEST, CHAT_SUCCESS, CHAT_FAILURE,
    CHAT_ADD, CHAT_DELETE,
    CHAT_HIGHLIGHTING, CHAT_UNHIGHLIGHT
} from 'actions/chats';

const initialState = {
    loading: false,
    error: false,
    entries: {},
};

export const ChatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHAT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }

        case CHAT_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            }

        case CHAT_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }

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
