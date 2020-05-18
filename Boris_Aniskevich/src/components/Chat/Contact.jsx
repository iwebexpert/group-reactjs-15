import React from 'react'

import style from './Chat.module.scss'

const Contact = props => {
    const createChat = event => {
        props.createChat(event.target.value)
    }
    return (
        <div className={style.chat}>
            <div className={style.avatarWrapper}>
                <div className={style.image}>
                    U
                </div>
            </div>
            <div className={style.bodyWrapper}>
                <div className={style.description}>
                    <h5 className={style.h5}>{props.contact.username}</h5>
                    <p>Lorem ipsum......</p>
                </div>
                <div className={style.actions}>
                    <button onClick={createChat} value={props.contact._id} className={style.button}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Contact