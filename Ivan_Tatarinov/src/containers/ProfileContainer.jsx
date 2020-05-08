import React from 'react';
import {connect} from 'react-redux';

import {profileLoad} from 'actions/profile';
import {Header} from "components/Header";

class ProfileContainer extends React.Component {

    componentDidMount(){
        const {loadProfile} = this.props;
        loadProfile();
    }

    render(){
        const {profile} = this.props;

        return (
            <Header profile={profile} />
        );
    }
}

function mapStateToProps(state, ownProps){
    const profile = state.profile.entries;

    return {
        profile,
    };
}

function mapDispatchToProps(dispatch){
    return {
        loadProfile: () => dispatch(profileLoad()),
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);