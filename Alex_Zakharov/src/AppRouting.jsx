import React from 'react';
import ReactDom from 'react-dom';

import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { routes } from './routes';
import initStore, { history } from './store';

const { store, persistor } = initStore();

export class AppRouting extends React.Component {
    render() {
        return <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ConnectedRouter history={history}>
                    <Switch>
                        {
                            routes.map((route, index) =>
                                <Route key={index} {...route} />)
                        }
                    </Switch>
                </ConnectedRouter>
            </PersistGate>
        </Provider>;
    }
}
