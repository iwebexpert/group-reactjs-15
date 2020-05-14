import React from 'react';
import {connect} from 'react-redux';

import {ChatHeader} from 'components/ChatHeader';
import {profileLoad} from 'actions/profile.js'

class ChatHeaderContainer extends React.Component {
	componentDidMount(){
		const {loadProfile} = this.props;
		loadProfile();
	}
	
	render(){
		const {profile} = this.props;
		return <ChatHeader profile={profile}/>
	}
}

function mapStateToProps(state, ownProps){
	return {
		profile: state.profile
	};
}
function mapDispatchToProps(dispatch){
	return {
		loadProfile: () => dispatch(profileLoad())
	};
}
export const ChatHeaderRedux = connect(mapStateToProps, mapDispatchToProps)(ChatHeaderContainer);