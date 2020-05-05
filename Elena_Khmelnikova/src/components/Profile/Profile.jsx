import React from 'react';
import { Link } from 'react-router-dom';

import { ListItemText } from '@material-ui/core';

export class Profile extends React.Component {

    render() {
        const { username, email, firstName, lastName } = this.props;

        return (
            <div>
                <Link to='/'>
                    <ListItemText primary='Назад'/>
                </Link>
                <h3>{ username }</h3>
                <p>Email: { email }</p>
                <p>Имя: { firstName }</p>
                <p>Фамилия: { lastName }</p>
            </div>
        )
    }
}