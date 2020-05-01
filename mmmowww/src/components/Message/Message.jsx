import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Message.scss';

export const messageType = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export class Message extends React.Component {
    static propTypes = messageType;

    render(){
        const {text, author} = this.props;
        const classes = classNames('message', {
            'message-owner': author !== 'Bot',
            'message-companion': author === 'Bot',
        });


        return (
            <div className={classes}>
                <div>{text}</div>
                <div className="message-sender">{author}</div>
            </div>
        );
    }
}