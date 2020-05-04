import React from 'react';

import {Header} from "../Header";
import NestedList from "../ChatList/NestedList";
import {Messenger} from "../Messenger";
import {Footer} from "../Footer";
import './Layout.css';

export class Layout extends React.Component {

    render() {
        const {chats, messages, sendMessage, addChat} = this.props;
        return (
            <div className='layout'>
                <Header match={this.props}/>
                <div className='wrap'>
                    <NestedList chats={chats}/>
                    <Messenger messages={messages}
                               sendMessage={sendMessage}
                               addChat={addChat}
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}