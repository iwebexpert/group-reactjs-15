import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import MessageList from './MessageList'
import { getMessages, sendMessage } from 'reducers/messageReducer'

class MessageContainer extends PureComponent {
    componentDidMount() {
        this.props.getMessages()
    }

    handleMessageSend = values => {
        this.props.sendMessage(values.message, this.props.match.params.id, this.props.user.id)
    }

    render() {
        const { messages, isLoading, user } = this.props
        const id = this.props.match.params.id
        return <MessageList 
            messages={!(id in messages) ? [] : messages[id]} 
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