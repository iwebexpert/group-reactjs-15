import React from 'react';

import { MessageForm } from '../MessageForm';
import { MessageList } from '../MessageList';

import './Messenger.less';

export class Messenger extends React.Component {
    state = {
        messages: [
            {
                'text': 'Первое сообщение',
                'author': 'Игорь',
            }
        ],
        disabled: false,
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
                    messages: messages.concat(botMessage)
                })
            }, 1000);
        }
    }

    handleMessageSend = (message) => {
        const { messages } = this.state;

        this.setState({
            messages: messages.concat(message)
        })
    };

    render() {
        const { messages } = this.state;

        return (
            <div className={'messenger'}>
                <MessageList messages={messages}/>
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        );
    }
}
