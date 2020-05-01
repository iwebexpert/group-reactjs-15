import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {routes} from './routes';
import {Layout} from 'components/Layout';
const ul = {
		display: 'flex', 
		'list-style-type': 'none',
	};
const li = {
	margin: '0 3px'
}

ReactDom.render(
	<div>
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
	</div>,
	document.getElementById('root')
);