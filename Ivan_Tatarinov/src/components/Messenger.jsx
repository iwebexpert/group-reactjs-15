import React from 'react';

import {MessageField} from 'components/MessageField';
import {Message} from "components/Message";

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
    this.setState((prevState) => {
      return {messages: [...prevState.messages, message]}
    })
  };

  componentDidUpdate() {
    const message = {
      text: 'This is service message',
      author: 'Bot',
    };
    const lastMessage = this.state.messages.slice(-1)[0];
    console.log(lastMessage);
    if (lastMessage.author !== message.author) {
      setTimeout(() => {
        this.setState((prevState) => {
          return {messages: [...prevState.messages, message]}
        })
      }, 1000)
    }
  }

  render() {
    const {messages} = this.state;
    return (
      <div>
        <ul>
          {messages.map((message, index) => <Message message={message} key={index} />)}
        </ul>
        <MessageField onSend={this.handleMessageSend}/>
      </div>
    );
  }
}