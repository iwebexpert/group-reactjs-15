import React from 'react'

import style from './Profile.module.scss'

const Profile = props => {
    return (
        <div className={style.main}>
            <div>{props.id} - {props.username}</div>
        </div>  
    )
}

export default Profile