import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import chatReducer from '../reducers/chatReducer'

const reducers = combineReducers({
    chat: chatReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))