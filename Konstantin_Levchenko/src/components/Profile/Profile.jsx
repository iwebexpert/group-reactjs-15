import React from 'react';
import {Link} from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';

import './Profile.css';
import {Header} from "../Header";
import {Footer} from "../Footer";

export class Profile extends React.Component {

    render() {
        const {profiles, chats, isLoading, isError} = this.props;

        if (isLoading) {
            return (<div>Loading...</div>);
        }

        if (isError) {
            return (<div>Error... Мы уже работаем над этим...</div>);
        }

        const profile = Object.entries(profiles).map((profile) =>
            <div className='profiles-item' key={profile['0']}>
                <p>Name: {profile['1'].name}</p>
                <p>Age: {profile['1'].age}</p>
                <Link to={(chats[profile['0']]) ? '/chats/' + profile['0'] : '/'}>
                    <ListItemText
                        primary={(chats[profile['0']]) ? (chats[profile['0']].name) : 'chats'}
                    />
                </Link>
            </div>
        );
        return (
            <div className='profiles'>
                <Header/>
                <h2>Страница профиля</h2>
                <div className='profiles-items'>
                    {profile}
                </div>
                <Footer/>
            </div>
        );
    }
}