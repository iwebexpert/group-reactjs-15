import React from 'react';

import {Message} from 'components/Message';
import './MessageList.css'

export class MessageList extends React.Component {
    render(){
        const {items} = this.props;

        return (
            <div className="messages-list">
                {items.map((item, index) => <Message key={index} {...item} />)}
            </div>
        );
    }
}