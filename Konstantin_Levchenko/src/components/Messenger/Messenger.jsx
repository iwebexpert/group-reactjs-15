import React from 'react';

import {MessageForm} from '../MessageForm';
import {MessageList} from '../MessageList';
import './Messenger.css';

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
        const {messages, sendMessage, deleteMessage, chatId} = this.props;
        return (
            // <div style={{marginLeft: '2em', color: 'red'}}>
            // <div style={style}>
            <div className='messenger'>
                {messages ? <MessageList items={messages} chatId={chatId} deleteMessage={deleteMessage}/> :
                    'Пожалуйста, выберите чат или добавьте новый'}
                {messages && <MessageForm onSend={sendMessage}/>}
            </div>
        );
    }
}