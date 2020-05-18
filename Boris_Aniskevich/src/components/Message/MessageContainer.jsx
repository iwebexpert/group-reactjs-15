import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import MessageList from './MessageList'
import { getMessages, sendMessage } from 'reducers/messageReducer'

class MessageContainer extends PureComponent {
    componentDidMount() {
        this.props.getMessages()
        this.props.ws.onmessage = event => {
            this.props.sendMessage(JSON.parse(event.data))
        }
    }

    handleMessageSend = values => {
        this.props.ws.send(JSON.stringify({...values, chatId: this.props.match.params.id, authorId: this.props.user.id}))
    }

    render() {
        const { isLoading, user } = this.props
        const id = this.props.match.params.id
        const messages = this.props.messages.filter(message => message.chatId == id)
        return <MessageList 
            messages={messages} 
            isLoading={isLoading}
            sendMessage={this.handleMessageSend}
            user={user}
        />
    }
}

const mapStateToProps = state => {
    return {
        messages: state.message.messages,
        user: state.user,
        isLoading: state.message.isLoading,
    }
}

export default connect(mapStateToProps, {getMessages, sendMessage})(MessageContainer)