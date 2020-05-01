import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';
import './Messenger.css';

export class Messenger extends React.Component {
    state = {
        chats: {
            '1': {
                name: 'Chat 1',
                messages: [
                    {
                        text: 'Текстовое сообщение 1',
                        author: 'Igor',
                    }
                ],
            },
            '2': {
                name: 'Chat 2',
                messages: [
                    {
                        text: 'Текстовое сообщение 2',
                        author: 'Igor',
                    }
                ],
            },
            '3': {
                name: 'Chat 3',
                messages: [
                    {
                        text: 'Текстовое сообщение 3',
                        author: 'Igor',
                    }
                ],
            },

            //TODO - с помощью setState добавлять новые чаты
        },

       this.Addchats  = this.Addchats.bing(this);
    };
    Addchats(event){ // Знаю должен быть более логичный подход но всё же
      
        this.setState({
             state.chats = this.state.chats.length,
             state.chats.name = event.target.value
           

                     

        });
    };

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;

        const chat = chats[match.params.id];
        chat.messages = this.messages.concat([message]);

        this.setState({chats: {
            ...this.state.chats,
            [match.params.id]: chat,
        }});
    };

    componentDidUpdate(){
        //TODO: бот не должен отвечать сам себе
        if(this.messages.length){
        const {author} = this.messages[this.messages.length - 1];
        if(author !== 'Bot'){
            setTimeout(() => {
                this.handleMessageSend({text: `Hi, ${author}! I am Bot...`, author: 'Bot'});
            }, 1000)
        }
        }
    }

    get messages(){
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;
        if(match && chats[match.params.id]){
            messages = chats[match.params.id].messages;
        }
        return messages;
    }

    render(){
        const {messages} = this.state;

        //const style={marginLeft: '2em', color: 'red'};

        return (
            // <div style={style}>
            <div className="messenger">
                <List>
                    <ListItem>
                        <Link to="/chats/1">
                            <ListItemText primary="Chat 1" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/chats/2">
                            <ListItemText primary="Chat 2" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/chats/3">
                            <ListItemText primary="Chat 3" />
                        </Link>
                    </ListItem>
                </List>
                {/* TODO - компонент формы для добавления чатов */}
                {this.messages ? <MessageList items={this.messages} /> : 'Пожалуйста, выберите чат'}
                {this.messages && <MessageForm onSend={this.handleMessageSend} />}
                <div className = "AddChat">
                    <form>
                    <input type="text" value={this.state.chatName} onChange={this.Addchats} />

                    <button onClick = {this.Addchats}>Add chats</button>
                   </form>
                </div>
            </div>
        );
    }
}