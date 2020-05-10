import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Chats } from 'components/Chats';
import { chatsLoad, chatAdd } from 'actions/chats';

class ChatsContainer extends React.Component {

    componentDidMount() {
        const { chats, loadChats } = this.props;

        if (!Object.keys(chats).length) {
            loadChats();
        }
    };

    handleAddChat = (newChatName) => {
        const { chats, addChat, redirectToNewChat } = this.props;

        const newChatId = Object.keys(chats).length + 1;

        addChat({
            chatId: newChatId,
            name: newChatName,
        });

        redirectToNewChat(newChatId);
    };

    render() {
        const { chats } = this.props;

        return (
          <Chats chats={chats} addChat={this.handleAddChat}/>
        );
    };
}

function mapStateToProps(state, ownProps) {

    return {
        chats: state.chats.entries,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        redirectToNewChat: (chatId) => dispatch(push(`/chat/${chatId}`)),
        loadChats: () => dispatch(chatsLoad()),
        addChat: (chat) => dispatch(chatAdd(chat)),
    }
}

export const ChatsRedux = connect(mapStateToProps, mapDispatchToProps)(ChatsContainer);
