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
	switch(action.type){
		case PROFILE_REQUEST: {
			
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
				error: true,
				loading: false
			}
		}
		default: return state;
	}
}