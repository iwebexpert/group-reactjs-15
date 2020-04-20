import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import ChatList from './ChatList'
import { getChats } from '../../reducers/chatReducer'

class ChatContainer extends PureComponent {
    componentDidMount() {
        this.props.getChats()
    }

    render() {
        const { chats, isLoading } = this.props

        return (
            <ChatList chats={chats} isLoading={isLoading} />
        )
    }
}

export default connect(state => ({...state.chat}), {getChats})(ChatContainer)