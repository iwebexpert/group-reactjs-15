import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './Layout.sass';
import {Messenger} from '../Messenger';
import {ChatHeader} from '../ChatHeader';
import {ChatList} from '../ChatList';

export class Layout extends React.Component{
	
	state = {
		chats: [
			{
				id: '1',
				name: 'chat1',
				messages: [1, 2, 7]
			},
			{
				id: '2',
				name: 'chat2',
				messages: [3, 5]
			},
			{
				id: '3',
				name: 'chat3',
				messages: [8]
			},
			{
				id: '4',
				name: 'chat4',
				messages: [6]
			},
			{
				id: '5',
				name: 'chat5',
				messages: [4]
			}
		]
	}
	onChatSelect(index){
		// console.log(index);
	}
	addMessageIdToChat = (post) => {
		console.log('addChat',post);
		const {chatId, messageId} = post;
		this.setState((prevState, newState)=>{
			newState: prevState.chats[chatId-1].messages.push(messageId);
		});
		console.log(this.state.chats[chatId-1].messages);
	}
	render(){
		const {chats} = this.state;
		const {params} = {...this.props.match};
		// console.log('params', params);
		const Empty = () => {
			return <div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"
						{...params}/>
					<div className="chatout__placeholder"><p>Выбирите чат</p></div>
				</div>
		} ;
		const ChatRoom = ({messageIds}) => {
			return <div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"
						{...params}
						onChatSelect={this.onChatSelect}
						/>
					<Messenger 
						className="chatout__messenger"
						{...params}
						messageIds={messageIds}
						addMessageIdToChat={this.addMessageIdToChat}
						/>	
				</div>
		}
		let Chat = null;
		console.log(params);
		if(params.id){
			const chat = chats.find((el)=>{
				return el.id === params.id;
			})
			console.log('chat', chat);
			Chat = <ChatRoom messageIds={chat.messages}/>
		}else{
			Chat = <Empty />
		}
		return (
			<div className="chatout">
				<ChatHeader />
				{Chat}
			</div>
		)
	}
}