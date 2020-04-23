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
                [{
                    author: message.author,
                    text: message.text
                }])
        });
    };

    botSendMessage = () => {
        const messages = this.state.messages;
        const userName = messages[messages.length - 1].author;
        const message = [{
            author: 'bot',
            text: 'Привет, ' + userName + '!'
        }];
        this.setState({messages: messages.concat(message)});
        clearTimeout(this.timer);
    };

    componentDidUpdate() {
        this.timer = setTimeout(this.botSendMessage, 1000);
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