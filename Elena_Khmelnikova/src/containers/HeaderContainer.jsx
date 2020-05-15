import React from 'react';
import { connect } from 'react-redux';

import { Header } from 'components/Header';
import { profileLoad } from 'actions/profile';

class HeaderContainer extends React.Component {

    componentDidMount() {
        const { profile, loadProfile } = this.props;

        if (!Object.keys(profile).length) {
            loadProfile();
        }
    }

    render() {
        const { profile } = this.props;

        return (
            <Header {...profile}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile.entries,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProfile: () => dispatch(profileLoad()),
    }
}

export const HeaderRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
