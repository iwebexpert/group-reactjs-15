import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import ChatList from './ChatList'
import { getChats, createChat } from 'reducers/chatReducer'
import { getContacts } from 'reducers/userReducer'

class ChatContainer extends PureComponent {
    componentDidMount() {
        this.props.getChats()
        this.props.getContacts()
    }

    createChat = data => {
        this.props.createChat(data).then(this.props.getContacts())
    }

    render() {
        const { chats, isLoading, contacts } = this.props

        return (
            <ChatList chats={chats} isLoading={isLoading} contacts={contacts} createChat={this.createChat} />
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.chat,
        contacts: state.user.contacts,
    }
}

export default connect(mapStateToProps, {getChats, getContacts, createChat})(ChatContainer)