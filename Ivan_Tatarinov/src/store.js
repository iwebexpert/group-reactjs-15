import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {initReducer} from 'reducers/index';
import bot from "middlewares/bot";
import fire from "middlewares/fire";

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
};

export function initStore(){
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), logger, bot, fire),
            window.__REDUX_DEVTOOLS_EXTENSION__ ?  window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),
    );


    const persistor = persistStore(store);
    return {store, persistor};
}