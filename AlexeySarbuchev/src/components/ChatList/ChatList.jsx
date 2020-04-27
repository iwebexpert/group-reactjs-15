import React from 'react';

import classNames from 'classnames';


import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './ChatList.scss';
import { Chat } from '../Chat/Chat';
import List from '@material-ui/core/List';


export class ChatList extends React.Component {

    state = {
        chats: [
            {
                chatname: 'Name1',
                active: true,
                unknownProps: ''
            },
            {
                chatname: 'Name2',
                active: false,
                unknownProps: ''
            },
            {
                chatname: 'Name3',
                active: false,
                unknownProps: ''
            },
        ]
    }
    render() {

        return (
            <div className="chat-list">
                <h3>chats</h3>
                <List className="chat-mat-list">
                {this.state.chats.map((item, index) => <Chat key={index} {...item} />)}
                </List>

            </div>
        );
    }
}