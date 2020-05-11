import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Layout} from '../components/Layout';
import {
    chatsLoad,
    chatsLoad2,
    chatsSend,
    addChat,
    fireChat,
    deleteChat,
    deleteMessage
} from '../actions/chats';

class LayoutContainer extends React.Component {

    componentDidMount() {
        const {loadChats2} = this.props;
        if (!this.props.chats.length) {
            // loadChats(); // Получаем чаты после загрузки
            loadChats2(); // Получаем чаты после загрузки
        }
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

    handleDeleteChat = (event) => {
        const {id} = event.currentTarget.dataset;
        const {deleteChat} = this.props;
        deleteChat({
            chatId: id,
        });
    };

    handleDeleteMessage = (event) => {
        const {chatId, messageId} = event.currentTarget.dataset;
        const {deleteMessage} = this.props;
        deleteMessage({
            chatId: chatId,
            messageId: messageId,
        });
    };

    render() {
        const {chats, messages, isLoading, isError, chatId} = this.props;

        return (
            <Layout handleRedirect={this.handleRedirect} sendMessage={this.handleSendMessage}
                    messages={messages} chats={chats} addChat={this.handleAddChat}
                    isError={isError} isLoading={isLoading} chatId={chatId}
                    deleteChat={this.handleDeleteChat} deleteMessage={this.handleDeleteMessage}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if (match && chats[match.params.id]) {
        messages = chats[match.params.id].messages;
    }

    let chatsArrayForShow = [];
    for (let key in chats) {
        if (chats.hasOwnProperty(key)) {
            chatsArrayForShow.push({
                name: chats[key].name,
                link: `/chats/${key}`,
                fire: chats[key].fire,
                key: key
            });
        }
    }

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null,
        isLoading: state.chats.loading,
        isError: state.chats.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(chatsLoad()),
        loadChats2: () => dispatch(chatsLoad2()),
        sendMessage: (message) => dispatch(chatsSend(message)),
        addChat: (chat) => dispatch(addChat(chat)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
        fireChat: (chat) => dispatch(fireChat(chat)),
        deleteChat: (event) => dispatch(deleteChat(event)),
        deleteMessage: (event) => dispatch(deleteMessage(event)),
    }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);