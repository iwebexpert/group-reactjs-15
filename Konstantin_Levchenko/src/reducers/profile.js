import {
    PROFILES_LOAD,
    PROFILES_REQUEST,
    PROFILES_SUCCESS,
    PROFILES_FAILURE
} from '../actions/profile';

const dataBackend = {
    '1': {
        name: 'Petr',
        age: '31',
        chatId: '1',
    },
    '2': {
        name: 'Ivan',
        age: '21',
        chatId: '2',
    },
    '3': {
        name: 'Nikola',
        age: '18',
        chatId: '3',
    },
};

const initialState = {
    loading: false, // Для экрана ожидания
    error: false,
    entries: {},
};

export const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILES_LOAD:
            return {
                ...state,
                entries: dataBackend,
            };

        case PROFILES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case PROFILES_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };

        case PROFILES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
}