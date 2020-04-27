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
			{
				author: 'druew',
				message: 'ыофарфолымтлотйцуокшцрлукбфыладльаоцуиацуиыуаьдфльадлцфть'
			},
			{
				author: 'druew',
				message: 'ыофарфолымтлотйцуокшцрлукбфыладльаоцуиацуиыуаьдфльадлцфть'
			},
			{
				author: 'druew',
				message: 'ыофарфолымтлотйцуокшцрлукбфыладльаоцуиацуиыуаьдфльадлцфть'
			}
		],
	}
	botAnswerState = null;
	sendMessage = (post) => {
		this.pushNewMessage(post);
	}
	pushNewMessage= (post) => {
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
		if(this.botAnswerState){
			clearTimeout(this.botAnswerState);
			this.botAnswerState = null;
		}
		if(lastPostAuthor !== 'bot'){
			this.botAnswerState = setTimeout(() => {
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
		const {messages, flag} = this.state;
		return (
			<div className="chat">
				<MessageList
					messages={messages}
				/>
				<MessageForm 
					onSend={this.sendMessage} 
				/>
			</div>
		)
	}
}