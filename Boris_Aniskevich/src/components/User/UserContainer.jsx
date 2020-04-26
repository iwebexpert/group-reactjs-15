import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'
import { getUserData, login } from '../../reducers/userReducer'

class UserContainer extends PureComponent {
    componentDidMount() {
        this.props.getUserData()
    }
    render() {
        if (this.props.isAuth) return <Redirect to='/chat' />
        return (
            <LoginForm onSubmit={this.props.login}/>
        )
    }
}

export default connect(state => ({...state.user}), {getUserData, login})(UserContainer)