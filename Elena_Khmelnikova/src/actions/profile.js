export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';

export const profileLoadRequest = () => ({
   type: PROFILE_REQUEST,
});

export const profileLoadSuccess = (data) => ({
   type: PROFILE_SUCCESS,
   payload: data,
});

export const profileLoadFailure = (error) => ({
   type: PROFILE_FAILURE,
   payload: error,
});

export const profileLoad = () => {
   return async (dispatch) => {
      try {
         dispatch(profileLoadRequest());

         const result = await fetch('/api/profile.json');
         dispatch(profileLoadSuccess(await result.json()));
      } catch (error) {
         dispatch(profileLoadFailure(error));
      }
   };
};
