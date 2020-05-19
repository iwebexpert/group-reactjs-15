import {PROFILE_LOAD} from 'actions/profile';
import {PROFILE_FAILURE, PROFILE_REQUEST, PROFILE_SUCCESS} from "actions/profile";

// const dataBackend = {
//     name: 'Ivan',
//     email: 'xxx@ya.ru',
//     phone: '+79231234433',
//     birthday: '20.02.1994',
// };

const initialState = {
    loading: false,
    entries: {},
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // case PROFILE_LOAD:
        //     return {
        //         ...state,
        //         entries: dataBackend,
        //     };

        case PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };
        case PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
            
        default:
            return state;
    }
}