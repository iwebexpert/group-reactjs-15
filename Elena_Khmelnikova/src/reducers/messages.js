import update from 'immutability-helper';

import {
    MESSAGES_REQUEST, MESSAGES_SUCCESS, MESSAGES_FAILURE,
    MESSAGE_SEND, MESSAGE_DELETE, CHAT_DELETE
} from 'actions/messages';

const initialState = {
    loading: false,
    error: false,
    entries: {},
};

export const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            }

        case MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }

        case MESSAGE_SEND:
            const { chatId, text, author } = action.payload;

            let id = 1;
            if (state.entries[chatId]){
                const messagesIds = Object.keys(state.entries[chatId]);
                id = +messagesIds[messagesIds.length - 1] + 1;
            }

            if (!state.entries.hasOwnProperty(chatId)){
                return update(state, {
                    entries: {$merge: {[chatId]: {[id]: {id, text, author}}}},
                });
            }

            return update(state, {
                entries: {
                    [chatId]: {$merge: {[id]: {id, text, author}}}
                },
            });

        case MESSAGE_DELETE:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {$unset: [action.payload.messageId]}
                }
            });

        case CHAT_DELETE:
            return update(state, {
                entries: {$unset: [action.payload.chatId]}
            });

        default:
            return state;
    }
};
