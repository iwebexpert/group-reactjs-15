import PROFILE_LOAD from 'actions/profile';

const profile = {
	name: "River's name",
};
const initialState = {
	profile: {}
};
export const profileReducer = (state = initailState, action) => {
	switch(action.type){
		case PROFILE_LOAD: return {...state, profile: profile};
		default: return state;
	}
}