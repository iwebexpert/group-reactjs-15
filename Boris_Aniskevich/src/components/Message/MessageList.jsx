import React from 'react'

import Message from './Message'
import SendMessageForm from './SendMessageForm'

import style from './Message.module.scss'

const MessageList = props => {
    return (
        <div className={style.messageList}>
        {
            props.messages.map(message => {
                return <Message key={message._id} message={message} user={props.user}/>
            })
        }
            <SendMessageForm onSubmit={props.sendMessage}/>
        </div>
    )
}

export default MessageList