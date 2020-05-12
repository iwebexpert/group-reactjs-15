import {
	PROFILE_REQUEST, 
	PROFILE_SUCCESS,
	PROFILE_FAILTURE
} from 'actions/profile';

const initialState = {
	data: {},
	loading: false,
	error: false
};
export const profileReducer = (state = initialState, action) => {
	//console.log('%%%%%%%%%%%%', action.type===PROFILE_LOAD);
	switch(action.type){
		case PROFILE_REQUEST: {
			
	//console.log('action profile state +++++++++++++', {...state, profile: profileData});
			return { 
				... state,
				loading: true,
				error: false
			}
		};
		case PROFILE_SUCCESS: {
			return {
				...state,
				loading: false,
				data: action.payload.results[0]
			}
		}
		case PROFILE_FAILTURE: {
			return {
				...state,
				error: true
			}
		}
		default: return state;
	}
}