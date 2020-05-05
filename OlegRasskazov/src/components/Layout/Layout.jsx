import React from 'react';

import {MessengerRedux} from "containers/MessengerContainer";
import {Header} from "components/Header";
import {Footer} from "../Footer";
import './Layout.scss';

export class Layout extends React.Component {
	render() {
		const {match} = this.props; // отсюда будем брать id чата из URL
		const id = +match.params.id;

		return (
				<div className="layout">
					<Header/>
					<MessengerRedux chatId={id}/>
					<Footer/>
				</div>
		);
	}
}