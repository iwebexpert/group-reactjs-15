import {combineReducers} from "redux";
import {chatsReducer} from "reducers/chats";
import {profileReducer} from "reducers/profile";

export const initReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer ,
})