import {PROFILE_LOAD} from 'actions/profile';

const profileData = {
	name: "Bob",
};
const initialState = {
	profile: {name: "River's name"}
};
export const profileReducer = (state = initialState, action) => {
	//console.log('%%%%%%%%%%%%', action.type===PROFILE_LOAD);
	switch(action.type){
		case PROFILE_LOAD: {
			
	//console.log('action profile state +++++++++++++', {...state, profile: profileData});
			return { ... profileData}
		};
		default: return state;
	}
}