import React from 'react';
import {connect} from 'react-redux';

import {profileLoad2} from 'actions/profile';
import {Header} from "components/Header";

class ProfileContainer extends React.Component {

    componentDidMount(){
        const {loadProfile2} = this.props;
        if(!this.props.profile.length){
            loadProfile2();
        }
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
        loadProfile2: () => dispatch(profileLoad2()),
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);