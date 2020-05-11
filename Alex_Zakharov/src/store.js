import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reduxLogger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import { loggerMiddleware } from 'middlewares/logger';
import { chatBotMiddleware } from 'middlewares/chatBot';
import { initReducer } from 'reducers';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    //blacklist: ['chats'],
};

function initStore() {
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        applyMiddleware(routerMiddleware(history),
            reduxLogger,
            loggerMiddleware,
            apiMiddleware,
            thunk,
            chatBotMiddleware),
    );

    const persistor = persistStore(store);
    return { store, persistor };
}

export default initStore;