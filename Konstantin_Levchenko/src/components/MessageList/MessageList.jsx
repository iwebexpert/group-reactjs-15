import React from 'react';
import PropTypes from 'prop-types';

import {Message, messageType} from '../Message';
import './MessageList.css'

export class MessageList extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape(messageType),
        ),
    };

    render() {
        const {items, deleteMessage, chatId} = this.props;
        return (
            <div className="messages-list">
                {items.map((item, index) =>
                    <Message key={index} {...item} messageId={index}
                             deleteMessage={deleteMessage} chatId={chatId}/>)}
            </div>
        );
    }
}