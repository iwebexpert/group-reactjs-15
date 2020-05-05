import React from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messanger';
import { messagesLoad, messageSend, messageSendInNewChat } from 'actions/messages';

class MessengerContainer extends React.Component {

    componentDidMount() {
        const { loadMessages } = this.props;
        loadMessages();
    }

    handleSendMessage = (newMessage) => {
        const { sendMessage, sendMessageInNewChat, chatId, messages } = this.props;

        if (!messages.hasOwnProperty(chatId)) {
            return sendMessageInNewChat({
                data: {[chatId]: [newMessage]}
            });
        }

        sendMessage({
            ...newMessage,
            chatId,
        })
    };

    render() {
        const { messages, chatId } = this.props;

        let chatMessages = null;
        if (chatId && messages[chatId]) {
            chatMessages = messages[chatId];
        }

        return (
            <Messenger messages={chatMessages} onSend={this.handleSendMessage}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const messages = state.messages.entries;
    const { chatId } = ownProps;

    return {
        messages,
        chatId: chatId ? chatId : null,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadMessages: () => dispatch(messagesLoad()),
        sendMessage: (message) => dispatch(messageSend(message)),
        sendMessageInNewChat: (data) => dispatch(messageSendInNewChat(data)),
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
