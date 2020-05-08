import React from 'react'
import { Link } from 'react-router-dom'

import Chat from './Chat'
import Contact from './Contact'

import style from './Chat.module.scss'

const ChatList = props => {
    return (
        <div className={style.chatList}>
        Chats
        {
            props.chats.map(chat => {
                return (
                    <Link to={`/chat/${chat.id}`} key={chat.id} >
                        <Chat chat={chat} deleteChat={props.deleteChat} />
                    </Link> 
                )
            })
        }
        <hr />
        Contacts
        {
            props.contacts.map(contact => {
                return (
                    <Contact contact={contact} createChat={props.createChat} key={contact.id}/>
                )
            })
        }
        </div>
    )
}

export default ChatList