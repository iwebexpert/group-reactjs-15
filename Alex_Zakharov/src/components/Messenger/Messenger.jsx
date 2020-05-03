import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import { MessageList } from 'components/MessageList';
import { MessageForm } from 'components/MessageForm';
import { ChatList } from 'components/ChatList';
import './Messenger.scss';

export class Messenger extends React.Component {
    state = {
        chats: {
            '1': {
                id: 1,
                name: 'Chat 1',
                messages: [
                    {
                        text: 'Message text',
                        author: 'Alex',
                    }
                ],
            },
            '2': {
                id: 2,
                name: 'Chat 2',
                messages: [
                    {
                        text: 'Message text2',
                        author: 'Alex',
                    }
                ],
            }
        }
    };

    getChat() {
        const { chats } = this.state;
        const { match } = this.props;
        if (match && chats[match.params.id]) {
            return chats[match.params.id];
        }
        return chats['1'];
    }

    getChats() {
        const { chats } = this.state;
        let result = [];
        for (let id in chats) {
            result.push(chats[id]);
        }
        return result;
    }

    getChatMessages() {
        const chat = this.getChat();
        if (chat == null)
            return null;
        return chat.messages;
    }

    handleMessageSend = (message) => {
        let chat = this.getChat();
        if (chat == null)
            return;

        let messages = this.getChatMessages();
        if (messages == null)
            messages = [];

        const { match } = this.props;
        chat.messages = messages.concat(message);
        console.log(chat);
        const { chats } = this.state;
        this.setState({
            chats: {
                ...chats,
                [match.params.id]: chat,
            }
        });
    };

    replyFromBot = () => {
        clearTimeout(this.timeout);
        this.handleMessageSend({ author: 'ChatBot', text: 'Hello!' });
    };

    componentDidUpdate() {
        const messages = this.getChatMessages();
        const lastMsg = messages[messages.length - 1];
        if (lastMsg.author !== 'ChatBot') {
            this.timeout = setTimeout(this.replyFromBot, 2000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const chats = this.getChats();
        const messages = this.getChatMessages();
        console.log("Chat Messages:");
        console.log(messages);
        return <div className="messenger">
            <Link to="/profile">
                <ListItemText primary="Profile" />
            </Link>
            <Grid container spacing={2}>
                <Grid item xs>
                    <ChatList chats={chats} />
                </Grid>
                <Grid item xs={10}>
                    <MessageList messages={messages} />
                    <MessageForm onSend={this.handleMessageSend} />
                </Grid>
            </Grid>
        </div>
    }
}
