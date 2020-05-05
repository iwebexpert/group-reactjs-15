import React from 'react';
import { connect } from 'react-redux';

import { Chats } from 'components/Chats';
import { chatsLoad, chatAdd } from 'actions/chats';

class ChatsContainer extends React.Component {

    componentDidMount() {
        const { loadChats } = this.props;
        loadChats();
    };

    handleAddChat = (newChatName) => {
        const { chats, addChat } = this.props;

        const chatsIds = Object.keys(chats);

        addChat({
            chatId: +chatsIds[chatsIds.length - 1] + 1,
            name: newChatName,
        });
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
        loadChats: () => dispatch(chatsLoad()),
        addChat: (chat) => dispatch(chatAdd(chat)),
    }
}

export const ChatsRedux = connect(mapStateToProps, mapDispatchToProps)(ChatsContainer);
