import React from 'react'

import Message from './Message'

import style from './Message.module.scss'

const MessageList = props => {
    return (
        <div className={style.messageList}>
        {
            props.messages.map(message => {
                return <Message key={message.id} message={message} />
            })
        }
        </div>
    )
}

export default MessageList