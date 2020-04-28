import React from 'react';

import { Message } from 'components/Message';
import './MessageList.scss';

export class MessageList extends React.Component {
    state = {
        messages: this.props.messages
    }

    render() {
        const { messages } = this.state;
        return <div className="messages-list">
            {
                messages.map((message, index) =>
                    <Message key={index} message={message} />
                )
            }
        </div>
    }
}