import React from 'react';

import {Header} from "components/Header";
import {Messenger} from "components/Messenger";
import {ChatList} from "components/ChatList";

import './Layout.scss';

export class Layout extends React.Component {
    state = {
        chatList: [
            {
                chatName: 'Chat-1',
            },
            {
                chatName: 'Chat-2',
            },
            {
                chatName: 'Chat-3',
            },
        ],
    };

    render() {
    const {chatList} = this.state;
        return (
            <div className="layout">
                <div className="layout-header"><Header /></div>
                <div className="layout-main">
                    <div className="layout-main-chatList"><ChatList items={chatList}/></div>
                    <div className="layout-main-chat"><Messenger /></div>
                </div>
            </div>
        );
    };
}