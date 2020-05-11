import {createStore, applyMiddleware} from 'redux';
import {initReducer} from 'reducers';

import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';
import {apiMiddleware} from 'redux-api-middleware';

import {bot} from 'middlewares/bot';

// export const history = createBrowserHistory();

// export const store = createStore(initReducer(history), applyMiddleware(logger, bot, routerMiddleware(history)));

export const history = createBrowserHistory();
const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['chats', 'profile']
};
function initStore(){
	const initialStore = {};
	const store = createStore(
					persistReducer(persistConfig, initReducer(history)),
					initialStore,					
					applyMiddleware(
						apiMiddleware,
						// logger, 
						bot, 
						routerMiddleware(history)
					)
				);
	const persistor = persistStore(store);
	return {store, persistor};
}
export {initStore};