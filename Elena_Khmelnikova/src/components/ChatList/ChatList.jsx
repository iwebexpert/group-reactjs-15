import React from 'react';

import { List, ListItem, ListItemIcon, ListItemText, Divider, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import { Send, Delete } from '@material-ui/icons';
import './ChatList.less';
import classNames from 'classnames';

export class ChatList extends React.Component {

    handleClickChat = (event) => {
        const { clickChat } = this.props;

        const chatId = event.currentTarget.dataset.id;
        if (chatId) {
            clickChat(chatId);
        }
    };

    handleClickDeleteChat = (event) => {
        const { deleteChat } = this.props;

        const chatId = event.currentTarget.dataset.delete;
        if (chatId) {
            deleteChat(chatId);
        }
    };

    render() {
        const { chats } = this.props;

        return (
            <List disablePadding>
                {Object.keys(chats).map((chatId) => {
                    const classes = classNames({
                        'chat-highlighting': chats[chatId].newMessage,
                    });

                    return (
                        <div key={chatId} className={classes}>
                            <ListItem button data-id={chatId} onClick={this.handleClickChat}>
                                <ListItemIcon><Send/></ListItemIcon>
                                <ListItemText primary={chats[chatId].name}/>
                                <ListItemSecondaryAction data-delete={chatId} onClick={this.handleClickDeleteChat}>
                                    <IconButton edge="end" aria-label="delete"><Delete/></IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant='middle'/>
                        </div>
                    );
                })}
            </List>
        );
    }
}
