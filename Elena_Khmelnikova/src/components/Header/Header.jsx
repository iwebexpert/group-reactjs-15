import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemText } from '@material-ui/core';

import './Header.less';

export class Header extends React.Component {
    render() {
        return (
            <div className={"header"}>
                <Link to='/profile'>
                    <ListItemText primary='Профиль'/>
                </Link>
            </div>
        );
    }
}
