import React from 'react'

import style from './Chat.module.scss'

const Chat = props => {
    return (
        <div className={style.chat}>
            {props.chat.name}
        </div>
    )
}

export default Chat