import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import logger from 'redux-logger';
import {apiMiddleware} from 'redux-api-middleware';
import thunk from 'redux-thunk';

import {initReducer} from 'reducers';
import {loggerMiddleware} from 'middlewares/logger';

//export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, logger));

// export const history = createBrowserHistory();
// export const store = createStore(initReducer(history), applyMiddleware(loggerMiddleware, logger, routerMiddleware(history)));


export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['chats'],
};

function initStore(){
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        composeWithDevTools(
            applyMiddleware(routerMiddleware(history), logger, apiMiddleware, thunk), //TODO Подключить Middleware
            //window.__REDUX_DEVTOOLS_EXTENSION__ ?  window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
            ),
        );
        

        const persistor = persistStore(store);
        return {store, persistor};
}

export default initStore;