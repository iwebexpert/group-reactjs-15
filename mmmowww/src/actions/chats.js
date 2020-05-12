import {createAction} from 'redux-api-middleware';

export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';

//redux-api-middleware
export const CHATS_REQUEST = 'CHATS_REQUEST';
export const CHATS_SUCCESS = 'CHATS_SUCCESS';
export const CHATS_FAILTURE = 'CHATS_FAILTURE';

export const chatsLoad = () => ({
    type: CHATS_LOAD,
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
});

export const chatsAdd = (chatId, name) => ({
    type: CHATS_ADD,
    payload: {chatId, name},
});

//redux-api-middleware
// export const chatsLoad2 = () => createAction({
//     endpoint: '/api/chats.json',
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     types: [
//         CHATS_REQUEST,
//         CHATS_SUCCESS,
//         CHATS_FAILTURE
//     ],
// });

export const chatsLoadRequest = () => ({
    type: CHATS_REQUEST,
});

export const chatsLoadSuccess = (data) => ({
    type: CHATS_SUCCESS,
    payload: data,
});

export const chatsLoadFailture = (error) => ({
    type: CHATS_FAILTURE,
    payload: error,
});

export const chatsLoad2 = () => {
    return async (dispatch) => {
        try{
            dispatch(chatsLoadRequest());
            const restult = (await fetch('/api/chats.json'));
            dispatch(chatsLoadSuccess(await restult.json()));
        } catch (error) {
            dispatch(chatsLoadFailture(error));
        }
    };
};