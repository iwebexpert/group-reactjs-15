import React from 'react'

import Message from './Message'
import SendMessageForm from './SendMessageForm'

import style from './Message.module.scss'

const MessageList = props => {
    return (
        <div className={style.messageList}>
            <div className={style.header}>
                <div className={style.avatarWrapper}>
                    <div className={style.image}>
                        U
                    </div>
                </div>
                <div className={style.description}>
                    <h5 className={style.h5}>Chat name</h5>
                    <p>Lorem ipsum......</p>
                </div>
            </div>
            <div className={style.messagesLayout}>
                <div className={style.messagesWrapper}>
                {
                    props.messages.map(message => {
                        return <Message key={message._id} message={message} user={props.user}/>
                    })
                }
                </div>
            </div>
            <div className={style.footer}>
                <SendMessageForm onSubmit={props.sendMessage}/>
            </div>
        </div>
    )
}

export default MessageList