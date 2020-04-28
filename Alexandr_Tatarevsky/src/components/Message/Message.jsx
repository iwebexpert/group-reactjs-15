import React from 'react';
import classNames from 'classnames';

import './Message.scss';

export class Message extends React.Component {

    render(){
        const {text, author} = this.props;
        const classes = classNames('message', {
            'message-owner': author !== 'The bigBrain',
            'message-companion': author === 'The bigBrain',
        });

        return (
            <div className={classes}>
                <div>{text}</div>
                <div className="message-sender">{author}</div>
            </div>
        );
    }
}