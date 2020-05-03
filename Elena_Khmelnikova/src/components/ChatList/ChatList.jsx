import React from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import './ChatList.less';

export class ChatList extends React.Component {

    render() {
        const { chats } = this.props;

        return (
            <List disablePadding>
                {Object.keys(chats).map((chatId) => {
                    const link = `/chat/${chatId}`;
                    return (
                        <div key={chatId}>
                            <Link to={link}>
                                <ListItem button>
                                    <ListItemIcon><Send/></ListItemIcon>
                                    <ListItemText primary={chats[chatId].name}/>
                                </ListItem>
                            </Link>
                            <Divider variant='middle'/>
                        </div>
                    );
                })}
            </List>
        );
    }
}
