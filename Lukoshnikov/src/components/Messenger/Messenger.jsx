import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './messenger.sass';
import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

export class Messenger extends React.Component {
	
	
	botAnswerState = null;
	
	render(){
		const {messages, sendMessage, id} = this.props;
		//console.log('mesenger', messages);
		
		// //console.log('ccccc', chatMessages.map((post)=>{
			// return post.message;
		// }));
		return (
			<div className="chat">
				<MessageList 
					messages={messages}
				/>
				<MessageForm 
					onSend={sendMessage}
					chatId={id}
				/>
			</div>				
		)
	}
}