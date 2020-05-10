import React from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messanger';
import { messagesLoad, messageSend } from 'actions/messages';

class MessengerContainer extends React.Component {

    componentDidMount() {
        const { messages, loadMessages } = this.props;

        if (!Object.keys(messages).length) {
            loadMessages();
        }
    }

    handleSendMessage = (newMessage) => {
        const { sendMessage, chatId } = this.props;

        sendMessage({
            ...newMessage,
            chatId,
        })
    };

    render() {
        const { messages, chats, chatId } = this.props;

        let chatMessages = null;
        if (chatId && messages[chatId]) {
            chatMessages = messages[chatId];
        }

        let newChat = false;
        if (chatId && chats[chatId]) {
            newChat = true;
        }

        return (
            <Messenger messages={chatMessages} newChat={newChat} onSend={this.handleSendMessage}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const messages = state.messages.entries;
    const chats = state.chats.entries;
    const { chatId } = ownProps;

    return {
        messages,
        chats,
        chatId: chatId ? chatId : null,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadMessages: () => dispatch(messagesLoad()),
        sendMessage: (message) => dispatch(messageSend(message)),
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
