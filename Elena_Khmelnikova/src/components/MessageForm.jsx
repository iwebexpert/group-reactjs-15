import React from 'react';

export class MessageForm extends React.Component {
    state = {
        text: '',
        author: '',
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        });
    };

    handleMessageSend = () => {
        const { onSend } = this.props;
        if (typeof(onSend) === 'function') {
            onSend(this.state);
        }

        this.setState({ text: '' });
    };

    render() {
        const { author, text } = this.state;

        return (
            <fieldset>
                <div>
                    <input name='author' value={author} onChange={this.handleInputChange} placeholder={'Ваше имя'}/>
                </div>
                <div>
                    <textarea name='text' value={text} onChange={this.handleInputChange} placeholder={'Сообщение..'} rows={'3'}/>
                </div>
                <button onClick={this.handleMessageSend}>Отправить</button>
            </fieldset>
        );
    }
}
