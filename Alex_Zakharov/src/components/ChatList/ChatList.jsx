import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/Inbox';

export class ChatList extends React.Component {
    render() {
        const { chats } = this.props;
        return <div className="chat-list">
            <List component="nav">
                {
                    chats.map((chat, index) =>
                        <ListItem key={index} button component="a">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <Link to={chat.link}>
                                <ListItemText primary={chat.name} />
                            </Link>
                        </ListItem>
                    )
                }
            </List>
        </div>
    }
}
