import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { routes } from './routes';
import { store } from './store';

export class AppRouting extends React.Component {
    render() {
        return <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((route, index) =>
                            <Route key={index} {...route} />)
                    }
                </Switch>
            </BrowserRouter>
        </Provider>;
    }
}
