import React from 'react';
import { connect } from 'react-redux';

import { Profile } from 'components/Profile';
import { profileLoad, profileLoad2 } from 'actions/profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { loadProfile2 } = this.props;
        if (!this.props.profile.length) {
            loadProfile2();
        }
    }

    render() {
        const { profile, isLoading, isError } = this.props;
        return <Profile
            isLoading={isLoading}
            isError={isError}
            profile={profile} />;
    }
}

function mapStateToProps(state, ownProps) {
    const profile = state.profile.entries;
    return {
        profile: profile,
        isLoading: state.profile.loading,
        isError: state.profile.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProfile: () => dispatch(profileLoad()),
        loadProfile2: () => dispatch(profileLoad2()),
    };
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
