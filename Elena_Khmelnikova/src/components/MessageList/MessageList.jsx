import React from 'react';

import { Message } from '../Message';

import './MessageList.less';

export class MessageList extends React.Component {
    render() {
        const { messages } = this.props;

        return (
            <div className={'message-list'}>
                {messages.map((message, index) => <Message key={index} {...message}/>)}
            </div>
        );
    }
}
