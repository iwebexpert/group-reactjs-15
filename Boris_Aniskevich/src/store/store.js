import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import chatReducer from 'reducers/chatReducer'
import messageReducer from 'reducers/messageReducer'
import userReducer from 'reducers/userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
    chat: chatReducer,
    message: messageReducer,
    form: formReducer,
    user: userReducer,
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))