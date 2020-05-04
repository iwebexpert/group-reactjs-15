import {PROFILES_LOAD} from '../actions/profile';

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
    entries: {},
};

export const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILES_LOAD:
            return {
                ...state,
                entries: dataBackend,
            };

        default:
            return state;
    }
}