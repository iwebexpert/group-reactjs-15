import React from 'react';

import { NavLink } from 'react-router-dom';
import { ListItemText, Button } from '@material-ui/core';

import './Header.less';

export class Header extends React.Component {
    render() {
        const { username } = this.props;

        return (
            <div className={'header'}>
                <Button className={'header__button'}>
                    <NavLink to='/profile' className={'header__link'}>
                        <ListItemText primary={ username }/>
                    </NavLink>
                </Button>
            </div>
        );
    }
}
