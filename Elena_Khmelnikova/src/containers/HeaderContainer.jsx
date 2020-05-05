import React from 'react';
import { connect } from 'react-redux';

import { Header } from 'components/Header';
import { profileLoad } from 'actions/profile';

class HeaderContainer extends React.Component {

    componentDidMount() {
        const { loadProfile } = this.props;
        loadProfile();
    }

    render() {
        const { profile } = this.props;

        return (
            <Header {...profile}/>
        )
    }
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

export const HeaderRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
