import React from 'react';

import { ChatList } from 'components/ChatList';
import { ChatForm } from 'components/ChatForm';

import './Chats.less';

export class Chats extends React.Component {

    render() {
        const { chats, addChat, clickChat, deleteChat } = this.props;

        return (
            <div className={'chats'}>
                <ChatList chats={chats} clickChat={clickChat} deleteChat={deleteChat}/>
                <ChatForm onSend={addChat}/>
            </div>
        );
    }
}
