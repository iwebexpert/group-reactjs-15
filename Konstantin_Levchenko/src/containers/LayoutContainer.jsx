import React from 'react';
import {connect} from 'react-redux';

import {Layout} from '../components/Layout';
import {chatsLoad, chatsSend, addChat} from '../actions/chats';

class LayoutContainer extends React.Component {

    componentDidMount() {
        const {loadChats} = this.props;
        loadChats(); // Получаем чаты после загрузки
    }

    handleSendMessage = (message) => {
        const {sendMessage, chatId} = this.props;

        sendMessage({
            ...message,
            chatId,
        });
    };

    handleAddChat = (chat) => {
        const {addChat} = this.props;
        const chatId = this.props.chats.length + 1;

        addChat({
            ...chat,
            chatId,
        });
    };

    render() {
        const {chats, messages} = this.props;

        return (
            <Layout sendMessage={this.handleSendMessage} messages={messages} chats={chats}
                    addChat={this.handleAddChat}/>
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
            chatsArrayForShow.push({name: chats[key].name, link: `/chats/${key}`});
        }
    }

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsSend(message)),
        addChat: (chat) => dispatch(addChat(chat)),
    }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);