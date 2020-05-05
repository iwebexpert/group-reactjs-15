import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';
import './Messenger.css';

export class Messenger extends React.Component {
    

    // componentDidUpdate(){
    //     //TODO: бот не должен отвечать сам себе
    //     if(this.messages.length){
    //     const {author} = this.messages[this.messages.length - 1];
    //     if(author !== 'Bot'){
    //         setTimeout(() => {
    //             this.handleMessageSend({text: `Hi, ${author}! I am Bot...`, author: 'Bot'});
    //         }, 1000)
    //     }
    //     }
    // }


    render(){
        const {chats, messages, sendMessage} = this.props;

        //const style={marginLeft: '2em', color: 'red'};

        return (
            // <div style={style}>
            <div className="messenger">
                <List>
                    {chats.map((chat, index) => <ListItem key={index}>
                        <Link to={chat.link}>
                            <ListItemText primary={chat.name} />
                        </Link>
                    </ListItem>)}
                </List>
                {messages ? <MessageList items={messages} /> : 'Пожалуйста, выберите чат'}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
        );
    }
}