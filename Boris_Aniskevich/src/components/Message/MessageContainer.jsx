import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import MessageList from './MessageList'
import { getMessages } from '../../reducers/messageReducer'

class MessageContainer extends PureComponent {
    componentDidMount() {
        this.props.getMessages()
    }

    render() {
        const { messages, isLoading } = this.props
        return <MessageList 
            messages={!(this.props.match.params.id in messages) ? [] : messages[this.props.match.params.id]} 
            isLoading={isLoading} 
        />
    }
}

export default connect(state => ({...state.message}), {getMessages})(MessageContainer)