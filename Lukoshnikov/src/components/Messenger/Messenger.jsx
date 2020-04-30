import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './messenger.sass';
import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

export class Messenger extends React.Component {
	
	state = {
		
		messages: [
			{
				id: 1,
				message: {
					author: 'a1',
					text: 'fnblakndflkzl'
				}
			},
			{
				id: 2,
				message: {
					author: 'a1',
					text: 'dklsfmlkdsflk'
				}
			},
			{
				id: 3,
				message: {
					author: 'a2',
					text: 'dklsglksdfl'
				}
			},
			{
				id: 4,
				message: {
					author: 'a5',
					text: 'kadfmglkmfdlk'
				}
			},
			{
				id: 5,
				message: {
					author: 'a2',
					text: 'lkmdakldfamglaksdfml'
				}
			},
			{
				id: 6,
				message: {
					author: 'a4',
					text: 'daijgoiajdfo'
				}
			},
			{
				id: 7,
				message: {
					author: 'a1',
					text: 'lskdmgklsmaglke'
				}
			},
			{
				id: 8,
				message: {
					author: 'a3',
					text: 'dfljgklsdfjgkldjl'
				}
			},
			
		]
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
		const {messages} = this.state;
		const id = messages[messages.length - 1].id + 1;
		
		// console.log({id, ...post});
		// console.log(this.state.messages[);
		this.setState((prevState, newState) => {
			return {
				newState: prevState.messages.push({id, message: {...post}})
			}
		});
		// console.log(this.state.messages);
		this.props.addMessageIdToChat({chatId: this.props.id, messageId: id});
	}
	componentDidUpdate(){
		const {messageIds }= this.props;
		const id = messageIds[messageIds.length -1];
		const message = this.state.messages.filter((el)=>{
			return el.id === id;
		});
		const author = message[0].message.author;
		// console.log('bot',this.props);
		// console.log('author', message[0].message.author);
		if(this.botAnswerState){
			clearTimeout(this.botAnswerState);
			this.botAnswerState = null;
		}
		if(author !== 'bot'){
			this.botAnswerState = setTimeout(() => {
				this.pushNewMessage({
					author: 'bot',
					text: `довольно интересная мысль ${author}`
				});
			}, 1000)
		}
		// this.pushNewMessage({
					// author: 'bot',
					// text: `довольно интересная мысль ${author}`
				// });
		// console.log(this.state.messages);
	}
		
	render(){
		const {messageIds} = this.props;
		const {messages} = this.state;
		// console.log('mesenger', this.props);
		const chatMessages = messages.filter((message)=>{
			return messageIds.includes(message.id);
		});
		const posts = chatMessages.map((post)=>{
			return post.message;
		});
		// console.log('ccccc', chatMessages.map((post)=>{
			// return post.message;
		// }));
		return (
			<div className="chat">
				<MessageList 
					messages={posts}
				/>
				<MessageForm 
					onSend={this.sendMessage}
					chatId={this.props.id}
				/>
			</div>				
		)
	}
}