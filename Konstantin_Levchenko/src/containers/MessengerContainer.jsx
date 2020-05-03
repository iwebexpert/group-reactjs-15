import React from 'react';
import {connect} from 'react-redux';

import {Messenger} from 'components/Messenger';
import {chatsLoad, chatsSend} from 'actions/chats';

class MessengerContainer extends React.Component {

    componentDidMount() {
        const {loadChats} = this.props;
        loadChats(); // Получаем чаты после загрузки Messenger
    }

    handleSendMessage = (message) => {
        const {sendMessage, chatId} = this.props;

        sendMessage({
            ...message,
            chatId,
        });
    };

    render() {
        const {chats, messages} = this.props;

        return (
            <Messenger sendMessage={this.handleSendMessage} messages={messages} chats={chats}/>
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
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);