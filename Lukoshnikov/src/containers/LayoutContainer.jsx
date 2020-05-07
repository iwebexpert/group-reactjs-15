import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Layout} from 'components/Layout';
import {chatsLoad, chatsSend, chatAdd} from 'actions/chats';

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
	handleAddChat = () => {
		const {addChat, newChatId, redirect} = this.props;
		const chatName = prompt("Type chat's name");
		addChat(newChatId, chatName);
		// console.log('newChatId',newChatId);
		redirect(newChatId);
	}
	render(){
		const {chats, messages, redirect} = this.props;
		const {params} = this.props.match;
		console.log('LayoutContainer params', this.props.match);
		return (
			<Layout 
				chats={chats} 
				{...params}
				messages={messages}
				sendMessage={this.sendMessageHandle}
				addChat={this.handleAddChat}
				redirect={redirect}
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
	const lastId = Object.keys(chats).length ? Object.keys(chats).length : 0;
	// console.log('lastId',lastId);
	return {
		chats: chatsArrayForShow,
		messages,
		chatId: match ? match.params.id : null,
		newChatId: lastId + 1
	};
}
function mapDispatchToProps(dispatch){
	//console.log('mapDispatchToProps');
	return {
		loadChats: () => dispatch(chatsLoad()),
		sendMessage: (message) => dispatch(chatsSend(message)),
		addChat: (newChatId, chatName) => dispatch(chatAdd(newChatId, chatName)),
		redirect: (chatId) => dispatch(push(`/chat/${chatId}`))
	};
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);