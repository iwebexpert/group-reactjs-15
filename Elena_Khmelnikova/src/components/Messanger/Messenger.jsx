import React from 'react';

import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';

import './Messenger.less';

export class Messenger extends React.Component {

    render() {
        const { messages, onSend } = this.props;

        return (
            <div className={'messenger'}>
                {messages && <MessageList messages={messages}/>}
                {!messages && <p>'Выберете чат'</p>}
                <MessageForm onSend={onSend}/>
            </div>
        );
    }
}
