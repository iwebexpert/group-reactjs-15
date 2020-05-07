import React from 'react';

import {MessageField} from 'components/MessageField';
import {MessageList} from "components/MessageList";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import './Messenger.scss';

export class Messenger extends React.Component {
    render() {
        const {chats, messages, sendMessage} = this.props;

        return (
            <React.Fragment>
                <List>
                    {chats.map((chat, index) => <ListItem key={index}>
                        <Link to={chat.link}>
                            <ListItemText primary={chat.name}/>
                        </Link>
                    </ListItem>)}
                </List>
                <div className="messenger">
                    {messages ? <MessageList messages={messages}/> : 'Пожалуйста, выберите чат'}
                    {messages && <MessageField onSend={sendMessage}/>}
                </div>
            </React.Fragment>
        );
    }
}