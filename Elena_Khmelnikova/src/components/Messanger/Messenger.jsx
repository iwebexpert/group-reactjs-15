import React from 'react';

import { MessageForm } from '../MessageForm';
import { MessageList } from '../MessageList';

import './Messenger.less';

export class Messenger extends React.Component {
    state = {
        messages: {
            '1': [
                {
                    'text': 'Первое сообщение в чате 1',
                    'author': 'Игорь',
                },
            ],
            '2': [
                {
                    'text': 'Первое сообщение в чате 2',
                    'author': 'Игорь',
                },
            ],
            '3': [
                {
                    'text': 'Первое сообщение в чате 3',
                    'author': 'Игорь',
                },
            ],
        },
    };

    componentDidUpdate() {
        const botMessage = {
            'text': 'Какой у вас вопрос?',
            'author': 'Бот',
        };

        if (this.messages && this.messages.length && this.messages[this.messages.length-1].author !== botMessage.author) {
            setTimeout(() => {
                if (this.messages[this.messages.length-1].author !== botMessage.author) {
                    this.handleMessageSend(botMessage);
                }
            }, 1000);
        }
    }

    handleMessageSend = (newMessage) => {
        const chatId = this.props.id;

        this.setState((prevState) => ({
            messages: {
                ...prevState.messages,
                [chatId]: this.messages.concat(newMessage),
            }
        }));
    };

    addNewChat = (newChatId) => {
        const { messages } = this.state;

        this.setState({
            messages: {
                ...messages,
                [newChatId]: [],
            },
        });
    };

    get messages() {
        const { messages } = this.state;
        const chatId = this.props.id;

        if (chatId) {
            if (!messages[chatId]) {
                this.addNewChat(chatId);
            }

            return messages[chatId];
        }

        return false;
    }

    render() {
        return (
            <div className={'messenger'}>
                {this.messages && <MessageList messages={this.messages}/>}
                {!this.messages && <p>'Выберете чат'</p>}
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        );
    }
}
