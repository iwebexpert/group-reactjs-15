import React from 'react';

import {ChatList} from "Components/ChatList";
import {Messenger} from "Components/Messenger";
import './Layout.scss';

export class Layout extends React.Component {
	render() {
		return (
				<div className="layout">
					<div className="layout-header">
						<h1>Messenger</h1>
					</div>
					<div className="layout-body">
						<ChatList/>
						<Messenger/>
					</div>
					<div className="layout-footer">
						<p>Copyright © {(new Date()).getFullYear()} Oleg Rasskazov</p>
					</div>
				</div>
		);
	}
}