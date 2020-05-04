import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import { MessageList } from 'components/MessageList';
import { MessageForm } from 'components/MessageForm';
import { ChatList } from 'components/ChatList';
import './Messenger.scss';

export class Messenger extends React.Component {
    replyFromBot = () => {
        clearTimeout(this.timeout);
        const { sendMessage } = this.props;
        sendMessage({ author: 'ChatBot', text: 'Hello!' });
    };

    componentDidUpdate() {
        const { messages } = this.props;
        const lastMsg = messages[messages.length - 1];
        if (lastMsg.author !== 'ChatBot') {
            this.timeout = setTimeout(this.replyFromBot, 2000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { chats, messages, sendMessage } = this.props;
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
                    <MessageForm onSend={sendMessage} />
                </Grid>
            </Grid>
        </div>
    }
}
