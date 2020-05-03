import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './Layout.sass';
import {Messenger} from '../Messenger';
import {ChatHeader} from '../ChatHeader';
import {ChatList} from '../ChatList';

export class Layout extends React.Component{
	
	
	render(){
		console.log('Layout props', this.props);
		const {chats, id, messages, sendMessage} = this.props;
		// const {params} = {...this.props.match};
		console.log('params', messages);
		const Empty = () => {
			return <div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"
						id={id}/>
					<div className="chatout__placeholder">
						<p>Выбирите чат из списка</p>
					</div>
				</div>
		} ;
		const ChatRoom = ({messages, chats, id, sendMessage}) => {
			return <div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"
						id={id}
						/>
					<Messenger 
						className="chatout__messenger"
						id={id}
						messages={messages}
						sendMessage={sendMessage}
						/>	
				</div>
		}
		let Chat = null;
		if(id){
			
			Chat = <ChatRoom 
				messages={messages}
				chats={chats}
				id={id}
				sendMessage={sendMessage}
				/>
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