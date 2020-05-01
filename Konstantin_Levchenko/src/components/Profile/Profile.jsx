import React from 'react';

import './Profile.css';
import {Header} from "../Header";
import {Footer} from "../Footer";

export class Profile extends React.Component {

    render() {
        return (
            <div className='profile'>
                <Header match={this.props}/>
                <h2>Страница профиля</h2>
                <Footer/>
            </div>

        );
    }
}