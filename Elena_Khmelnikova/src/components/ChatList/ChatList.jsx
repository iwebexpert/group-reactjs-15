import React from 'react';

import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import './ChatList.less';

export class ChatList extends React.Component {
    state = {
        chats: [
            {
                'name': 'Чат 1',
            },
            {
                'name': 'Чат 2',
            },
            {
                'name': 'Чат 3',
            },
            {
                'name': 'Чат 4',
            },
        ]
    };

    render() {
        const { chats } = this.state;

        return (
            <List className={'chat-list'} disablePadding>
                {chats.map((chat, index) => {
                    return (
                        <div>
                            <ListItem button key={index}>
                                <ListItemIcon><Send/></ListItemIcon>
                                <ListItemText primary={chat.name}/>
                            </ListItem>
                            <Divider variant='middle'/>
                        </div>
                    );
                })}
            </List>
        );
    }
}
