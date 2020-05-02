import React from 'react';

import {MessageField} from 'components/MessageField';
import {MessageList} from "components/MessageList";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import './Messanger.scss';

export class Messenger extends React.Component {
    state = {
        chats: [
            {
                name: 'Chat 1',
                messages: [
                    {
                        text: 'Текстовое сообщение 1',
                        author: 'Ivan',
                    }
                ],
            },
            {
                name: 'Chat 2',
                messages: [
                    {
                        text: 'Текстовое сообщение 2',
                        author: 'Ivan',
                    }
                ],
            },
            {
                name: 'Chat 3',
                messages: [
                    {
                        text: 'Текстовое сообщение 3',
                        author: 'Ivan',
                    }
                ],
            },

            //TODO - с помощью setState добавлять новые чаты
        ],
    };

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;
        chats[match.params.id - 1].messages = this.messages.concat([message]);

        this.setState({
            chats: chats
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const botMessage = {
            text: 'This is a service message',
            author: 'Bot',
        };

        if (this.messages.length) {
            setTimeout(() => {
                const {author} = this.messages[this.messages.length - 1];
                if (author !== botMessage.author) {
                    this.handleMessageSend(botMessage);
                }
            }, 1000)
        }
    }

    get messages() {
        const {chats} = this.state;
        const {match} = this.props;
        let messages = null;
        if (match && chats[+match.params.id - 1]) {
            messages = chats[+match.params.id - 1].messages;
        }

        return messages;
    }

    render() {
        const {chats} = this.state;
        return (
            <div className='container'>
                <List>
                    {chats.map((item, index) => (
                        <ListItem key={index}>
                            <Link to={'/chats/' + (index + 1)}>
                                <ListItemText primary={item.name}/>
                            </Link>
                        </ListItem>))}

                </List>
                <div>
                    {this.messages ? <MessageList messages={this.messages}/> : 'Выберите чат!'}
                    {this.messages && <MessageField onSend={this.handleMessageSend}/>}
                </div>
            </div>
        );
    }
}