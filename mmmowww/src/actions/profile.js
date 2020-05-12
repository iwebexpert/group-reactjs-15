import {createAction} from 'redux-api-middleware';
export const PROFILE = 'PROFILE';

export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILTURE = 'PROFILE_FAILTURE';


export const profile = (name,subname,age) => ({
    type: PROFILE,
    payload: name,
    payload: subname,
    payload: age
});


export const profileJSON = () => createAction({
	endpoint:"api/profile.json",
	method:"GET",
	headers:{
		'Content-Type':'application/json'
		}
	types:[
	         PROFILE_REQUEST,
    		 PROFILE_SUCCESS,
			 PROFILE_FAILTURE
	]
});



//TODO PROFILE_LOAD

//const + action

//TODO redux-api-middleware or fetch