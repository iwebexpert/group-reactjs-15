import React from 'react'
import classNames from 'classnames/bind'

import style from './Message.module.scss'

const classes = classNames.bind(style)

const Message = props => {
    const { message, user } = props
    const className = classes({
        messageItem: true,
        right: message.authorId == user.id,
        left: message.authorId != user.id,
    })
    return (
        <div className={className}>
            <div className={style.messageDescription}>
                <div className={style.messageAvatarWrapper}>
                    <div className={style.image}>
                        U
                    </div>
                </div>
                <div>
                    <h5 className={style.h5}>{props.message.authorId}</h5>
                    <p>{props.message.createdAt}</p>
                </div>
            </div>
            <div className={style.message}>
                {message.message}
            </div>
        </div>
        
    )
}

export default Message