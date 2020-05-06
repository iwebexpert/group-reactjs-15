import React from 'react';
import {connect} from 'react-redux';

import {Profile} from '../components/Profile';
import {profilesLoad} from '../actions/profile';
import {chatsLoad} from '../actions/chats';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const {loadProfiles} = this.props;
        if (!Object.keys(this.props.profiles).length) {
            loadProfiles(); // Получаем профили после загрузки
        }
        const {loadChats} = this.props;
        if (!Object.keys(this.props.chats).length) {
            loadChats(); // Получаем чаты после загрузки
        }
    }

    render() {
        const {profiles, chats} = this.props;
        return (
            <Profile profiles={profiles} chats={chats}/>
        );
    }
}

function mapStateToProps(state) {
    const profiles = state.profiles.entries;
    const chats = state.chats.entries;

    return {
        profiles,
        chats
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProfiles: () => dispatch(profilesLoad()),
        loadChats: () => dispatch(chatsLoad()),
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);