import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Chats } from 'components/Chats';
import { chatsLoad, chatAdd, chatDelete, chatUnhighlight } from 'actions/chats';

class ChatsContainer extends React.Component {

    componentDidMount() {
        const { chats, loadChats } = this.props;

        if (!Object.keys(chats).length) {
            loadChats();
        }
    };

    handleAddChat = (newChatName) => {
        const { chats, addChat, redirect } = this.props;

        const chatsIds = Object.keys(chats);
        const newChatId = +chatsIds[chatsIds.length - 1] + 1;

        addChat({
            chatId: newChatId,
            name: newChatName,
        });

        redirect(newChatId);
    };

    handleClickChat = (chatId) => {
        const { chats, chatUnhighlight, redirect } = this.props;

        if (chats[chatId].newMessage === true) {
            chatUnhighlight({chatId});
        }

        redirect(chatId);
    };

    handleDeleteChat = (chatId) => {
        const { deleteChat } = this.props;

        deleteChat({chatId});
    };

    render() {
        const { chats } = this.props;

        return (
          <Chats
              chats={chats}
              addChat={this.handleAddChat}
              clickChat={this.handleClickChat}
              deleteChat={this.handleDeleteChat}
          />
        );
    };
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;
    const { chatId } = ownProps;

    return {
        chats,
        chatId: chatId ? chatId : null,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        redirect: (chatId) => dispatch(push(`/chat/${chatId}`)),
        loadChats: () => dispatch(chatsLoad()),
        addChat: (chat) => dispatch(chatAdd(chat)),
        deleteChat: (chatId) => dispatch(chatDelete(chatId)),
        chatUnhighlight: (chatId) => dispatch(chatUnhighlight(chatId)),
    }
}

export const ChatsRedux = connect(mapStateToProps, mapDispatchToProps)(ChatsContainer);
