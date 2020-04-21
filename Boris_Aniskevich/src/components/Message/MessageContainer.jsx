import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import MessageList from './MessageList'
import { getMessages, sendMessage } from '../../reducers/messageReducer'

class MessageContainer extends PureComponent {
    componentDidMount() {
        this.props.getMessages()
    }

    handleMessageSend = values => {
        this.props.sendMessage(values.message, this.props.match.params.id)
    }

    render() {
        const { messages, isLoading, sendMessage } = this.props
        const id = this.props.match.params.id
        return <MessageList 
            messages={!(id in messages) ? [] : messages[id]} 
            isLoading={isLoading}
            sendMessage={this.handleMessageSend}
        />
    }
}

export default connect(state => ({...state.message}), {getMessages, sendMessage})(MessageContainer)