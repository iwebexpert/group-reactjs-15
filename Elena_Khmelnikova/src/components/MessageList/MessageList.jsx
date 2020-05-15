import React from 'react';

import { Message } from 'components/Message';

import './MessageList.less';

export class MessageList extends React.Component {

    render() {
        const { messages, onDelete } = this.props;

        return (
            <div>
                {Object.keys(messages).map((messageId) => {
                    return <Message
                        key={messageId}
                        onDelete={onDelete}
                        {...messages[messageId]}
                    />
                })}
            </div>
        );
    }
}
