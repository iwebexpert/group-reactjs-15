import React from 'react'
import { Link } from 'react-router-dom'

import style from './Header.module.scss'

const Header = props => {
    return (
        <div className={style.header}>
                {
                    props.location === '/profile'
                    ? <button className={style.button}><Link to='/chat'>Chats</Link></button>
                    : <button className={style.button}><Link to='/profile'>Profile</Link></button>
                }
                <button onClick={props.logout} className={style.button}>Log out</button>
        </div>
    )
}

export default Header