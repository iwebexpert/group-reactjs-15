import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Profile from './Profile'

class ProfileContainer extends PureComponent {
    render() {
        return (
            <Profile id={this.props.id} username={this.props.username} />
        )
    }
}

export default connect(state => ({...state.user}), {})(ProfileContainer)