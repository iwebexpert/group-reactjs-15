import React from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messanger';
import { messagesLoadApi, messageSend, messageDelete } from 'actions/messages';

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

    handleDeleteMessage = (messageId) => {
        const { chatId, deleteMessage } = this.props;

        deleteMessage({
            messageId,
            chatId,
        })
    };

    render() {
        const { messages, chats, chatId, isLoading, isError } = this.props;

        let chatMessages = null;
        if (chatId && messages[chatId]) {
            chatMessages = messages[chatId];
        }

        let newChat = false;
        if (chatId && chats[chatId]) {
            newChat = true;
        }

        return (
            <Messenger
                messages={chatMessages} newChat={newChat}
                isLoading={isLoading} isError={isError}
                onSend={this.handleSendMessage}
                onDelete={this.handleDeleteMessage}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const messages = state.messages.entries;
    const isLoading = state.messages.loading;
    const isError = state.messages.error;
    const chats = state.chats.entries;
    const { chatId } = ownProps;

    return {
        messages,
        isLoading,
        isError,
        chats,
        chatId: chatId ? chatId : null,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadMessages: () => dispatch(messagesLoadApi()),
        sendMessage: (message) => dispatch(messageSend(message)),
        deleteMessage: (data) => dispatch(messageDelete(data)),
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
