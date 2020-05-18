import React from 'react'
import { Link } from 'react-router-dom'

import style from './Chat.module.scss'

const Chat = props => {
    const deleteChat = event => {
        props.deleteChat(event.target.value)
    }
    return (
        <div className={style.chat}>
            <div className={style.avatarWrapper}>
                <div className={style.image}>
                    U
                </div>
            </div>
            <div className={style.bodyWrapper}>
                <Link to={`/chat/${props.chat._id}`} key={props.chat._id} >
                    <div className={style.description}>
                        <h5 className={style.h5}>{props.chat.name}</h5>
                        <p>Lorem ipsum......</p>
                    </div>
                </Link> 
                <div className={style.actions}>
                    <button onClick={deleteChat} value={props.chat._id} className={style.button}>x</button>
                </div>
            </div>
        </div>
    )
}

export default Chat