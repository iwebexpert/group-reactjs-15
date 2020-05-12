//TODO - reducer

import update from 'react-addons-update';
import {PROFILE_REQUEST,PROFILE_SUCCESS,PROFILE_FAILTURE} from 'actions/profile';



const initialState = {
    loading: false, //Для экрана ожидания
    error: false,
    entries: {},
};

export const profileReducer = (state = initialState, action) => {

    // if(action.type === CHATS_LOAD){
    //     return {
    //         ...state,
    //         entries: dataBackend,
    //     };
    // }

    switch(action.type){

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
                case PROFILE_FAILTURE:
                    return {
                        ...state,
                        loading: false,
                        error: true,
                    };

        default: 
            return state;
    }
}