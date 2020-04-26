import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import routes from './common/routes'
import { store } from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {routes.map((route, idx) => <Route key={idx} {...route} />)}
        </BrowserRouter>
    </Provider>
, document.getElementById('root'))