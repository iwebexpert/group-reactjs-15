import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import chatReducer from 'reducers/chatReducer'
import messageReducer from 'reducers/messageReducer'
import userReducer from 'reducers/userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const history = createBrowserHistory()

const reducers = history => combineReducers({
    chat: chatReducer,
    message: messageReducer,
    form: formReducer,
    user: userReducer,
    router: connectRouter(history),
})

export const store = createStore(reducers(history), composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)))