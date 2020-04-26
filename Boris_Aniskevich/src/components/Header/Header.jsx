import React from 'react'

import style from './Header.module.scss'

const Header = props => {
    return (
        <div className={style.header}>
            <div className={style.controls}>
                <div className={style.welcome}>Welcome, {props.username}</div>
                <button onClick={props.logout} className={style.button}>Log out</button>
            </div>
        </div>
    )
}

export default Header