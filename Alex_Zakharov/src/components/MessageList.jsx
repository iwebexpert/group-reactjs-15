import React from 'react';

import { Message } from './Message';

export class MessageList extends React.Component {
    state = {
        messages: this.props.messages
    }

    render() {
        const { messages } = this.state;
        return <ul>
            {
                messages.map((message, index) =>
                    <Message index={index} message={message} />
                )
            }
        </ul>
    }
}