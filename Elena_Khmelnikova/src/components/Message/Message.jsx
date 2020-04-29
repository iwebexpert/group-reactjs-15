import React from 'react';
import classNames from 'classnames';

import './Message.less';

export class Message extends React.Component {
    render() {
        const { author, text } = this.props;
        const classes = classNames('message', {
            'message-bot': author === 'Бот',
            'message-owner': author !== 'Бот',
        });

        return (
            <p className={classes}><b>{author}: </b>{text}</p>
        );
    }
}
