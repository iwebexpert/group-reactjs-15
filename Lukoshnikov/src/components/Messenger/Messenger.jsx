import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './messenger.sass';
import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

export class Messenger extends React.Component {
	
	state = {
		chats: {
			'1': {
				name: 'Chat 1',
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
				]
			},
			'2': {
				name: 'Chat 2',
				messages: [
					{
						author: 'druew',
						message: 'm, gqr gelw'
					},
					{
						author: 'druew',
						message: 'l;mgqerl gmqet,. '
					},
					{
						author: 'druew',
						message: ' s,.d vkrgmqekl'
					},
					{
						author: 'druew',
						message: 'we,l;gmqerlrme;tl'
					}
				]
			},
			'3': {
				name: 'Chat 3',
				messages: [
					{
						author: 'druew',
						message: 'jnsdvkjnskjvnakjnsvkjansdjk'
					},
					{
						author: 'druew',
						message: 'sa,mfl;efqe;lf;qlflw;rkgqe;rlgk;el'
					},
					{
						author: 'druew',
						message: 'sdmf;lwgkjeqrjh;lkehljq	lj'
					},
					{
						author: 'druew',
						message: 'sdlmgrqelgmqeklglke'
					}
				]
			}
		},
	}
	get messages(){
		const {chats} = this.state;
		const {id} = this.props;
		
		let messages = null;
		// if(match && chats[match.params.id]){
		if(true){
			// messages = chats[match.params.id].messages;
			messages = chats[id].messages;
		}
		// console.log('property',messages);
		return messages;
	}
	botAnswerState = null;
	
	sendMessage = (post) => {
		this.pushNewMessage(post);
	}
	pushNewMessage = (post) => {
		// console.log(this.props);
		this.setState((prevState, newState) => {
			return {
				newState: prevState.chats[this.props.id].messages.push({
					author: post.author,
					message: post.text
				})
			}
		});
	}
	componentDidUpdate(){
		const {messages} = this.state.chats[this.props.id],
		lastPostAuthor = messages[messages.length -1].author;
		// console.log(this.state.botAnswerId);
		if(this.botAnswerState){
			clearTimeout(this.botAnswerState);
			this.botAnswerState = null;
		}
		if(lastPostAuthor !== 'bot'){
			this.botAnswerState = setTimeout(() => {
				this.pushNewMessage({
					author: 'bot',
					text: `довольно интересная мысль ${lastPostAuthor}`
				});
			}, 1000)
		}
	}
		
	render(){
		// const {messages} = this.messages;
		// console.log('mesenger', this.props);
		console.log('messages',this.messages);
		
		return (
			<div className="chat">
				<MessageList 
					messages={this.messages}
				/>
				<MessageForm 
					onSend={this.sendMessage}
					chatId={this.props.id}
				/>
			</div>				
		)
	}
}