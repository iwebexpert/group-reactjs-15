import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

import './Header.css';

export class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <List>
                    <ListItem>
                        <Link to='/'>
                            <ListItemText primary='Home'/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/profile'>
                            <ListItemText primary='Profile'/>
                        </Link>
                    </ListItem>
                </List>
            </div>
        );
    }
}