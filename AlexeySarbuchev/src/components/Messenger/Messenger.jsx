import React from 'react';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';
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

    // handleMessageSend = (message) => {
    //     this.setState(({messages}) => ({messages: messages.concat([message])}));
    // };

    // componentDidUpdate(){
    //     const {author} = this.state.messages[this.state.messages.length - 1];
    //     if(author !== 'Bot'){
    //         setTimeout(() => {
    //             this.setState({
    //                 messages: this.state.messages.concat([{text: `Hi, ${author}! I am Bot...`, author: 'Bot'}])
    //             });
    //         }, 1000)
    //     }
    //     }
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
            // <div className="header"> 
            
            // </div>
                <div className="messenger">
                    <MessageList items={messages} />
                    <MessageForm onSend={this.handleMessageSend} />
                </div>
        );
    }
}