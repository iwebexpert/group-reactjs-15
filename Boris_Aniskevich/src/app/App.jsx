import React from 'react'
import { Route } from 'react-router-dom'

import HeaderContainer from 'components/Header/HeaderContainer'
import ProfileContainer from 'components/Profile/ProfileContainer'
import UserContainer from 'components/User/UserContainer'
import Messenger from 'components/Messenger/Messenger'

import style from './App.module.scss'

const App = () => {
    return (
        <div className={style.appWrapper}>
            <HeaderContainer />
            <Route path='/profile' component={ProfileContainer} />
            <Route path='/chat' component={Messenger} />
            <Route path='/auth' exact component={UserContainer} />
        </div>
    )
}

export default App