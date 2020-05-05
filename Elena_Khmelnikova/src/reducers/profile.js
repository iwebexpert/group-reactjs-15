import { PROFILE_LOAD } from 'actions/profile';

const dataBackend = {
    'username': 'Ivan',
    'email': 'Ivan@mail.ru',
    'firstName': 'Иван',
    'lastName': 'Петров',
};

const initialState = {
    loading: false,
    entries: dataBackend,
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOAD:
            return {
                ...state,
                entries: dataBackend,
            }
        default:
            return state;
    }
};
