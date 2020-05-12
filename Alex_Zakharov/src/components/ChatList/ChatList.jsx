import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export class ChatList extends React.Component {
    render() {
        const { chats, redirect, addChat } = this.props;
        return <div className="chat-list">
            <List component="nav">
                {
                    chats.map((chat, index) =>
                        <ListItem key={index} button component="a" data-id={chat.id} onClick={redirect}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={chat.name} />
                        </ListItem>
                    )
                }
            </List>
            <Fab variant="round" color="primary" onClick={addChat}><AddIcon /></Fab>
        </div>
    }
}
