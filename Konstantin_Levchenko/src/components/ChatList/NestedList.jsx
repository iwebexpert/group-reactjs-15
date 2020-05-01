import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import {Link} from "react-router-dom";

import './NestedList.css';

export default function NestedList(value) {

    const listItems = Object.entries(value.chats).map((chat) =>
        <Link key={chat['0']} to={'/chats/' + chat['0']}>
            <ListItem button>
                <ListItemIcon>
                    <SendIcon/>
                </ListItemIcon>
                <ListItemText primary={chat['1'].name}/>
            </ListItem>
        </Link>
    );

    return (
        <div className='chatList'>
            <List component="nav"
                  aria-labelledby="nested-list-subheader">
                {listItems}
            </List>
        </div>
    );
}