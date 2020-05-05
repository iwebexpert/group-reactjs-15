import update from 'react-addons-update';
import {ADD_CHAT, CHATS_LOAD, CHATS_SEND} from '../actions/chats';

const dataBackend = {
    '1': {
        name: 'Chat 1',
        messages: [
            {
                text: 'Текстовое сообщение 1',
                author: 'Igor',
            }
        ],
    },
    '2': {
        name: 'Chat 2',
        messages: [
            {
                text: 'Текстовое сообщение 2',
                author: 'Igor',
            }
        ],
    },
    '3': {
        name: 'Chat 3',
        messages: [
            {
                text: 'Текстовое сообщение 3',
                author: 'Igor',
            }
        ],
    },
};

const initialState = {
    loading: false, // Для экрана ожидания
    entries: {},
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: dataBackend,
            };

        // ES5
        // case CHATS_SEND:
        //     return Object.assign({}, state, {
        //         entries: {
        //             [action.payload.chatId]: {
        //                 messages: 
        //                 state.entries[action.payload.chatId].messages.concat([{text: action.payload.text,
        //                 author: action.payload.author}]),
        //             }
        //         }
        //     });
        // ES6
        // case CHATS_SEND:
        //     return {
        //         ...state,
        //         entries: {
        //             ...state.entries,
        //             [action.payload.chatId]: {
        //                 ...state.entries[action.payload.chatId],
        //                 messages: [
        //                     ...state.entries[action.payload.chatId].messages,
        //                     {text: action.payload.text, author: action.payload.author},
        //                 ],
        //             }
        //         },
        //     };

        // update
        case CHATS_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{text: action.payload.text, author: action.payload.author}]}
                    }
                }
            });

        // add chat
        case ADD_CHAT:
            return update(state, {
                    entries: {
                        $merge: {
                            [action.payload.chatId]: {
                                name: action.payload.name,
                                messages: [],
                            }
                        },
                    }
                }
            );

        default:
            return state;
    }
}