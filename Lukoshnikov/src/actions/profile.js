import {createAction} from 'redux-api-middleware';

export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILTURE = 'PROFILE_FAILTURE';

export const profileLoad = () => createAction({
	endpoint: 'https://randomuser.me/api/?results=1',
	method: 'GET',
	headers: {
		'Content-Types': 'application-json'
	},
	types: [
		PROFILE_REQUEST,
		PROFILE_SUCCESS,
		PROFILE_FAILTURE
	]
});

//