import React from 'react';

import {Message} from 'components/Message';
import './MessageList.scss';

export class MessageList extends React.Component {

  render() {
    const {messages} = this.props;
    return (
      <div className='message-list'>
        {messages.map((message, index) => <Message author={message.author} text={message.text} key={index}/>)}
      </div>
    );
  }
}