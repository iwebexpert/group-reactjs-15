import React from 'react';

import { Message } from 'components/Message';
import './MessageList.scss';

export class MessageList extends React.Component {
    render() {
        const { messages } = this.props;
        console.log("Message list messages:");
        console.log(messages);
        return <div className="messages-list">
            {
                messages.map((message, index) =>
                    <Message key={index} message={message} />
                )
            }
        </div>
    }
}