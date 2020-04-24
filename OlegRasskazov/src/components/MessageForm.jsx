import React from 'react';

export class MessageForm extends React.Component {
	state = {
		author: '',
		text: '',
	};

	/**
	 * Принимает из props функцию onSend (из Messenger) и запускает ее с передачей ей state из MessageForm и очищает текст
	 */
	handleMessageSend = () => {
		const {onSend} = this.props;

		if (typeof onSend === "function") {
			onSend(this.state);
		}

		this.setState({text: ''});
	};


	/**
	 * Функция меняет значения author и text в state автоматически при вводе в поля (изменениях в полях)
	 * @param event
	 */
	handleInputChange = (event) => {
		const fieldName = event.target.name;

		this.setState({
			[fieldName]: event.target.value, // [fieldName] динамически подставляет значение поля из fieldName
		});
	};

	render() {
		const {author, text} = this.state;

		return (
				<div>
					<div>
						<input name="author" type="text" value={author} onChange={this.handleInputChange} placeholder="Как тебя зовут?"/>
					</div>
					<div>
						<textarea name="text" id="text" cols="30" rows="10" value={text} onChange={this.handleInputChange} placeholder="Пиши сюда"/>
					</div>
					<div>
						<button onClick={this.handleMessageSend}>Send message</button>
					</div>
				</div>
		);
	}
}