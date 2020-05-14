import {createAction} from "redux-api-middleware";

export const CHAT_LOAD = 'CHAT_LOAD';
export const CHAT_SEND = 'CHAT_SEND';
export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_FIRE = 'CHAT_FIRE';
export const CHAT_UNFIRE = 'CHAT_UNFIRE';

//redux-api-middleware
export const CHAT_REQUEST = 'CHAT_REQUEST';
export const CHAT_SUCCESS = 'CHAT_SUCCESS';
export const CHAT_FAIL = 'CHAT_FAIL';

export const chatLoad = () => ({
	type: CHAT_LOAD,
});

export const chatSend = (message, chatList) => ({
	type: CHAT_SEND,
	payload: {message, chatList},
});

export const chatAdd = (chatId, name) => ({
	type: CHAT_ADD,
	payload: {chatId, name},
});

export const chatFire = (chatId, chatList) => ({
	type: CHAT_FIRE,
	payload: {chatId, chatList},
});

export const chatUnfire = (chatId, chatList) => ({
	type: CHAT_UNFIRE,
	payload: {chatId, chatList},
});

//redux-api-middleware
/*
export const chatLoad2 = () => createAction({
	endpoint: '/api/chats.json',
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
	types: [
		CHAT_REQUEST,
		CHAT_SUCCESS,
		CHAT_FAIL
	]
});*/

export const chatLoadRequest = () => ({
	type: CHAT_REQUEST,
});

export const chatLoadSuccess = (data) => ({
	type: CHAT_SUCCESS,
	payload: data,
});

export const chatLoadFail = (error) => ({
	type: CHAT_FAIL,
	payload: error,
});

export const chatLoad2 = () => {
	return async (dispatch) => {
		try {
			dispatch(chatLoadRequest());
			const result = (await fetch("/api/chats.json"));
			dispatch(chatLoadSuccess(await result.json()));
		} catch (error) {
			dispatch(chatLoadFail(error));
		}
	};
};