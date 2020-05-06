import React from "react";
import {connect} from "react-redux";

import {profileLoad} from "actions/profile";
import {Profile} from "components/Profile";

class ProfileContainer extends React.Component {
	componentDidMount() {
		const {loadProfile} = this.props;
		loadProfile(); // Получаем данные профиля после загрузки ProfileContainer
	}

	render() {
		return (
				<Profile profile={this.props.profile} />
		);
	}
}

function mapStateToProps(state) {
	return {
		profile: state.profile.data,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadProfile: () => dispatch(profileLoad()),
	}
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);