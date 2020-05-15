import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Messenger} from 'components/Messenger';
import {chatsLoad, chatsLoad2, chatsSend, chatsAdd} from 'actions/chats';

class MessengerContainer extends React.Component {

    componentDidMount(){
        const {loadChats, loadChats2} = this.props;

        if(!this.props.chats.length){
            //loadChats(); //Получаем чаты после загрузки Messenger
            loadChats2();
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

   

    render(){
        const {chats, messages, isLoading, isError, redirect} = this.props;

        return (
            <Messenger redirect={redirect} isError={isError} isLoading={isLoading} handleRedirect={this.handleRedirect} addChat={this.handleAddChat} sendMessage={this.handleSendMessage} messages={messages} chats={chats} />
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
            chatsArrayForShow.push({id: key, name: chats[key].name, link: `/chats/${key}`});
        }
    }

    const lastId = Object.keys(chats).length ? Object.keys(chats).length : 0;
    const newChatId = lastId + 1;

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null,
        newChatId,
        isLoading: state.chats.loading,
        isError: state.chats.error,
    };
}

function mapDispatchToProps2(dispatch){
    return {
        loadChats: () => dispatch(chatsLoad()),
        loadChats2: () => dispatch(chatsLoad2()),
        sendMessage: (message) => dispatch(chatsSend(message)),
        addChat: (newChatId, chatName) => dispatch(chatsAdd(newChatId, chatName)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
    }
}

export const MessengerRedux = connect(mapStateToProps2, mapDispatchToProps2)(MessengerContainer);
