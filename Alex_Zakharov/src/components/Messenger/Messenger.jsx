import React from 'react';

import { MessageList } from 'components/MessageList';
import { MessageForm } from 'components/MessageForm';
import './Messenger.scss';

export class Messenger extends React.Component {
    state = {
        messages: [
            {
                text: 'Message text',
                author: 'Alex',
            }
        ]
    };

    handleMessageSend = (message) => {
        this.setState(state => {
            state.messages.push(message);
            return {
                messages: state.messages
            }
        });
    };

    replyFromBot = () => {
        clearTimeout(this.timeout);
        this.handleMessageSend({ author: 'ChatBot', text: 'Hello!' });
    };

    componentDidUpdate() {
        const { messages } = this.state;
        const lastMsg = messages[messages.length - 1];
        if (lastMsg.author !== 'ChatBot') {
            this.timeout = setTimeout(this.replyFromBot, 2000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { messages } = this.state;
        console.log("render");
        console.log(messages);
        return <div className="messenger">
            <MessageList messages={messages} />
            <MessageForm onSend={this.handleMessageSend} />
        </div>
    }
}
