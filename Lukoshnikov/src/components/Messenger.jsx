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
		this.setState((prevState, newState) => {
			return {
				newState: prevState.messages.push({
					author: post.author,
					message: post.text
				})
			}
		});
	}
	componentDidUpdate(){
		const {messages} = this.state,
		lastPostAuthor = messages[messages.length -1].author;
		if(lastPostAuthor !== 'bot'){
			setTimeout(() => {
				this.setState((prevState, newState) => {
				return {
					newState: prevState.messages.push({
						author: 'bot',
						message: `довольно интересная мысль ${lastPostAuthor}`
					})
				}
			});
			}, 1000);
		}
	}
	render(){
		const {messages} = this.state;
		// console.log(messages);
		return (
			<div>
				<MessageList messages={messages} />
				<MessageForm onSend={this.sendMessage}/>
			</div>
		)
	}
}