import React from 'react';

import {Header} from "components/Header";
import {Footer} from "components/Footer";
import './Profile.scss';

export class Profile extends React.Component {
	render() {
		return (
				<div className="layout">
					<Header/>
					<div>
						<h1>User profile</h1>
					</div>
					<Footer/>
				</div>
		);
	}
}