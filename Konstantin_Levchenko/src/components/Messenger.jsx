import React from 'react';

import {MessageForm} from './MessageForm';

export class Messenger extends React.Component {
    state = {
        messages: [
            {
                text: 'Текстовое сообщение 1',
                author: 'Igor',
            }
        ],
    };

    handleMessageSend = (message) => {
        console.log(message);
        //TODO: Записать в state
    };

    componentDidUpdate() {
        //TODO - через 1 секунду добавить сообщение от бота в массив
        // setTimeout()
    }

    render() {
        const {messages} = this.state;
        return (
            <div>
                <ul>
                    {messages.map((message, index) =>
                        <li key={index}><b>{message.author}:</b> {message.text}</li>)}
                </ul>
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        );
    }
}