import {combineReducers} from 'redux';

import {chatsReducer} from './chats';
import {profilesReducer} from './profile'

export const rootReducer = combineReducers({
    chats: chatsReducer,
    profiles: profilesReducer,
});