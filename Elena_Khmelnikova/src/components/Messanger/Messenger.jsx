import React from 'react';

import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';

import './Messenger.less';

export class Messenger extends React.Component {

    render() {
        const { messages, newChat, onSend, onDelete, isLoading, isError } = this.props;

        return (
            <div className={'messenger'}>
                {isLoading && <p>Загрузка..</p>}
                {isError && <p>Ошибка загрузки</p>}

                <div className={'message-list'}>
                    {messages && <MessageList messages={messages} onDelete={onDelete}/>}
                    {!messages && !newChat && <p>'Выберете чат'</p>}
                </div>

                {(newChat || messages) && <MessageForm onSend={onSend}/>}
            </div>
        );
    }
}
