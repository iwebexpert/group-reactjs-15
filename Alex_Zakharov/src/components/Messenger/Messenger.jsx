import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import { MessageList } from 'components/MessageList';
import { MessageForm } from 'components/MessageForm';
import { ChatList } from 'components/ChatList';
import './Messenger.scss';

export class Messenger extends React.Component {
    render() {
        const { chats, messages, sendMessage, redirect, addChat } = this.props;
        return <div className="messenger">
            <Link to="/profile">
                <ListItemText primary="Profile" />
            </Link>
            <Grid container spacing={2}>
                <Grid item xs>
                    <ChatList chats={chats} redirect={redirect} addChat={addChat} />
                </Grid>
                <Grid item xs={10}>
                    <MessageList messages={messages} />
                    <MessageForm onSend={sendMessage} />
                </Grid>
            </Grid>
        </div>
    }
}
