import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './ChatList.scss';

export class ChatList extends React.Component {

    render() {
        const {items} = this.props;
        return (
            <div>
                <List component="nav" aria-label="chat list">
                    {items.map((item, index) => <ListItem button key={index}><ListItemText primary={item.chatName}/></ListItem>)}
                </List>
            </div>
        );
    };
}