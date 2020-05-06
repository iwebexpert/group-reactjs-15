import React from 'react';
import {connect} from 'react-redux';

import {Layout} from 'components/Layout';
import {chatsLoad, chatsSend} from 'actions/chats';

class LayoutContainer extends React.Component{
	
	componentDidMount(){
		// //console.log('LayoutContainer props', this.props);
		const {loadChats} = this.props;
		loadChats();
	}
	sendMessageHandle = (messages) => {
		const {sendMessage, chatId} = this.props;
		sendMessage({
			...messages,
			chatId
		});
	}
	render(){
		const {chats, messages} = this.props;
		const {params} = this.props.match;
		//console.log('LayoutContainer messages', params);
		return (
			<Layout 
				chats={chats} 
				{...params}
				messages={messages}
				sendMessage={this.sendMessageHandle}
				/>
		);
	}
}

function mapStateToProps(state, ownProps){
	//console.log('mapStateToProps state', state);
	//console.log('mapStateToProps ownProps', ownProps);
	const chats = state.chats.entries;
	const {match} = ownProps;
	let messages = [];
	if(match && chats[match.params.id]){
		messages = chats[match.params.id].messages;
		//console.log('messages====================', messages);
	}
	const chatsArrayForShow = [];
	for(let key in chats){
		if(chats.hasOwnProperty(key)){
			chatsArrayForShow.push({name: chats[key].name,link: `/chat/${key}`});
		}
	}
	//console.log('mapStateToProps chatArrayForShow', messages);
	return {
		chats: chatsArrayForShow,
		messages,
		chatId: match ? match.params.id : null
	};
}
function mapDispatchToProps(dispatch){
	//console.log('mapDispatchToProps');
	return {
		loadChats: () => dispatch(chatsLoad()),
		sendMessage: (message) => dispatch(chatsSend(message))
	};
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);