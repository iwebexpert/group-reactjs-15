import React from 'react';

import {MessageForm} from "./MessageForm";

export class Messenger extends React.Component{
    state = {
        messages: [
            {
                text: 'Text1',
                author: 'Author1',
            }
        ],
    };

    prevState = this.state;

    handleMessageSend = (message) =>{
        this.setState({
            messages:[...this.state.messages, message]
        });
    };

    componentDidUpdate(){
        setTimeout(()=>this.botAnswer(), 1000)
    };

    botAnswer(){
        if (this.state == this.prevState) {
            return
        }
        this.prevState = this.state;
        const botAnswer = {
            author: 'The bigBrain',
            text: 'Need to think',
        }
        //this.setState({messages:[...this.state.messages, botAnswer]})
        this.handleMessageSend(botAnswer);
        this.prevState = this.state;
    };

    render() {
      const {messages} = this.state;
        return (
            <div>
                <ul>
                    {messages.map((message, index) => <li key={index}><b>{message.author}:</b>{message.text}</li>)}
                </ul>
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}