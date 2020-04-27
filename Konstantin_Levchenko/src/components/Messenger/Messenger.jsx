import React from 'react';

import {MessageForm} from '../MessageForm';
import {MessageList} from '../MessageList';
import './Messenger.css';

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
        this.setState(({messages}) => ({messages: messages.concat([message])}));
    };

    componentDidUpdate = () => {
        const {author} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'Bot' && !this.timer) {
            this.timer = setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{
                        text: `Hi, ${author}! I am Bot...`,
                        author: 'Bot'
                    }])
                });
                this.timer = null;
            }, 1000)
        }
    }

    render() {
        const {messages} = this.state;
        // const style={marginLeft: '2em', color: 'red'};
        return (
            // <div style={{marginLeft: '2em', color: 'red'}}>
            // <div style={style}>
            <div className='messenger'>
                <MessageList items={messages}/>
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        );
    }
}