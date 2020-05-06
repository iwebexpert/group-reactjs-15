import React from 'react';
import {connect} from 'react-redux';

import {ChatHeader} from 'components/ChatHeader';
import {profileLoad} from 'actions/profile.js'

class ChatHeaderContainer extends React.Component {
	componentDidMount(){
		const {loadProfile} = this.props;
		//console.log('chatHeader DidMount 777777777777777');
		loadProfile();
	}
	
	render(){
	//console.log('ChatHeaderContaner props', this.props);
		const {profile} = this.props;
		return <ChatHeader profile={profile}/>
	}
}

function mapStateToProps(state, ownProps){
	//console.log('ChatHeaderContainer mapStateToProps state', state);
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