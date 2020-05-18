import React, { Fragment } from 'react'

import Chat from './Chat'
import Contact from './Contact'

import style from './Chat.module.scss'

const ChatList = props => {
    return (
        <div className={style.chatList}>
            <div className={style.header}>
                <span className={style.span}>Chats</span>
            </div>
            {
                props.chats.map(chat => {
                    return (
                        <Chat chat={chat} deleteChat={props.deleteChat} key={chat._id} />
                    )
                })
            }
            <div className={style.header}>
                <span className={style.span}>Contacts</span>
            </div>
            {
                props.contacts.map(contact => {
                    return (
                        <Contact contact={contact} createChat={props.createChat} key={contact._id}/>
                    )
                })
            }
        </div>
    )
}

export default ChatList