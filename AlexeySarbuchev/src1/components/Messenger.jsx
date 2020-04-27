import React from 'react';

import {MessageForm} from './MessageForm';

export class Messenger extends React.Component {
    state = {
        messages: [
            {
                text: 'Текстовое сообщение',
                author: 'Igor',
            }
        ],
    };

    handleMessageSend = (message) => {
        console.log(message);

        const {messages} = this.state;
        this.setState({
            messages: messages.concat(message)
        });
    };

    componentDidUpdate(){
        console.log('1');
        const {messages} = this.state;

        const botMessage = {
            text: 'День добрый',
            author: 'NPC',
        };
        if (messages[messages.length -1].author !== botMessage.author) {
            setTimeout(() => {
                this.setState({
                    messages: messages.concat(botMessage)
                })
            }, 1000);

        }
    }

    render(){
        const {messages} = this.state;
        return (
            <div>
                <ul>
        {messages.map((message, index) => <li key={index}><b>{message.author}:</b> {message.text}</li>)}
                </ul>
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}