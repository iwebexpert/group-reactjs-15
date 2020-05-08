import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Messenger} from 'components/Messenger';
import {chatsLoad, chatsSend, chatsAdd} from 'actions/chats';

class MessengerContainer extends React.Component {

    componentDidMount(){
        const {loadChats} = this.props;

        if(!this.props.chats.length){
            loadChats(); //Получаем чаты после загрузки Messenger
        }
    }

    handleSendMessage = (message) => {
        const {sendMessage, chatId} = this.props;

        sendMessage({
            ...message,
            chatId,
        });
    };

    handleAddChat = () => {
        const {addChat, newChatId, redirect} = this.props;
        const chatName = prompt('Введите имя чата');

        addChat(newChatId, chatName);
        redirect(newChatId);
    }

    //TODO
    handleRedirect = () => {
        //redirect(newChatId);
    };

    render(){
        const {chats, messages} = this.props;

        return (
            <Messenger handleRedirect={this.handleRedirect} addChat={this.handleAddChat} sendMessage={this.handleSendMessage} messages={messages} chats={chats} />
        );
    }
}

function mapStateToProps2(state, ownProps){
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if(match && chats[match.params.id]){
        messages = chats[match.params.id].messages;
    }

    let chatsArrayForShow = [];
    for(let key in chats){
        if(chats.hasOwnProperty(key)){
            chatsArrayForShow.push({name: chats[key].name, link: `/chats/${key}`});
        }
    }

    const lastId = Object.keys(chats).length ? Object.keys(chats).length : 0;
    const newChatId = lastId + 1;

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null,
        newChatId,
    };
}

function mapDispatchToProps2(dispatch){
    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsSend(message)),
        addChat: (newChatId, chatName) => dispatch(chatsAdd(newChatId, chatName)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
    }
}

export const MessengerRedux = connect(mapStateToProps2, mapDispatchToProps2)(MessengerContainer);
