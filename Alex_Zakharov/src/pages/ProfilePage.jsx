import React from 'react';

import { ProfileRedux } from 'containers/ProfileContainer';

export class ProfilePage extends React.Component {
    render() {
        return <div>
            <h1>Profile Page</h1>
            <p>
                This is profile page.
                <ProfileRedux />
            </p>
        </div>
    }
}