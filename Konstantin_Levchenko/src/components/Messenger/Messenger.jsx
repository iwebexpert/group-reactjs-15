import React from 'react';

import {MessageForm} from '../MessageForm';
import {MessageList} from '../MessageList';
import './Messenger.css';
import {ChatForm} from "../ChatForm";

export class Messenger extends React.Component {

    // componentDidUpdate = () => {
    //     if (this.props.messages.length) {
    //         const {author} = this.props.messages[this.props.messages.length - 1];
    //         if (author !== 'Bot' && !this.timer) {
    //             this.timer = setTimeout(() => {
    //                 this.props.handleMessageSend({
    //                     text: `Hi, ${author}! I am Bot...`,
    //                     author: 'Bot'
    //                 });
    //                 this.timer = null;
    //             }, 1000)
    //         }
    //     }
    // }

    render() {
        // const {messages} = this.state;
        // const style={marginLeft: '2em', color: 'red'};
        return (
            // <div style={{marginLeft: '2em', color: 'red'}}>
            // <div style={style}>
            <div className='messenger'>
                {/* TODO - компонент формы для добавления чатов */}
                {this.props.messages ? <MessageList items={this.props.messages}/> :
                    'Пожалуйста, выберите чат или добавьте новый'}
                {this.props.messages && <MessageForm onSend={this.props.handleMessageSend}/>}
                {!this.props.messages ? <ChatForm onSend={this.props.handleChatAdd}
                                                  chatsQuantity={this.props.chatsQuantity} /> : ''}
            </div>
        );
    }
}