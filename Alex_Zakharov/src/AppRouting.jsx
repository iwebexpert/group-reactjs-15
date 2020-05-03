import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from './routes';

export class AppRouting extends React.Component {
    render() {
        return <BrowserRouter>
            <Switch>
                {
                    routes.map((route, index) =>
                        <Route key={index} {...route} />)
                }
            </Switch>
        </BrowserRouter>;
    }
}
