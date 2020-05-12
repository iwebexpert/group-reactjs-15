import React from 'react';
import {connect} from 'react-redux';

import {Messenger} from 'components/Messenger';
import {chatsLoad, chatsSend, fireChat} from 'actions/chats';
import {push} from 'connected-react-router';

class MessengerContainer extends React.Component {

    componentDidMount(){
        const {loadChats} = this.props;
        loadChats();
    }

    handleSendMessage = (message) => {
        const {sendMessage, chatId} = this.props;

        sendMessage({
            ...message,
            chatId,
        });
    };

    handleAddChat = (chat) => {
        const {addChat, redirect} = this.props;
        const chatId = this.props.chats.length + 1;
        addChat({
            ...chat,
            chatId,
        });
        redirect(chatId);
    };

    handleRedirect = (event) => {
        const {id, fire} = event.currentTarget.dataset;
        const {redirect, fireChat} = this.props;
        if (fire === 'true') {
            fireChat({
                chatId: id,
                fire: false,
            });
        }
        redirect(id);
    };

    render(){
        const {chats, messages} = this.props;

        return (
            <Messenger addChat={this.handleAddChat} redirect={this.handleRedirect}
                       sendMessage={this.handleSendMessage} messages={messages} chats={chats} />
        );
    }
}

function mapStateToProps(state, ownProps){
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if(match && chats[match.params.id]){
        messages = chats[match.params.id].messages;
    }

    let chatsArrayForShow = [];
    for(let key in chats){
        if(chats.hasOwnProperty(key)){
            chatsArrayForShow.push({
                name: chats[key].name,
                link: `/chats/${key}`,
                fire: chats[key].fire,
            });
        }
    }

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null,
    };
}

function mapDispatchToProps(dispatch){
    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsSend(message)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
        fireChat: (chat) => dispatch(fireChat(chat)),
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);