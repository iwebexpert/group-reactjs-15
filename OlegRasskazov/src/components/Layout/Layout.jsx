import React from 'react';

import {Messenger} from "components/Messenger";
import './Layout.scss';

export class Layout extends React.Component {
	render() {
		const {match} = this.props; // отсюда будем брать id чата из URL
		const id = match.params.id;

		return (
				<div className="layout">
					<div className="layout-header">
						<h1>Messenger</h1>
					</div>
					<Messenger chatId={id}/>
					<div className="layout-footer">
						<p>Copyright © {(new Date()).getFullYear()} Oleg Rasskazov</p>
					</div>
				</div>
		);
	}
}