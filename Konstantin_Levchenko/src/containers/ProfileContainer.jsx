import React from 'react';
import {connect} from 'react-redux';

import {Profile} from '../components/Profile';
import {profilesLoad, profilesLoad2} from '../actions/profile';
import {chatsLoad, chatsLoad2} from '../actions/chats';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const {loadProfiles2} = this.props;
        if (!Object.keys(this.props.profiles).length) {
            loadProfiles2(); // Получаем профили после загрузки
        }
        const {loadChats2} = this.props;
        if (!Object.keys(this.props.chats).length) {
            loadChats2(); // Получаем чаты после загрузки
        }
    }

    render() {
        const {profiles, chats, isLoading, isError} = this.props;
        return (
            <Profile profiles={profiles} chats={chats}
                     isLoading={isLoading} isError={isError}/>
        );
    }
}

function mapStateToProps(state) {
    const profiles = state.profiles.entries;
    const chats = state.chats.entries;

    return {
        profiles,
        chats,
        isLoading: state.profiles.loading,
        isError: state.profiles.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProfiles: () => dispatch(profilesLoad()),
        loadProfiles2: () => dispatch(profilesLoad2()),
        loadChats: () => dispatch(chatsLoad()),
        loadChats2: () => dispatch(chatsLoad2()),
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);