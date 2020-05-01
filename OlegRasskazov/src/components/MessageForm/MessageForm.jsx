import React from 'react';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import './MessageForm.scss';

export class MessageForm extends React.Component {
	state = {
		author: 'Вася',
		text: '',
		timestamp: '',
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

	/**
	 * Обрабатывает отправку сообщения по CMD+Enter или ctrl+Enter
	 * @param event
	 */
	handleEnterPress = (event) => {
		if (event.key === 'Enter' && (event.metaKey || event.ctrlKey) && this.state.author) {
			this.handleMessageSend();
		}
	};

	render() {
		const {author, text} = this.state;

		return (
				<div className="message-form">
						<TextField
								name="author"
								type="text"
								className="message-form-field"
								variant="outlined"
								size="small"
								value={author}
								onChange={this.handleInputChange}
								label="Как тебя зовут?"/>
						<TextField
								name="text"
								type="text"
								className="message-form-field-textarea"
								variant="outlined"
								size="small"
								multiline
								value={text}
								onChange={this.handleInputChange}
								onKeyDown={this.handleEnterPress}
								label="Пиши сюда"/>
						<Fab
								className='button'
								variant="extended"
								color="primary"
								onClick={this.handleMessageSend}
						>Send <SendIcon/></Fab>
				</div>
		);
	}
}