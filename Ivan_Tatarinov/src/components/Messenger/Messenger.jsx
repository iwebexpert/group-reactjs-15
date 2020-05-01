import React from 'react';

import {MessageField} from 'components/MessageField';
import {MessageList} from "components/MessageList";
import './Messanger.scss';

export class Messenger extends React.Component {
    state = {
        messages: [
            {
                text: 'Сообщение 1',
                author: 'Ivan',
            }
        ],
    };

    handleMessageSend = (message) => {
        this.setState({messages: this.state.messages.concat(message)})
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const message = {
            text: 'This is a service message',
            author: 'Bot',
        };

        setTimeout(() => {
            const lastMessage = this.state.messages.slice(-1)[0];
            if (lastMessage.author !== message.author) {
                this.setState({messages: this.state.messages.concat(message)})
            }
        }, 1000)

    }

    render() {
        const {messages} = this.state;
        return (
            <div className='messanger'>
                <MessageList messages={messages}/>
                <MessageField onSend={this.handleMessageSend}/>
            </div>
        );
    }
}