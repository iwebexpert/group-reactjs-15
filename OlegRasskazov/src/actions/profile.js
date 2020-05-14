export const PROFILE_LOAD = 'PROFILE_LOAD';
export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAIL = 'PROFILE_FAIL';

export const profileLoad = () => ({
	type: PROFILE_LOAD,
});

export const profileLoadRequest = () => ({
	type: PROFILE_REQUEST,
});

export const profileLoadSuccess = (data) => ({
	type: PROFILE_SUCCESS,
	payload: data,
});

export const profileLoadFail = (error) => ({
	type: PROFILE_FAIL,
	payload: error,
});

export const profileLoad2 = () => {
	return async (dispatch) => {
		try {
			dispatch(profileLoadRequest());
			const result = (await fetch("https://randomuser.me/api/?results=1"));
			dispatch(profileLoadSuccess(await result.json()));
		} catch (error) {
			dispatch(profileLoadFail(error));
		}
	};
};