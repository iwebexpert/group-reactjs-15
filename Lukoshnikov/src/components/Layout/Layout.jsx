import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './Layout.sass';
import {Messenger} from '../Messenger';
import {ChatHeader} from '../ChatHeader';
import {ChatList} from '../ChatList';

export class Layout extends React.Component{
	
	state = {
		chats: [
			'chat1',
			'chat2',
			'chat3',
			'chat4',
			'chat5'
		]
	}
	
	render(){
		const {chats} = this.state;
		const {params} = {...this.props.match.params};
		// console.log('params', params);
		const Empty = () => {
			return <div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"
						{...this.props.match.params}/>
					<div className="chatout__placeholder"><p>Выбирите чат</p></div>
				</div>
		} ;
		const ChatRoom = () => {
			return <div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"
						{...this.props.match.params}/>
					<Messenger 
						className="chatout__messenger"
						{...this.props.match.params}/>	
				</div>
		}
		let Chat = null;
		console.log(this.props.match.params.id);
		if(this.props.match.params.id){
			
			Chat = <ChatRoom />
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