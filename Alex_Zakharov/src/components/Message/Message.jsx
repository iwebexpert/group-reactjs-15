import React from 'react';
import classNames from 'classnames';

import './Message.scss'

export class Message extends React.Component {
    render() {
        const { message } = this.props;
        const isBot = message.author === 'ChatBot';
        const classes = classNames('message', {
            'message-user': !isBot,
            'message-bot': isBot,
        });

        return <div className={classes}>
            <div>{message.text}</div>
            <div className="message-author">{message.author}</div>
        </div>
    }
}