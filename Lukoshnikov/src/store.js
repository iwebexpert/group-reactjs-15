import {createStore, applyMiddleware} from 'redux';
import {initReducer} from 'reducers';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

import {bot} from 'middlewares/bot';

export const history = createBrowserHistory();

export const store = createStore(initReducer(history), applyMiddleware(logger, bot, routerMiddleware(history)));