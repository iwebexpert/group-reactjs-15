import React from 'react';
import {connect} from 'react-redux';

import {chatListing} from 'actions/chats';

import {ChatList} from 'components/ChatList';

class ChatListContainer extends React.Component{
	render(){
		return <h1>header</h1>
	}
}

function mapStateToProps(state, ownProps){
	return {};
}
function mapDispatchToProps(dispatch){
	return {
		chatlisting: dispatch(chatListing())
	};
}
export const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);