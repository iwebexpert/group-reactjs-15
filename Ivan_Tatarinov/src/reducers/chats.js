import update from 'react-addons-update';
import {ADD_CHAT, CHATS_FAILURE, CHATS_LOAD, CHATS_REQUEST, CHATS_SEND, CHATS_SUCCESS, FIRE_CHAT} from 'actions/chats';

// const dataBackend = {
//     '1': {
//         name: 'Chat 1',
//         fire: false,
//         messages: [
//             {
//                 text: 'Текстовое сообщение 1',
//                 author: 'Ivan',
//             }
//         ],
//     },
//     '2': {
//         name: 'Chat 2',
//         fire: false,
//         messages: [
//             {
//                 text: 'Текстовое сообщение 2',
//                 author: 'Ivan',
//             }
//         ],
//     },
//     '3': {
//         name: 'Chat 3',
//         fire: false,
//         messages: [
//             {
//                 text: 'Текстовое сообщение 3',
//                 author: 'Ivan',
//             }
//         ],
//     },
// };

const initialState = {
    loading: false,
    error: false,
    entries: {},
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case CHATS_LOAD:
        //     return {
        //         ...state,
        //         entries: dataBackend,
        //     };
        //ES5
        // case CHATS_SEND:
        //     return Object.assign({}, state, {
        //         entries: {
        //             [action.payload.chatId]: {
        //                 messages: 
        //                 state.entries[action.payload.chatId].messages.concat([{text: action.payload.text, author: action.payload.author}]),
        //             }
        //         }
        //     });
        //ES6
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

        //update
        case CHATS_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{text: action.payload.text, author: action.payload.author}]}
                    }
                }
            });

        case ADD_CHAT:
            const {name, chatId} = action.payload;
            return update(state, {
                entries: {
                    $merge: {
                        [chatId]: {
                            name,
                            fire: false,
                            messages: [],
                        }
                    },
                }
            });

        case FIRE_CHAT:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        fire: {$set: action.payload.fire},
                    }
                }
            });

        case CHATS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case CHATS_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };
        case CHATS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
}