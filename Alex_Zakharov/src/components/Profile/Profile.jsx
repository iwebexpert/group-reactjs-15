import React from 'react';

export class Profile extends React.Component {
    render() {
        const { profile } = this.props;
        return <div>
            <span>Name: </span>
            <span>{profile.name}</span>
        </div>
    }
}
