import React from 'react';
import { Link, ListItemText} from '@material-ui/core';

export class Profile extends React.Component {
    render() {
        return (
            <div>
                <Link href="/">
                    <ListItemText primary='Назад'/>
                </Link>
                <p>Имя: Игорь</p>
                <p>Фамилия: Филимонов</p>
            </div>
        )
    }
}