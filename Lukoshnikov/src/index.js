import React from 'react';
import ReactDom from 'react-dom';

const messageQueue= ['fjdhfjk', 'nsmnekcj', 'ncianeja'];

const MessageList = ({messages}) => {
	return messages.map((content, index) => {
		return <Message message={content} key={index}/>
	});
}

const Message = ({message}) => {
		return <div>
			Message: {message}
		</div>
}

const Button = () => {
	const sendMessageHandler = (event) => {
		event.preventDefault();
		console.log('button clicked');
		messageQueue.push('new message');
		ReactDom.render(
			<div>
				<MessageList messages= {messageQueue}/>
				<Button />
			</div>,
			document.getElementById('root')
		);
	}
	return (
		<div>
			<button onClick={sendMessageHandler}>
				Send
			</button>
		</div>
	)
}

ReactDom.render(
	<div>
		<MessageList messages= {messageQueue}/>
		<Button />
	</div>,
	document.getElementById('root')
);