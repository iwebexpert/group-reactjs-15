import React from 'react';

import {MessageForm} from './MessageForm';
import {Message} from './Message';

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
        this.setState({
            messages: this.state.messages.concat(
                {
                    author: message.author,
                    text: message.text
                })
        });
    };

    componentDidUpdate() {
        const messages = this.state.messages;
        const userName = messages[messages.length - 1].author;
        const message = {
            author: 'bot',
            text: 'Привет, ' + userName + '!'
        };
        if (userName !== 'bot') {
            setTimeout(() =>
                this.setState({messages: messages.concat(message)}), 1000);
        }
    }

    render() {
        const {messages} = this.state;
        console.log(messages);
        return (
            <div>
                <ul>
                    <Message messages={messages}/>
                </ul>
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        );
    }
}