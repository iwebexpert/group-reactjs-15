import React from 'react';

import './Header.scss'

export class Header extends React.Component {

    render() {
        const {profile} = this.props;
        return <div className={'header'}>
            <h2>{profile.name}</h2>
            <span>{profile.birthday}</span>
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
        </div>;
    }
}