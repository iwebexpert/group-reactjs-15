import {PROFILE_LOAD, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAIL} from "actions/profile";

const profileData = {
	name: 'Василий',
};

const initialState = {
	loading: false,
	error: false,
	data: {},
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE_LOAD:
			return {
				...state,
				data: profileData,
			};

		case PROFILE_REQUEST: {
			return {
				...state,
				loading: true,
				error: false,
			}
		}

		case PROFILE_SUCCESS: {
			return {
				...state,
				loading: false,
				data: action.payload.results[0],
			}
		}

		case PROFILE_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}

		default:
			return state;
	}
};