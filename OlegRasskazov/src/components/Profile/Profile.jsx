import React from 'react';

import {Header} from "components/Header";
import {Footer} from "components/Footer";
import './Profile.scss';

export class Profile extends React.Component {
	render() {
		const {profile, isLoading, isError} = this.props;
		console.log(this.props);

		if (isLoading) {
			return (
					<div className="layout">
						<Header/>
						<div>Loading...</div>
						<Footer/>
					</div>
			)
		}

		if (isError) {
			return (
					<div className="layout">
						<Header/>
						<div>Ошибка: {isError}</div>
						<Footer/>
					</div>
			)
		}

		if (Object.keys(profile)[0]) {
			return (
					<div className="layout">
						<Header/>
						<div>
							<h1>User profile</h1>
							<img src={profile.picture.large} alt=""/>
							<p>Username: {profile.name.first} {profile.name.last}</p>
							<p>email: {profile.email}</p>
							<p>phone: {profile.phone}</p>
						</div>
						<Footer/>
					</div>
			)
		}

		return (
				<div className="layout">
					<Header/>
					<div>Loading...</div>
					<Footer/>
				</div>
		);
	}
}