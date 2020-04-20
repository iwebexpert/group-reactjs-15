import React from 'react'

import Chat from './Chat'

import style from './Chat.module.scss'

const ChatList = props => {
    return (
        <div className={style.chatList}>
           {props.chats.map(chat => <Chat key={chat.id} chat={chat} />)}
        </div>
    )
}

export default ChatList