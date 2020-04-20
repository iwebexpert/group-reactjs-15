import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import chatReducer from '../reducers/chatReducer'
import messageReducer from '../reducers/messageReducer'

const reducers = combineReducers({
    chat: chatReducer,
    message: messageReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))