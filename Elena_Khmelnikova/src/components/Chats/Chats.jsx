import React from 'react';

import { ChatList } from 'components/ChatList';
import { ChatForm } from 'components/ChatForm';

import './Chats.less';

export class Chats extends React.Component {

    render() {
        const { chats, addChat } = this.props;

        return (
            <div className={'chats'}>
                <ChatList chats={chats}/>
                <ChatForm onSend={addChat}/>
            </div>
        );
    }
}
