//TODO PROFILE_LOAD

//const + action
export const PROFILE = 'PROFILE';

export const profile = (name,subname,age) => ({
    type: PROFILE,
    payload: name,
    payload: subname,
    payload: age
});
