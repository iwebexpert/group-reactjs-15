import {createStore, applyMiddleware} from 'redux';
import {initReducer} from 'reducers';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {bot} from 'middlewares/bot';

// export const history = createBrowserHistory();

// export const store = createStore(initReducer(history), applyMiddleware(logger, bot, routerMiddleware(history)));

export const history = createBrowserHistory();
const persistConfig = {
	key: 'root',
	storage
};
function initStore(){
	const initialStore = {};
	const store = createStore(
					persistReducer(persistConfig, initReducer(history)),
					initialStore,					
					applyMiddleware(logger, bot, routerMiddleware(history))
				);
	const persistor = persistStore(store);
	return {store, persistor};
}
export {initStore};