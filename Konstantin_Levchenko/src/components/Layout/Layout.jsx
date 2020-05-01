import React from 'react';

import {Header} from "../Header";
import NestedList from "../ChatList/NestedList";
import {Messenger} from "../Messenger";
import {Footer} from "../Footer";
import './Layout.css';

export class Layout extends React.Component {
    state = {
        chats: {
            '1': {
                name: 'Chat 1',
                messages: [
                    {
                        text: 'Текстовое сообщение 1',
                        author: 'Igor',
                    }
                ],
            },
            '2': {
                name: 'Chat 2',
                messages: [
                    {
                        text: 'Текстовое сообщение 2',
                        author: 'Igor',
                    }
                ],
            },
            '3': {
                name: 'Chat 3',
                messages: [
                    {
                        text: 'Текстовое сообщение 3',
                        author: 'Igor',
                    }
                ],
            },
            // TODO - с помощью setState добавлять новые чаты
        },
    };

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;
        const chat = chats[match.params.id];

        chat.messages = this.messages.concat([message]);

        this.setState({
            chats: {
                ...this.state.chats,
                [match.params.id]: chat,
            }
        });
    }

    handleChatAdd = (chat) => {
        console.log(chat.chats);
        const chats = Object.assign(this.state.chats, chat.chats)
        console.log(chats);
        this.setState({
            chats
        });
    };

    get messages() {
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;
        if (match && chats[match.params.id]) {
            messages = chats[match.params.id].messages;
        }
        return messages;
    }

    render() {
        return (
            <div className='layout'>
                <Header match={this.props}/>
                <div className='wrap'>
                    <NestedList chats={this.state.chats}/>
                    <Messenger messages={this.messages}
                               handleMessageSend={this.handleMessageSend}
                               handleChatAdd={this.handleChatAdd}
                               chatsQuantity={Object.keys(this.state.chats).length}
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}