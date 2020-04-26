import React from 'react';

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
		return (
			<div className="chatout">
				<ChatHeader />
				<div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"/>
					<Messenger 
						className="chatout__messenger"/>
				</div>
			</div>
		)
	}
}