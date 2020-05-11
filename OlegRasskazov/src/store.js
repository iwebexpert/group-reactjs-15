import {applyMiddleware, createStore, compose} from "redux";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';
import {apiMiddleware} from "redux-api-middleware";

import {initReducer} from "reducers";
import {loggerMiddleware} from 'middlewares/logger';
import {botAnswer} from "middlewares/bot";

export const history = createBrowserHistory();

const persistConfig = {
	key: 'root',
	storage,
};

export function initStore() {
	const initialStore = {};
	console.log(history);
	const store = createStore(
			persistReducer(persistConfig, initReducer(history)),
			initialStore,
			compose(
					applyMiddleware(botAnswer, logger, routerMiddleware(history)),
					window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
					),
	);
	const persistor = persistStore(store);

	return {store, persistor};
}