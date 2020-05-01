import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

import './Header.css';

export class Header extends React.Component {

    render() {
        const {match} = this.props.match
        let link = '/profile';
        let name = 'Profile';
        if (match.url === '/profile') {
            link = '/';
            name = 'Home';
        }
        return (
            <div className='header'>
                <List>
                    <ListItem>
                        <Link to={link}>
                            <ListItemText primary={name}/>
                        </Link>
                    </ListItem>
                </List>
            </div>
        );
    }
}