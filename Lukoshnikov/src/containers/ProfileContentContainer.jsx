import React from 'react';
import {connect} from 'react-redux';
import {ProfileContent} from 'components/ProfileContent';
import {profileLoad} from 'actions/profile';

const mapStateToProps = (state) => {
	return {
		profile: state.profile
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		loadProfile: () => dispatch(profileLoad())
	}
}
export const ProfileContentContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContent);