import React from 'react';
import { connect } from 'react-redux';

import { Profile } from 'components/Profile';
import { profileLoad } from 'actions/profile';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const { profile, loadProfile } = this.props;

        if (!Object.keys(profile).length) {
            loadProfile();
        }
    }

    render() {
        const { profile, isLoading, isError } = this.props;

        return (
            <Profile {...profile} isLoading={isLoading} isError={isError}/>
        );
    };
}

function mapStateToProps(state, ownProps) {

    return {
        profile: state.profile.entries,
        isLoading: state.profile.loading,
        isError: state.profile.error,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        loadProfile: () => dispatch(profileLoad()),
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
