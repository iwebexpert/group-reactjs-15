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
		console.log(this.state.messages);
		// this.setState((prev) => {
			// messages: prev.messages.push({
				// author: post.author,
				// message: post.text
			// })
		// });
		this.setState((prevState, newState) => {
			newState: prevState.messages.push({
				author: post.author,
				message: post.text
			})
		});
	}
	componentDidUpdate(){
		console.log("update");
	}
	render(){
		const {messages} = this.state;
		// console.log(messages);
		return (
			<div>
				<MessageList messages={this.state.messages} />
				<MessageForm onSend={this.sendMessage}/>
			</div>
		)
	}
}