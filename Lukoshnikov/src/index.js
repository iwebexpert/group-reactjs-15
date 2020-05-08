import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import {ConnectedRouter} from 'connected-react-router';

import {routes} from './routes';
// import {store} from './store';
import {initStore, history} from './store';

const {store, persistor} = initStore();

const ul = {
		display: 'flex', 
		'listStyleType': 'none',
	};
const li = {
	margin: '0 3px'
}

ReactDom.render(
	<div>
		<Provider store={store}>
			{/*<PersistGate loading={null} persistor={persistor}>*/}
				<ConnectedRouter history={history}>
					{/*<BrowserRouter>*/}
						<ul style={ul}>
							<li style={li}><Link to="/">Home</Link></li>
							<li style={li}><Link to="/chats">Chat</Link></li>
							<li style={li}><Link to="/about">About</Link></li>
						</ul>
						<Switch>
							{
								routes.map((route, index) => {
									return (
										<Route key={index} {...route} />
									)
								})
							}
						</Switch>
						{/*</BrowserRouter>*/}
				</ConnectedRouter>
		{/*</PersistGate>*/}
		</Provider>
	</div>,
	document.getElementById('root')
);