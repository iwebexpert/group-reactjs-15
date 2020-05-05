import React from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messenger';
import { chatsLoad, chatsSend } from 'actions/chats';

class MessengerContainer extends React.Component {

    componentDidMount() {
        const { loadChats } = this.props;
        loadChats();
    }

    handleSendMessage = (message) => {
        const { sendMessage, id } = this.props;

        sendMessage({
            ...message,
            id,
        });
    };

    render() {
        const { chats, messages } = this.props;

        return (
            <Messenger sendMessage={this.handleSendMessage} messages={messages} chats={chats} />
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
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsSend(message)),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);