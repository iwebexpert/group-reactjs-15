import React from 'react';

import { Button } from '@material-ui/core';
// TODO Сделать верстку
export class Chats extends React.Component {
  
    constructor(props){
        super(props);

            this.state = {
               chats: [
                           {
                               chatName:'',
                               author: '',
                               text: '',
                           }
                     ],
                         };
    }
    handleMessageSend = () => {
        

    };

    handleInputChange = () => {
       

    };
    render(){
        return (
        	
            <div>
            <h2>ChatName {ChatName}</h2>
            <div>
                <ul>
                    {chats.map((chats, index) => <li key={index}><b>{state.chats.chatName}:</b> {state.chats.aucthor} <b>{state.chats.text}:</b></li>)}
                </ul>
                 <Button color="primary">Выбрать чат state.chats.chatName</Button>;

            </div>
            </div>
        );
    }
}