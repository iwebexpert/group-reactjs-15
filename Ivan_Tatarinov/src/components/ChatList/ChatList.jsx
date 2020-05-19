import React from 'react';

import List from '@material-ui/core/List';
import './ChatList.scss';
import {Link} from "react-router-dom";
import {ListItem, ListItemText, Button} from "@material-ui/core";

export class ChatList extends React.Component {

    handleAddChat = () => {
        const {addChat} = this.props;
        if (typeof (addChat) === 'function') {
            addChat({'name': 'newChat'});
        }
    }

    render() {
        const {chats, redirect} = this.props;
        return (
            <div>
                <List>
                    {chats.map((chat, index) => (
                        <ListItem key={index} data-id={chat.key} data-fire={chat.fire} onClick={redirect}>
                            <Link to={chat.link}>
                                <ListItemText primary={chat.name} className={chat.fire ? 'fire' : 'not-fire'}/>
                            </Link>
                        </ListItem>))}
                </List>
                <Button variant="contained" color="primary" onClick={this.handleAddChat}>
                    Add chat
                </Button>
            </div>
        );
    }
}