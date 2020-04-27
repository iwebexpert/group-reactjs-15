import React from 'react';

import classNames from 'classnames';
import './Message.scss'

export class Message extends React.Component {

  render() {
    const {author, text} = this.props;
    const classes = classNames('message', {
      'message-author': author !== 'Bot',
      'message-bot': author === 'Bot',
    });
    return (
      <div className={classes}>
        <div className='message-sender'>{author}:</div>
        <div>{text}</div>
      </div>
    );
  }
}