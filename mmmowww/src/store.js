import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {initReducer} from 'reducers';
import {loggerMiddleware} from 'middlewares/logger';
import {bot} from 'midlewares/bot';

//export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, logger));

// export const history = createBrowserHistory();
// export const store = createStore(initReducer(history), applyMiddleware(loggerMiddleware, logger, routerMiddleware(history)));


export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
};

function initStore(){
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), logger,bot), //TODO Подключить Middleware
            window.__REDUX_DEVTOOLS_EXTENSION__ ?  window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
            ),
        );
        

        const persistor = persistStore(store);
        return {store, persistor};
}

export default initStore;