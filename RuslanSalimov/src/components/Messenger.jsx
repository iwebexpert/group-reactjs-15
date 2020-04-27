import React from 'react';

import {MessageForm} from './MessageForm';

export class Messenger extends React.Component {
    state = {
        messages: [
            {
                text: 'Текстовое сообщение 1',
                author: 'Igor555',
            }
        ],
        isUserMessage: false
    };

    handleMessageSend = (message) => {
        this.addMessage(message, true);
    };
    /**
     * add message in state.messages
     * @param message   message for adding
     * @param isUserMessage     is User or bot message?
     */
    addMessage = (message, isUserMessage) => {
        let messages = this.state.messages.slice();
        messages.push(message);
        this.setState({
            messages: messages,
            isUserMessage: isUserMessage,
        });
    }

    /**
     * Bot answer for last User
     * @param answer
     */
    botAnswer = (answer) => {
        let botMessage = {
            text: answer,
            author: "Bot"
        };
        this.addMessage(botMessage,false);
    }

    componentDidUpdate(){
        if(this.state.isUserMessage){
            let lastElem = this.state.messages.length -1;
            let username = this.state.messages[lastElem].author;    //тут конечно лучше очередь, чтобы отвечал каждому
            setTimeout(this.botAnswer("Helo," + username + " I'm bot"), 1000);
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