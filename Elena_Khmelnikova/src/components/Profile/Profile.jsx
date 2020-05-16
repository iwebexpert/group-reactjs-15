import React from 'react';
import { Link } from 'react-router-dom';

import { ListItemText } from '@material-ui/core';

export class Profile extends React.Component {

    render() {
        const { username, email, firstName, lastName, isLoading, isError } = this.props;

        return (
            <div>
                {isLoading && <p>Загрузка...</p>}
                {isError && <p>Ошибка загрузки</p>}
                {username && <div>
                    <Link to='/'>
                        <ListItemText primary='Назад'/>
                    </Link>
                    <h3>{username}</h3>
                    <p>Email: {email}</p>
                    <p>Имя: {firstName}</p>
                    <p>Фамилия: {lastName}</p>
                </div>}
            </div>
        )
    }
}