import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import chatReducer from '../reducers/chatReducer'
import messageReducer from '../reducers/messageReducer'

const reducers = combineReducers({
    chat: chatReducer,
    message: messageReducer,
    form: formReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))