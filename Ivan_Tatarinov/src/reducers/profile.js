import {PROFILE_LOAD} from 'actions/profile';

const dataBackend = {
    name: 'Ivan',
    email: 'xxx@ya.ru',
    phone: '+79231234433',
    birthday: '20.02.1994',
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
                entries: dataBackend,
            };

        default:
            return state;
    }
}