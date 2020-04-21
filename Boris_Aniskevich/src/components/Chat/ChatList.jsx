import React from 'react'
import { Link } from 'react-router-dom'

import Chat from './Chat'

import style from './Chat.module.scss'

const ChatList = props => {
    return (
        <div className={style.chatList}>
        {
            props.chats.map(chat => {
                return (
                    <Link to={`/chat/${chat.id}`} key={chat.id} >
                        <Chat chat={chat} />
                    </Link> 
                )
            })
        }
        </div>
    )
}

export default ChatList