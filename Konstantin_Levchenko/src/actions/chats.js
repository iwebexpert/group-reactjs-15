// import {createAction} from 'redux-api-middleware';

export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const ADD_CHAT = 'ADD_CHAT';
export const FIRE_CHAT = 'FIRE_CHAT';

// redux-api-middleware
export const CHATS_REQUEST = 'CHATS_REQUEST';
export const CHATS_SUCCESS = 'CHATS_SUCCESS';
export const CHATS_FAILURE = 'CHATS_FAILURE';

export const chatsLoad = () => ({
    type: CHATS_LOAD,
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
});

export const addChat = (chat) => ({
    type: ADD_CHAT,
    payload: chat,
});

export const fireChat = (chat) => ({
    type: FIRE_CHAT,
    payload: chat,
});

// redux-api-middleware
// export const chatsLoad2 = () => createAction({
//     endpoint: '/api/chats.json',
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     types: [
//         CHATS_REQUEST,
//         CHATS_SUCCESS,
//         CHATS_FAILURE
//     ],
// });

export const chatsLoadRequest = () => ({
    type: CHATS_REQUEST,
});

export const chatsLoadSuccess = (data) => ({
    type: CHATS_SUCCESS,
    payload: data,
});

export const chatsLoadFailure = (error) => ({
    type: CHATS_FAILURE,
    payload: error,
});

export const chatsLoad2 = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsLoadRequest());
            const result = (await fetch('/api/chats.json'));
            dispatch(chatsLoadSuccess(await result.json()));
        } catch (error) {
            dispatch(chatsLoadFailure(error));
        }
    };
};