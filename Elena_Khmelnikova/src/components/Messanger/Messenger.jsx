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
                    messages: messages.concat(botMessage),
                    disabled: false,
                })
            }, 1000);
        }
    }

    handleMessageSend = (message) => {
        const { messages } = this.state;

        this.setState({
            messages: messages.concat(message),
            disabled: true,
        })
    };

    render() {
        const { messages, disabled } = this.state;

        return (
            <div className={'messenger'}>
                <MessageList messages={messages}/>
                <MessageForm disabled={disabled} onSend={this.handleMessageSend}/>
            </div>
        );
    }
}
