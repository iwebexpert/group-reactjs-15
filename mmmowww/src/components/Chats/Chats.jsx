import React from 'react';

import  Button  from '@material-ui/core';
import  Box  from '@material-ui/core';
import '.Chats.css';
// TODO Сделать верстку
export class Chats extends React.Component {
  
    constructor(props){
        super(props);

            this.state = {
               chats: [    /// Тестовая заглушка \|/
                           {
                               chatName:'Работа',
                               author: 'Начальник',
                               text: 'Когда тебя ждать?',
                           },
                           {
                               chatName:'Семья',
                               author: 'Родитель',
                               text: 'Перезвони я волнуюсь',
                           },
                           {
                               chatName:'Жена',
                               author: 'Вы',
                               text: 'Я к обеду!',
                           },
                           {
                               chatName:'Муж',
                               author: 'Вы',
                               text: 'Я к ужину!',
                           },
                           {
                               chatName:'Дети',
                               author: 'Сын',
                               text: 'Завтра на рыбалку',
                           },

                     ],
                         };
    }
    handleMessageSend = () => {
        

    };

    handleInputChange = () => {
       

    };
    render(){
        return (
        	
            <div className = "ChatsList">
            <h2>ChatName</h2>
            <Box component="div" display="inline">
            <div>
                <ul>
                    {chats.map((chats, index) => <li key={index}><b>{state.chats.chatName}:</b> {state.chats.aucthor} <b>{state.chats.text}:</b></li>)}
                </ul>
                 <Button color="primary">Выбрать чат: state.chats.chatName</Button>;

            </div>
            </Box>
            </div>
        );
    };
};