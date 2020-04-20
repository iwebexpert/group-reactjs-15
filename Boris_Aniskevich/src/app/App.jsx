import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header/Header'
import ChatContainer from '../components/Chat/ChatContainer'
import MessageContainer from '../components/Message/MessageContainer'

import style from './App.module.scss'

const App = () => {
    return (
        <div className={style.appWrapper}>
            <Header />
            <ChatContainer />
            <Route path='/chat/:id' component={MessageContainer} />
        </div>
    )
}

export default App