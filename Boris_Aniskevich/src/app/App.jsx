import React from 'react'

import Header from '../components/Header/Header'
import ChatContainer from '../components/Chat/ChatContainer'
import Message from '../components/Message/Message'

import style from './App.module.scss'

const App = () => {
    return (
        <div className={style.appWrapper}>
            <Header />
            <ChatContainer />
            <Message />
        </div>
    )
}

export default App