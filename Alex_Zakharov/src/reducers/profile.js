import { PROFILE_LOAD } from 'actions/profile';

const data = {
    name: 'Jack'
};

const initialState = {
    loading: false,
    entries: {},
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOAD:
            return {
                ...state,
                entries: data,
            };

        default:
            return state;
    }
};