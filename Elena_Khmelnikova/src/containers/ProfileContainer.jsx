import React from 'react';
import { connect } from 'react-redux';

import { Profile } from 'components/Profile';
import { profileLoad } from 'actions/profile';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const { loadProfile } = this.props;
        loadProfile();
    }

    render() {
        const { profile } = this.props;

        return (
            <Profile {...profile}/>
        );
    };
}

function mapStateToProps(state, ownProps) {

    return {
        profile: state.profile.entries,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        loadProfile: () => dispatch(profileLoad()),
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
