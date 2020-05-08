import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'

import HeaderContainer from 'components/Header/HeaderContainer'
import ProfileContainer from 'components/Profile/ProfileContainer'
import UserContainer from 'components/User/UserContainer'
import Messenger from 'components/Messenger/Messenger'

import style from './App.module.scss'

class App extends PureComponent {
    ws = new WebSocket('ws://localhost:4000')
    componentDidMount() {
        this.ws.onopen = () => {
            console.log('connected')
        }
        this.ws.onclose = () => {
            console.log('disconnected')
        }
    }
    render() {
        return (
            <div className={style.appWrapper}>
                <HeaderContainer />
                <Route path='/profile' component={ProfileContainer} />
                <Route path='/chat' render={(props) => <Messenger {...props} ws={this.ws} />} />
                <Route path='/auth' exact component={UserContainer} />
            </div>
        )
    }   
}

export default App