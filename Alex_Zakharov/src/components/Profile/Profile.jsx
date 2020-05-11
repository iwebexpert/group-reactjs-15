import React from 'react';

export class Profile extends React.Component {
    render() {
        const { profile, isLoading, isError } = this.props;

        if (isError) {
            return <div>Error. Please try refereshing your browser later.</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return <div>
            <span>Name: </span>
            <span>{profile.name}</span>
        </div>
    }
}
