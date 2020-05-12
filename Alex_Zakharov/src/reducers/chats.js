import update from 'react-addons-update';

import {
    CHATS_LOAD,
    CHATS_SEND,
    CHATS_ADD,
    CHATS_REQUEST,
    CHATS_SUCCESS,
    CHATS_FAILURE
} from 'actions/chats';

const data = {
    '1': {
        id: '1',
        name: 'Chat 1',
        messages: [
            {
                text: 'Message text',
                author: 'Alex',
            }
        ],
    },
    '2': {
        id: '2',
        name: 'Chat 2',
        messages: [
            {
                text: 'Message text2',
                author: 'Alex',
            }
        ],
    }
};

const initialState = {
    loading: false,
    error: false,
    entries: {},
};

export const chatsReducer = (state = initialState, action) => {
    if (!action)
        return state;

    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: data,
            };

        case CHATS_SEND:
            const payload = action.payload;
            const newMsg = {
                text: payload.text,
                author: payload.author,
            };
            return update(state, {
                entries: {
                    [payload.id]: {
                        messages: { $push: [newMsg] }
                    }
                }
            });

        case CHATS_ADD:
            const chatId = action.payload + '';
            const newChat = {
                [chatId]: {
                    id: chatId,
                    name: 'Chat ' + chatId,
                    messages: [
                        {
                            text: 'This is new chat ' + chatId,
                            author: 'ChatBot',
                        }
                    ],
                }
            };
            return update(state, {
                entries: {
                    $merge: newChat,
                }
            });

        case CHATS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };

        case CHATS_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload
            };

        case CHATS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };

        default:
            return state;
    }
};