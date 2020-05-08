import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, MemoryRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ConnectedRouter} from 'connected-react-router';

import {routes} from './routes';
// import {store} from './store';
import initStore, {history} from './store';

const {store, persistor} = initStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                {/* <BrowserRouter> */}
                    <Switch>
                        {routes.map((route, index) => <Route key={index} {...route} />)}
                    </Switch>
                {/* </BrowserRouter> */}
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);