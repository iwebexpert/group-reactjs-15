import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import { getUserData, login, signUp } from 'reducers/userReducer'

class UserContainer extends PureComponent {
    state = {
        toggleForm: true,
    }
    componentDidMount() {
        this.props.getUserData()
    }
    handleToggleForm = () => {
        this.setState({ toggleForm: !this.state.toggleForm })
    }
    render() {
        if (this.props.isAuth) return <Redirect to='/chat' />
        return (
            <>
            {
                this.state.toggleForm 
                ? <LoginForm onSubmit={this.props.login} handleToggleForm={this.handleToggleForm}/>
                : <RegistrationForm onSubmit={this.props.signUp} handleToggleForm={this.handleToggleForm}/>
            }
            </>
        )
    }
}

export default connect(state => ({...state.user}), {getUserData, login, signUp})(UserContainer)