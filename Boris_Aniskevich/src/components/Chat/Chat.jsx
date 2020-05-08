import React from 'react'

import style from './Chat.module.scss'

const Chat = props => {
    const deleteChat = event => {
        props.deleteChat(event.target.value)
    }
    return (
        <div className={style.chat}>
            {props.chat.name}
            <button onClick={deleteChat} value={props.chat.id}>delete</button>
        </div>
    )
}

export default Chat