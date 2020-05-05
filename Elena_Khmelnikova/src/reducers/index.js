import { combineReducers } from 'redux';

import { ChatsReducer } from './chats';
import { MessagesReducer } from './messages';
import { ProfileReducer } from './profile';

export const rootReducer = combineReducers({
    chats: ChatsReducer,
    messages: MessagesReducer,
    profile: ProfileReducer,
});
