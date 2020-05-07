import React from 'react';

import {Header} from "../Header";
import {ChatList} from "../ChatList";
import {Messenger} from "../Messenger";
import {Footer} from "../Footer";
import './Layout.css';

export class Layout extends React.Component {

    render() {
        const {chats, messages, sendMessage, addChat, handleRedirect} = this.props;
        return (
            <div className='layout'>
                <Header match={this.props}/>
                <div className='wrap'>
                    <ChatList chats={chats} addChat={addChat} redirect={handleRedirect}/>
                    <Messenger messages={messages} sendMessage={sendMessage}/>
                </div>
                <Footer/>
            </div>
        );
    }
}