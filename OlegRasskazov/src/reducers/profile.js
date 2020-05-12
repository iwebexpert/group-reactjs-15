import {PROFILE_LOAD} from "actions/profile";

const profileData = {
	name: 'Василий',
};

const initialState = {
	loading: false,
	data: {},
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE_LOAD:
			return {
				...state,
				data: profileData,
			};

		default:
			return state;
	}
};