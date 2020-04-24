import React from 'react';

import {MessageForm} from './MessageForm';

export class Messenger extends React.Component {
   constructor(props){
        super(props);

    this.state = {
        messages: [
            {
                text: 'Текстовое сообщение 1',
                author: 'Igor',
            }
        ],
    };
}
    handleMessageSend = (message) => {
      
 
       this.setState((prevState) => ({
           author: this.state.author = message.author,
            text: this.state.text = message.text,
        }), () => {console.log(this.state,"<-")});


      

       
        
    };

    componentDidUpdate(setProps){
        setTimeout(() => this.setState({'author': 'Робот','text': 'Робот занят, писать безполезно'}), 3000); // Кастыль
        this.setState((prevState) => ({
            author: prevState.messages.author = "Робот",
            text: prevState.messages.text = "Робот занят, не биспокойте",
        }), () => {console.log('State updated!')});
       
        clearTimeout(()=> this.setState()); // Тут по идеи должна быть очистка стека времени


        
     console.log(this.state);


       
    }
    componentWillUnmount(){

    }
    render(){
        
        const {messages} = this.state;
        return (
            <div>
                <ul>
        {messages.map((message, index) => <li key={index}><b>{message.author}:</b> {message.text}</li>)}
                </ul>
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}