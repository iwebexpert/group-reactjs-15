import React from 'react';
import { Link, ListItemText} from '@material-ui/core';

import './Header.less';

export class Header extends React.Component {
    render() {
        return (
            <div className={"header"}>
                <Link href="/profile">
                    <ListItemText primary='Профиль'/>
                </Link>
            </div>
        );
    }
}
