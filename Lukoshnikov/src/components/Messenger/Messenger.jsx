import React from 'react'; 

import './messenger.sass';
import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

export class Messenger extends React.Component {
	
	state = {
		messages: [
			{
				author: 'druew',
				message: 'ыофарфолымтлотйцуокшцрлукбфыладльаоцуиацуиыуаьдфльадлцфть'
			}, 
			// {
				// author: 'mo',
				// message: 'оапрфопрлфоклуо'
			// }, 
			// {
				// author: 'don',
				// message: 'зкйфзрбцйкяж'
			// }
		],
		botAnswerState: null
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
		// console.log(this.state.botAnswerId);
		if(this.state.botAnswerState){
			clearTimeout(this.state.botAnswerState);
			this.state.botAnswerState = null;
		}
		if(lastPostAuthor !== 'bot'){
			this.state.botAnswerState = setTimeout(() => {
				this.setState((prevState, newState) => {
					return {
						newState: prevState.messages.push({
							author: 'bot',
							message: `довольно интересная мысль ${lastPostAuthor}`
						})
					}
				});
			}, 1000)
		}
	}
	render(){
		const {messages} = this.state;
		// console.log(messages);
		return (
			<div className="chat">
				<MessageList messages={messages} />
				<MessageForm onSend={this.sendMessage}/>
			</div>
		)
	}
}