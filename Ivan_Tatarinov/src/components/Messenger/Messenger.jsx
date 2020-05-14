import React from 'react';

import {MessageField} from 'components/MessageField';
import {MessageList} from "components/MessageList";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import './Messenger.scss';
import {ChatList} from "components/ChatList";

export class Messenger extends React.Component {
    render() {
        const {chats, messages, sendMessage, redirect} = this.props;

        return (
            <React.Fragment>
                <ChatList chats={chats} redirect={redirect}/>
                <div className="messenger">
                    {messages ? <MessageList messages={messages}/> : 'Пожалуйста, выберите чат'}
                    {messages && <MessageField onSend={sendMessage}/>}
                </div>
            </React.Fragment>
        );
    }
}