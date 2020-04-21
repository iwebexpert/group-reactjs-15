import React from 'react'

import Message from './Message'
import SendMessageForm from './SendMessageForm'

import style from './Message.module.scss'

const MessageList = props => {
    return (
        <div className={style.messageList}>
        {
            props.messages.map(message => {
                return <Message key={message.id} message={message} />
            })
        }
            <SendMessageForm onSubmit={props.sendMessage}/>
        </div>
    )
}

export default MessageList