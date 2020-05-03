import React from 'react';
import {connect} from 'react-redux';

import {Profile} from 'pages/Profile';
import {profileLoad} from 'actions/profile.js'

class ProfileContainer extends React.Component {
	
	render(){
		return <div> fsdfgag </div>
	}
}

function mapStateToProps(state, ownProps){
	return {
		profile: {
			name: state.profile
		}
	};
}
function mapDispatchToProps(dispatch){
	return {
		loadProfile: () => dispatch(profileLoad())
	};
}
export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);