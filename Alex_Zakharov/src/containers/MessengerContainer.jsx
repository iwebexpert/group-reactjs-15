import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Messenger } from 'components/Messenger';
import { chatsLoad, chatsSend, chatsAdd, chatsLoad2 } from 'actions/chats';

class MessengerContainer extends React.Component {

    componentDidMount() {
        const { loadChats2 } = this.props;
        if (!this.props.chats.length) {
            //loadChats();
            loadChats2();
        }
    }

    handleSendMessage = (message) => {
        const { sendMessage, id } = this.props;
        sendMessage({
            ...message,
            id,
        });
    };

    handleRedirect = (event) => {
        const { id } = event.currentTarget.dataset;
        const { redirect } = this.props;
        redirect(id);
    };

    handleAddChat = () => {
        const { addChat, redirect } = this.props;
        const id = this.props.chats.length + 1 + '';
        addChat(id);
        redirect(id);
    };

    render() {
        const { chats, messages, isLoading, isError } = this.props;
        return (
            <Messenger
                isLoading={isLoading}
                isError={isError}
                sendMessage={this.handleSendMessage}
                redirect={this.handleRedirect}
                addChat={this.handleAddChat}
                messages={messages}
                chats={chats} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;
    const { match } = ownProps;

    let id = match ? match.params.id : '1';
    if (!id)
        id = '1';

    let messages = null;
    if (match && chats[id]) {
        messages = chats[id].messages;
    }

    if (!messages)
        messages = [];

    let chatsArr = [];
    for (let key in chats) {
        if (chats.hasOwnProperty(key)) {
            const chat = chats[key];
            chatsArr.push({
                id: key,
                name: chat.name,
                link: `/chats/${key}`
            });
        }
    }

    return {
        chats: chatsArr,
        messages,
        id,
        isLoading: state.chats.loading,
        isError: state.chats.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(chatsLoad()),
        loadChats2: () => dispatch(chatsLoad2()),
        sendMessage: (message) => dispatch(chatsSend(message)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
        addChat: (id) => dispatch(chatsAdd(id)),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);