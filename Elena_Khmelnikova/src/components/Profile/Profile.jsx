import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemText } from '@material-ui/core';

export class Profile extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'>
                    <ListItemText primary='Назад'/>
                </Link>
                <p>Имя: Игорь</p>
                <p>Фамилия: Филимонов</p>
            </div>
        )
    }
}