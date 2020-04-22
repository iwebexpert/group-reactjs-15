import React from 'react';

export class MessageForm extends React.Component{
	
	state = {
		author: '',
		text: ''
	}
	sendMessage = (e) => {
		e.preventDefault();
		const {onSend} = this.props;
		
		if(typeof(onSend) === 'function'){
			onSend(this.state);
		}
		this.setState({text: ''});
	}
	onInputChange = (e) => {
		const fieldName = e.target.name;
		this.setState({
			[fieldName]: e.target.value
		});
	}
	render(){
		const {author, text} = this.state;
		return (
			<form>
				<input 
					name="author"
					type="text"
					value={author}
					onChange={this.onInputChange}
					placeholder="Введите ваше имя"/>
				<textarea 
					name="text"
					value={text}
					onChange={this.onInputChange}
					placeholder="Ваше сообщение"/>
				<br/>
				<input type="submit" onClick={this.sendMessage}/>
			</form>
		)
	}
}