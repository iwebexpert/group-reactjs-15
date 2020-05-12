import {combineReducers} from "redux";
import {chatsReducer} from "reducers/chats";
import {profileReducer} from "reducers/profile";
import {connectRouter} from 'connected-react-router';

export const initReducer = history => combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    router: connectRouter(history),
})