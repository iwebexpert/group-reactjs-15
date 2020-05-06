import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from 'reducers';
import logger from 'redux-logger';

import {bot} from 'middlewares/bot';

export const store = createStore(rootReducer, applyMiddleware(bot));