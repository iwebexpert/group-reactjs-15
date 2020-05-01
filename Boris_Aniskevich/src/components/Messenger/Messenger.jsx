import React from 'react'
import { Route } from 'react-router-dom'

import ChatContainer from '../Chat/ChatContainer'
import MessageContainer from '../Message/MessageContainer'

import style from './Messenger.module.scss'

const Messenger = () => {
    return (
        <div className={style.messengerLayout}>
            <Route path='/chat' component={ChatContainer} />
            <Route path='/chat/:id' component={MessageContainer} />
        </div>
    )
}

export default Messenger