export const PROFILES_LOAD = 'PROFILES_LOAD';

export const PROFILES_REQUEST = 'PROFILES_REQUEST';
export const PROFILES_SUCCESS = 'PROFILES_SUCCESS';
export const PROFILES_FAILURE = 'PROFILES_FAILURE';

export const profilesLoad = () => ({
    type: PROFILES_LOAD,
});

export const profilesLoadRequest = () => ({
    type: PROFILES_REQUEST,
});

export const profilesLoadSuccess = (data) => ({
    type: PROFILES_SUCCESS,
    payload: data,
});

export const profilesLoadFailure = (error) => ({
    type: PROFILES_FAILURE,
    payload: error,
});

export const profilesLoad2 = () => {
    return async (dispatch) => {
        try {
            dispatch(profilesLoadRequest());
            const result = (await fetch('/api/profiles.json'));
            dispatch(profilesLoadSuccess(await result.json()));
        } catch (error) {
            dispatch(profilesLoadFailure(error));
        }
    };
};