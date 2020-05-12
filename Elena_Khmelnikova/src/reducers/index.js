import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { ChatsReducer } from './chats';
import { MessagesReducer } from './messages';
import { ProfileReducer } from './profile';

export const initReducer = (history) => combineReducers({
    router: connectRouter(history),
    chats: ChatsReducer,
    messages: MessagesReducer,
    profile: ProfileReducer,
});
