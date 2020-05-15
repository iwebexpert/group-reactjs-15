import React from 'react';
import classNames from 'classnames';

import './Message.less';

export class Message extends React.Component {

    handleClickDeleteMessage = (event) => {
        event.preventDefault();

        const { onDelete } = this.props;

        const messageId = event.currentTarget.dataset.id;
        if (typeof onDelete === 'function' && messageId) {
            onDelete(messageId);
        }
    };

    render() {
        const { id, author, text } = this.props;

        const classes = classNames('message', {
            'message-bot': author === 'Бот',
            'message-owner': author !== 'Бот',
        });

        return (
            <p className={classes}>
                <b>{author}: </b>{text}

                {author !== 'Бот'
                && <a href={''} data-id={id} onClick={this.handleClickDeleteMessage}>X</a>}
            </p>
        );
    }
}
