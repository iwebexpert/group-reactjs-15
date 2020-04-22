import React from 'react'; 

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';

export class Messenger extends React.Component {
	
	state = {
		messages: [
			{
				author: 'druew',
				message: 'dfsgdf'
			}, 
			{
				author: 'mo',
				message: 'trhwr'
			}, 
			{
				author: 'don',
				message: 'rgerwhtr'
			}
		]
	}
	sendMessage = (post) => {
		
		console.log(post);
		this.setState((prev) => {
			messages: prev.messages.push({
				author: post.author,
				message: post.text
			})
		});
	}
	render(){
		const 	{messages} = this.state;
		// console.log(messages);
		return (
			<div>
				<MessageList messages={messages} />
				<MessageForm onSend={this.sendMessage}/>
			</div>
		)
	}
}