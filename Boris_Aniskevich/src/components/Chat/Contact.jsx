import React from 'react'

import style from './Chat.module.scss'

const Contact = props => {
    const createChat = event => {
        props.createChat(event.target.value)
    }
    return (
        <div className={style.contact}>
            {props.contact.username}
            <button onClick={createChat} value={props.contact.id}>Add</button>
        </div>
    )
}

export default Contact