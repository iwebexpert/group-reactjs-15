import React from 'react'
import classNames from 'classnames/bind'

import style from './Message.module.scss'

const classes = classNames.bind(style)

const Message = props => {
    const { message, user } = props
    const className = classes({
        message: true,
        right: message.authorId === user.id,
        left: message.authorId !== user.id,
    })
    return (
        <div className={className}>
            {message.message}
        </div>
    )
}

export default Message