import React from 'react';

import { ChatList } from '../ChatList';
import { ChatForm } from '../ChatForm';
import './Chats.less';

export class Chats extends React.Component {
    state = {
        chats: {
            '1': {
                'name': 'Чат 1',
            },
            '2': {
                'name': 'Чат 2',
            },
            '3': {
                'name': 'Чат 3',
            },
        },
    };

    handleAddChat = (newChatName) => {
        const { chats } = this.state;

        const chatsIds = Object.keys(chats);

        this.setState({
            chats: {
                ...chats,
               [+chatsIds[chatsIds.length - 1] + 1]: {
                    'name': newChatName,
               }
            },
        });
    };

    render() {
        const { chats } = this.state;

        return (
            <div className={'chats'}>
                <ChatList chats={chats}/>
                <ChatForm onSend={this.handleAddChat}/>
            </div>
        );
    }
}
