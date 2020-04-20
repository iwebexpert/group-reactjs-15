import React from 'react'

import style from './Message.module.scss'

const Message = props => {
    const { message } = props
    return (
        <div className={style.message}>
            {message.message}
        </div>
    )
}

export default Message