import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Provider} from 'react-redux'

import {routes} from './routes';
import {store} from './store';

const ul = {
		display: 'flex', 
		'list-style-type': 'none',
	};
const li = {
	margin: '0 3px'
}

ReactDom.render(
	<div>
		<Provider store={store}>
			<BrowserRouter>
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
			</BrowserRouter>
		</Provider>
	</div>,
	document.getElementById('root')
);