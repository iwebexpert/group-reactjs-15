import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import chatReducer from 'reducers/chatReducer'
import messageReducer from 'reducers/messageReducer'
import userReducer from 'reducers/userReducer'

const reducers = combineReducers({
    chat: chatReducer,
    message: messageReducer,
    form: formReducer,
    user: userReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))