import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import Header from './Header'
import { getUserData, logout } from 'reducers/userReducer'

class HeaderContainer extends PureComponent {
    componentDidMount() {
        this.props.getUserData()
    }
    render() {
        if (!this.props.isAuth) return <Redirect to='/auth' />
        return <Header 
                    id={this.props.id} 
                    username={this.props.username} 
                    logout={this.props.logout} 
                    location={this.props.location.pathname}
                />
    }
}

export default withRouter(connect(state => ({...state.user}), {getUserData, logout})(HeaderContainer))