import React from 'react';

import './Header.scss';

export class Header extends React.Component {
	render() {
		return (
				<div className="header">
					<h1>Messenger</h1>
					<div className="header-menu">
						<div><a href="/">Home</a></div>
						<div><a href="/chats/1">Chats</a></div>
						<div><a href="/profile">Profile</a></div>
					</div>
				</div>
		);
	}
}