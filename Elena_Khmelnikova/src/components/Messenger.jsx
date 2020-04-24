import React from 'react';

import { MessageForm } from './MessageForm';

export class Messenger extends React.Component {
    state = {
        messages: [
            {
                'text': 'Первое сообщение',
                'author': 'Игорь',
            }
        ],
    };

    componentDidUpdate() {
        const { messages } = this.state;
        const botMessage = {
            'text': 'Какой у вас вопрос?',
            'author': 'Бот',
        };

        if (messages[messages.length-1].author !== botMessage.author) {
            setTimeout(() => {
                this.setState({
                    messages: messages.concat(botMessage),
                })
            }, 1000);
        }
    }

    handleMessageSend = (message) => {
        const { messages } = this.state;

        this.setState({
            messages: messages.concat(message),
        })
    };

    render() {
        const { messages } = this.state;

        return (
            <div>
                <h3>Чат</h3>
                <ul>
                    {messages.map((message, index) => {
                        return <li key={index}><b>{message.author}:</b> {message.text}</li>
                    })}
                </ul>
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        );
    }
}
