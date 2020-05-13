import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './Layout.sass';
import {Messenger} from '../Messenger';
import {ChatHeaderRedux} from 'containers/ChatHeaderContainer';
import {ChatList} from '../ChatList';

export class Layout extends React.Component{
	
	
	render(){
		const {chats, 
			id, 
			messages, 
			sendMessage, 
			addChat, 
			redirect, 
			deleteChat,
			isLoading,
			isError
		} = this.props;
		if(isLoading){
			return (<div>Loading</div>);
		}
		if(isError){
			return (<div>Error</div>);
		}
		
		const Empty = () => {
			return <div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"
						id={id}
						addChat={addChat}
						deleteChat={deleteChat}
						redirect={redirect}
						/>
					<div className="chatout__placeholder">
						<p>Выбирите чат из списка</p>
					</div>
				</div>
		} ;
		const ChatRoom = ({messages, chats, id, sendMessage, addChat}) => {
			return <div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"
						id={id}
						addChat={addChat}
						deleteChat={deleteChat}
						redirect={redirect}
						/>
					<Messenger 
						className="chatout__messenger"
						id={id}
						messages={messages}
						sendMessage={sendMessage}
						/>	
				</div>
		}
		let Chat =  <Empty />;
		if(id){
			
			Chat = <ChatRoom 
				messages={messages}
				chats={chats}
				id={id}
				sendMessage={sendMessage}
				addChat={addChat}
				/>
		}
		return (
			<div className="chatout">
				<ChatHeaderRedux/>
				{Chat}
			</div>
		)
	}
}