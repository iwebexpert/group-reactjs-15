import React from 'react'

import style from './Form.module.scss'

const Input = ({input, label, type, meta: { touched, error }}) => {
    return (
        <>
            <input {...input} placeholder={label} type={type} className={style.input + ' ' + (touched && error && style.error)}/>
            {touched && error && <div><span>{error}</span></div>}
        </>
    )
}

export default Input