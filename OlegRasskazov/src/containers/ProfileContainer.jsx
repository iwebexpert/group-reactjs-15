import React from "react";
import {connect} from "react-redux";

import {profileLoad2} from "actions/profile";
import {Profile} from "components/Profile";

class ProfileContainer extends React.Component {
	componentDidMount() {
		const {loadProfile} = this.props;
		loadProfile(); // Получаем данные профиля после загрузки ProfileContainer
	}

	render() {
		const {profile, isLoading, isError} = this.props;
		return (
				<Profile profile={profile} isLoading={isLoading} isError={isError}/>
		);
	}
}

function mapStateToProps(state) {
	return {
		profile: state.profile.data,
		isLoading: state.profile.loading,
		isError: state.profile.error,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadProfile: () => dispatch(profileLoad2()),
	}
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);