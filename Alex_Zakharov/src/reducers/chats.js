import update from 'react-addons-update';

import { CHATS_LOAD, CHATS_SEND } from 'actions/chats';

const data = {
    '1': {
        id: 1,
        name: 'Chat 1',
        messages: [
            {
                text: 'Message text',
                author: 'Alex',
            }
        ],
    },
    '2': {
        id: 2,
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
    entries: {},
};

export const chatsReducer = (state = initialState, action) => {
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

        default:
            return state;
    }
};