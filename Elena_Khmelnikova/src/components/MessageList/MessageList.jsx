import React from 'react';

import { Message } from 'components/Message';

import './MessageList.less';

export class MessageList extends React.Component {
    render() {
        const { messages } = this.props;

        return (
            <div>
                {messages.map((message, index) => <Message key={index} {...message}/>)}
            </div>
        );
    }
}
