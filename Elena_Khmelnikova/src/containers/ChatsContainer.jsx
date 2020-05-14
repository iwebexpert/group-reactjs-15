import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Chats } from 'components/Chats';
import { chatsLoadApi, chatAdd, chatDelete, chatUnhighlight } from 'actions/chats';

class ChatsContainer extends React.Component {

    componentDidMount() {
        const { chats, loadChatsApi } = this.props;

        if (!Object.keys(chats).length) {
            loadChatsApi();
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
        const { chats, isLoading, isError } = this.props;

        return (
          <Chats
              chats={chats}
              isLoading={isLoading}
              isError={isError}
              addChat={this.handleAddChat}
              clickChat={this.handleClickChat}
              deleteChat={this.handleDeleteChat}
          />
        );
    };
}

function mapStateToProps(state, ownProps) {
    const { chatId } = ownProps;

    return {
        chats: state.chats.entries,
        isLoading: state.chats.loading,
        isError: state.chats.error,
        chatId: chatId ? chatId : null,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        redirect: (chatId) => dispatch(push(`/chat/${chatId}`)),
        loadChatsApi: () => dispatch(chatsLoadApi()),
        addChat: (chat) => dispatch(chatAdd(chat)),
        deleteChat: (chatId) => dispatch(chatDelete(chatId)),
        chatUnhighlight: (chatId) => dispatch(chatUnhighlight(chatId)),
    }
}

export const ChatsRedux = connect(mapStateToProps, mapDispatchToProps)(ChatsContainer);
