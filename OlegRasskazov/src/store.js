import {applyMiddleware, createStore, compose} from "redux";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';
import {apiMiddleware} from "redux-api-middleware";
import thunk from "redux-thunk";

import {initReducer} from "reducers";
import {loggerMiddleware} from 'middlewares/logger';
import {botAnswer} from "middlewares/bot";
import {fireChat} from "middlewares/fire";

export const history = createBrowserHistory();

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['profile'],
};

export function initStore() {
	const initialStore = {};
	const store = createStore(
			persistReducer(persistConfig, initReducer(history)),
			initialStore,
			compose(
					applyMiddleware(apiMiddleware, logger, botAnswer, fireChat, routerMiddleware(history), thunk),
					window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
					),
	);
	const persistor = persistStore(store);

	return {store, persistor};
}