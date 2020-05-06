import React from 'react';

import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';

import './Messenger.less';

export class Messenger extends React.Component {

    render() {
        const { messages, newChat, onSend } = this.props;

        return (
            <div className={'messenger'}>
                <div className={'message-list'}>
                    {messages && <MessageList messages={messages}/>}
                    {!messages && !newChat && <p>'Выберете чат'</p>}
                </div>

                {(newChat || messages) && <MessageForm onSend={onSend}/>}
            </div>
        );
    }
}
