import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Chat from './Chat'
import Contact from './Contact'

import style from './Chat.module.scss'

const ChatList = props => {
    const deleteChat = event => {
        props.deleteChat(event.target.value)
    }
    return (
        <div className={style.chatList}>
        Chats
        {
            props.chats.map(chat => {
                return (
                    <Fragment key={chat.id} >
                        <Link to={`/chat/${chat.id}`} >
                            <Chat chat={chat} deleteChat={props.deleteChat} />
                        </Link> 
                        <button onClick={deleteChat} value={chat.id}>delete</button>
                    </Fragment>
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